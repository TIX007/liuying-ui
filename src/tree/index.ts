// import { App } from 'vue'
// import Tree from './src/tree'
// import { installComponent } from '../install'
// import type { LiuYingUIOptions } from '../_utils/global-config'

// // 具名导出
// export { Tree }

// // 导出插件
// export default {
//   install(app: App, options?: LiuYingUIOptions) {
//     installComponent(app, Tree, options)
//   }
// }

import { App } from "vue";
import Tree from './src/tree'

export { Tree }

export default {
  install(app : App) {
    app.component(Tree.name, Tree)
  }
}