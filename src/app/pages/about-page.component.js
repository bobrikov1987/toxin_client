import {FWComponent} from 'fw'

class AboutPageComponent extends FWComponent {
  constructor(config) {
    super(config);
  }
}

export const aboutPage= new AboutPageComponent({
  selector: 'about-page',
  template: `
    <div>
      <h1>About Page</h1>
    </div>
  `,
})
