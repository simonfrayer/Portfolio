import { createApp } from 'vue'
import PortfolioApp from './PortfolioApp.vue'
import "@/index.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faAnglesDown)

import './assets/css/basicSetup.css'

createApp(PortfolioApp)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
