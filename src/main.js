import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './assets/styles.css'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/md-light-deeppurple/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/chart'
import PrimeVue from 'primevue/config'

createApp(App).use(PrimeVue).mount('#app')
