const dataParse = (data) => {
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

const delay = (ms = 1000) => (
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  })
)

const isExist = (v) => (typeof v !== 'undefined')

const isFunction = (f) => (typeof f === 'function')

const _uniteAttributes = (source, target) => {
  for (let i = 0; i < source.attributes.length; i += 1) {
    const {name, value} = source.attributes[i];
    if (!target.hasAttribute(name)) {
      target.setAttribute(name, value);
    } else if (['class', 'style'].includes(name)) {
      target.setAttribute(name, `${value} ${target.getAttribute(name)}`);
    }
  }
}

const replaceNode = (node, template) => {
  node.insertAdjacentHTML('afterend', template);
  const result = node.nextElementSibling;
  _uniteAttributes(node, result);
  node.remove();
  return result;
}

export const _ = {
  dataParse,
  delay,
  isExist,
  isFunction,
  replaceNode,
}
