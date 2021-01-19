import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import '@/styles/index.scss'

import v3Ui from './packages/index'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(v3Ui)
app.mount('#app')
