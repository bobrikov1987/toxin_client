import {WFMComponent} from '../../framework'

class AppFooter extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const appFooter = new AppFooter({
  selector: 'app-footer',
  template: `
    <footer>
      Footer App
    </footer>
  `,
})
