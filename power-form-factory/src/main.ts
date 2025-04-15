import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ELEMENT from 'element-plus'
import 'element-plus/dist/index.css'
import formCreate from '@form-create/element-ui'
import FcDesigner from '@senseauto-v2x-cloud/form-create-designer'

import App from './App.vue'
import router from './router'
import registerGlobalComps from './register.global-comps'

const app = createApp(App)

// Register global components
registerGlobalComps(app)

app.use(ELEMENT)
app.use(formCreate)
app.use(FcDesigner)

app.use(createPinia())
app.use(router)

app.mount('#app')
