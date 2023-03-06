import {WFMComponent} from '../../framework'
import {router} from "../../framework/tools/router";

class AppFooter extends WFMComponent {
  constructor(config) {
    super(config);
  }

  beforeMount() {
    console.log('Footer prepare for mounting');
  }

  mounted() {
    console.log('Footer is mounted');
  }

  events() {
    return {
      'click button[data-link]': 'onButtonClick',
    };
  }

  onButtonClick({target}) {
    router.navigate(target.dataset.link);
  }
}

export const appFooter = new AppFooter({
  selector: 'app-footer',
  template: `
    <footer>
      <button data-link="">Home</button>

      <button data-link="about">About</button>
    </footer>
  `,
})
