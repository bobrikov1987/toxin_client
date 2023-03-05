import {WFMComponent} from '../../framework'

class AppHeader extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const appHeader = new AppHeader({
  selector: 'app-header',
  template: `
    <header>
      <span>
        Header App
      </span>

      <nav>
        <ul>
          <li><a href="/#">home</a></li>

          <li><a href="/#about">about</a></li>
        </ul>
      </nav>
    </header>
  `,
})
