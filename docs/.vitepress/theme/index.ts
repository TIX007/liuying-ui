// import Theme from 'vitepress/dist/client/theme-default'
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
import DefaultTheme from 'vitepress/theme'

// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import { registerComponents } from './register-components'

import './custom.css'
import '../../../src/index.scss'

export default {
//   ...Theme,
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
    registerComponents(app)
  }
}