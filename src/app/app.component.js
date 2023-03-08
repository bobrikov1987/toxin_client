import {FWComponent} from 'fw'

class AppComponent extends FWComponent {
  constructor(config) {
    super(config);
  }
}

export const appComponent = new AppComponent({
  selector: 'app-root',
  template: `<div>
    <app-header data-title="Header"></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  </div>`,
})
