import {homePage} from './pages/home-page.component'
import {aboutPage} from './pages/about-page.component'

export const appRoutes = [
  {
    path: '',
    component: homePage,
  },
  {
    path: 'about',
    component: aboutPage,
  },
]
