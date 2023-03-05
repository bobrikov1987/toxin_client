import {WFMComponent} from '../../framework'

class HomePageComponent extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const homePage = new HomePageComponent({
  selector: 'home-page',
  template: `
    <div>
      <h1>Home Page</h1>
    </div>
  `
})
