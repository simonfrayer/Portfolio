import { createApp } from 'vue'
import PortfolioApp from './PortfolioApp.vue'
import router from '@/router'
import "@/index.css";



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAnglesDown, faBars, faCircleChevronUp, faCircleDot, faCopyright, faEarthEurope, faEnvelope, faGraduationCap, faPhone, faSchool, faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faAnglesDown)
library.add(faGraduationCap)
library.add(faSchool)
library.add(faEarthEurope)
library.add(faCircleDot)
library.add(faEnvelope)
library.add(faPhone)
library.add(faCircleChevronUp)
library.add(faCopyright)
library.add(faXmark)
library.add(faBars)

import './assets/css/basicSetup.css'

createApp(PortfolioApp)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
