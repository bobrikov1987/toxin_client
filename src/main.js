import './styles'

import {_, bootstrap} from 'fw'
import {appModule} from './app/app.module'

_.delay(500).then(() => {
  bootstrap(appModule);
})
