import LyButton from '../../../src/button/src/button'
import LiuYingUi from '../../../build'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
export function registerComponents(app) {
  app.component('LyButton', LyButton)
    app.component('LiuYingUi', LiuYingUi)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}