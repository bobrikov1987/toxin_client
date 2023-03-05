import {bootstrap, wfm} from './framework'
import {appModule} from './app/app.module'

wfm.delay(500).then(() => {
  bootstrap(appModule);
})
