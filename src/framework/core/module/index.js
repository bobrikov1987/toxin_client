import {_} from 'fw'
import {RoutingModule} from './routing'

function initComponents(parentEl) {
  const {root} = this;
  if (!_.isExist(root)) throw new Error('Root component is not defined');

  root.render();
  while (this.components.some(c => c.render(parentEl))) {}
}

function initRouting() {
  const {routes} = this;
  if (!_.isExist(routes)) return;

  const routing = new RoutingModule(routes);
  routing.init();
}

export class Module {
  constructor(config) {
    this.root = config.root ?? null;
    this.routes = config.routes ?? null;
    this.components = config.components ?? [];
    this.isStarted = false;
  }

  start() {
    if (this.isStarted) return;

    initComponents.call(this);
    initRouting.call(this);
    this.isStarted = true;
  }
}
