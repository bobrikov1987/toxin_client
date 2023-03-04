export class Component {
  constructor(config) {
    this.selector = config.selector;
    this.template = config.template;
  }

  render() {
    this.el = document.querySelector(this.selector);
    if (!this.el) return;
    this.el.innerHTML = this.template;
  }
}
