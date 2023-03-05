import {WFMModule} from '../framework'
import {appComponent} from './app.component'
import {appRoutes} from './app.routes'
import {appHeader} from './common/app.header'
import {appFooter} from './common/app.footer'

class AppModule extends WFMModule {
  constructor(config) {
    super(config);
  }
}

export const appModule = new AppModule({
  root: appComponent,
  routes: appRoutes,
  components: [
    appHeader,
    appFooter,
  ],
})
