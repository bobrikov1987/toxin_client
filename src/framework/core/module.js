import {router} from "../tools/router";

export class Module {
  constructor(config) {
    this.root = config.root;
    this.routes = config.routes;
    this.components = config.components;
    this.pages = {};
    this.main = null;
    this.isStarted = false;
    this.renderComponent = this.renderComponent.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  renderComponent(component, parent = document) {
    return component.render(parent);
  }

  renderPage() {
    if (!this.main) return;

    const url = router.getUrl();
    const route = this.routes.find(r => r.path === url);
    if (!route) {
      return router.redirect();
    }

    const selector = route.component.selector;
    Object.keys(this.pages).forEach(s => this.pages[s].hidden = true);
    if (this.pages[selector]) {
      return this.pages[selector].hidden = false;
    }

    this.main.insertAdjacentHTML('beforeend', `<${selector}></${selector}>`);
    this.pages[selector] = this.renderComponent(route.component, this.main);
    this.initComponents(this.pages[selector]);
  }

  initComponents(parent = document) {
    while (this.components.some(c => this.renderComponent(c, parent))) {}
  }

  initRoutes() {
    window.addEventListener('hashchange', this.renderPage);
    this.renderPage();
  }

  start() {
    if (this.isStarted) return;

    this.root.render();
    const routerOutlet = document.querySelector('router-outlet');
    if (routerOutlet) {
      routerOutlet.insertAdjacentHTML('afterend', '<main></main>');
      this.main = routerOutlet.nextElementSibling;
      routerOutlet.remove();
    }
    if (this.routes) this.initRoutes();
    this.initComponents();
    this.isStarted = true;
  }
}
