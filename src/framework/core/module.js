export class Module {
  constructor(config) {
    this.components = config.components;
  }

  initComponents() {
    this.components.forEach(c => c.render());
  }

  start() {
    this.initComponents();
  }
}
