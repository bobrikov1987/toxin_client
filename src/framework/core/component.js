import {wfm} from '../tools/utils'

const EVENTS = 'events'
const BEFORE_MOUNT = 'beforeMount'
const MOUNTED = 'mounted'

export class Component {
  constructor(config) {
    this.selector = config.selector;
    this.template = config.template;
  }

  _initEvent(el) {
    if (!wfm.isExist(this[EVENTS])) return;

    const events = this[EVENTS]();
    Object.keys(events).forEach(key => {
      const handler = this[events[key]];
      if (!wfm.isFunction(handler)) return;

      let [type, selector] = key.split(' ');
      el.querySelectorAll(selector)
        ?.forEach(el => el.addEventListener(type, handler.bind(this)));
    })
  }

  render(parent = document.body) {
    let el = parent.querySelector(this.selector);
    if (!el) return null;

    if (wfm.isExist(this[BEFORE_MOUNT])) this[BEFORE_MOUNT]();
    el = wfm.insertComponent(el, this.template);
    this._initEvent(el);
    if (wfm.isExist(this[MOUNTED])) this[MOUNTED]();
    return el;
  }
}
