import {_} from 'fw'

const EVENTS = 'events'
const BEFORE_MOUNT = 'beforeMount'
const MOUNTED = 'mounted'

function initEvents() {
  if (!_.isExist(this[EVENTS])) return;

  const events = this[EVENTS]();
  Object.keys(events).forEach(key => {
    const handler = this[events[key]];
    if (!_.isFunction(handler)) return;
    const [type, selector] = key.split(' ');
    this.last
      ?.querySelectorAll(selector)
      ?.forEach(el => el.addEventListener(type, handler.bind(this)));
  });
}

export class Component {
  constructor(config) {
    this.selector = config.selector;
    this.template = config.template;
    this.nodeList = [];
  }

  get count() {
    return this.nodeList.length;
  }

  get last() {
    return (this.count > 0 ? this.nodeList[this.count - 1] : null);
  }

  getNode(n) {
    if (n < 1 || n >= this.count) return null;

    return this.nodeList[n - 1];
  }

  render(parentEl = document.body) {
    const sourceEl = parentEl.querySelector(this.selector);
    if (!sourceEl) return false;

    if (_.isExist(this[BEFORE_MOUNT])) this[BEFORE_MOUNT]();
    this.nodeList.push(_.replaceNode(sourceEl, this.template));
    initEvents.call(this);
    if (_.isExist(this[MOUNTED])) this[MOUNTED]();
    return true;
  }
}
