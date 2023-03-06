import {router} from '../tools/router'
import {wfm} from '../tools/utils'

export class Module {
  constructor(config) {
    this.root = config.root;
    this.components = config.components;
    this.routes = config.routes;
    this.main = null;
    this.pages = {};
    this.isStarted = false;
    this.renderComponent = this.renderComponent.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  renderComponent(component, parent = document.body) {
    return component.render(parent);
  }

  _initComponents(parent = document.body) {
    while (this.components.some(c => this.renderComponent(c, parent))) {}
  }

  renderPage() {
    if (!this.main || !this.routes) return;

    const url = router.getUrl();
    const route = this.routes.find(r => r.path === url);
    if (!route) return router.navigate();

    const {selector} = route.component;
    Object.keys(this.pages).forEach(s => this.pages[s].hidden = true);
    if (this.pages[selector]) return this.pages[selector].hidden = false;

    this.main.insertAdjacentHTML('beforeend', `<${selector}></${selector}>`);
    this.pages[selector] = this.renderComponent(route.component, this.main);
    this._initComponents(this.pages[selector]);
  }

  _initRoutes() {
    if (!this.routes) return;

    window.addEventListener('hashchange', this.renderPage);
    this.renderPage();
  }

  start() {
    if (this.isStarted) return;

    this.root.render();
    const routerOutlet = document.body.querySelector('router-outlet');
    if (routerOutlet) {
      this.main = wfm.insertComponent(routerOutlet, '<main></main>');
    }
    this._initComponents();
    this._initRoutes();
    this.isStarted = true;
  }
}
