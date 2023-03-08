import {router, _} from 'fw'

const ROUTER_OUTLET = 'router-outlet'

function createMainEl() {
  const routerOutlet = document.body.querySelector(ROUTER_OUTLET);
  if (!_.isExist(routerOutlet)) throw new Error('Tag <router-outlet /> is not defined');

  return _.replaceNode(routerOutlet, '<main></main>')
}

function renderPage(pages, routes, mainEl) {
  if (!routes || !mainEl) return;

  const url = router.getUrl();
  const route = routes.find(r => (r.path === url));
  if (!route) return router.navigate();

  const {component} = route;
  const {selector} = component;
  Object.keys(pages).forEach(ps => pages[ps].hidden = true);
  if (pages[selector]) return pages[selector].hidden = false;

  mainEl.insertAdjacentHTML('beforeend', `<${selector}></${selector}>`);
  component.render(mainEl);
  pages[selector] = component.last;
}

export class RoutingModule {
  constructor(routes = null) {
    this.routes = routes;
    this.isInit = false;
    this.mainEl = null;
    this.pages = {};
  }

  init() {
    if (this.isInit || !this.routes) return;

    const render = () => renderPage(this.pages, this.routes, this.mainEl);
    this.mainEl = createMainEl();
    window.addEventListener('hashchange', render);
    render();
    this.isInit = true;
  }
}
