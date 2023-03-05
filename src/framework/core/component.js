const uniteAttributes = (source, target) => {
  for (let i = 0; i < source.attributes.length; i += 1) {
    const name = source.attributes[i].name;
    const value = source.attributes[i].value;
    if (target.hasAttribute(name)) {
      target.setAttribute(name, `${value} ${target.getAttribute(name)}`);
    } else target.setAttribute(name, value);
  }
}

export class Component {
  constructor(config) {
    this.selector = config.selector;
    this.template = config.template;
  }

  render(parent = document) {
    const sourceEl = parent.querySelector(this.selector);
    if (!sourceEl) return null;

    sourceEl.insertAdjacentHTML('afterend', this.template);
    const targetEl = sourceEl.nextElementSibling;
    uniteAttributes(sourceEl, targetEl);
    sourceEl.remove();
    return targetEl;
  }
}
