import {FWModule} from 'fw'
import {appComponent} from './app.component'
import {routes} from './routes'
import {components} from './components'

class AppModule extends FWModule {
  constructor(config) {
    super(config);
  }
}

export const appModule = new AppModule({
  root: appComponent,
  routes: routes,
  components: components,
})
