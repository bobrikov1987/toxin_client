const _uniteAttributes = (source, target) => {
  for (let i = 0; i < source.attributes.length; i += 1) {
    const name = source.attributes[i].name;
    const value = source.attributes[i].value;
    if (target.hasAttribute(name)) {
      target.setAttribute(name, `${value} ${target.getAttribute(name)}`);
    } else target.setAttribute(name, value);
  }
}

const delay = (ms = 1000) => (
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  })
)

const isExist = (v) => (typeof v !== 'undefined')

const isFunction = (f) => (typeof f === 'function')

const replaceNode = (node, template) => {
  node.insertAdjacentHTML('afterend', template);
  const result = node.nextElementSibling;
  _uniteAttributes(node, result);
  node.remove();
  return result;
}

export const _ = {
  delay,
  isExist,
  isFunction,
  replaceNode,
}
