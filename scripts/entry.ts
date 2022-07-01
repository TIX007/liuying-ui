// 入口文件
// 1.引入实现组件批量导出
import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'

const installs = [ButtonPlugin]

// 2.导出组件
export { Button }

export default {
  version: '0.0.1',
  install(app: App): void {
    installs.forEach(p => app.use(p))
  }
}