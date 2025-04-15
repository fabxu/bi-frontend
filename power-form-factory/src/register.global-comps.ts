import type { App } from 'vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import BaseLayout from './layout/default/index.vue'

export default (app: App<Element>) => {
  // Refer https://element-plus.org/en-US/component/icon#register-all-icons
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

  app.component('base-layout', BaseLayout)
}
