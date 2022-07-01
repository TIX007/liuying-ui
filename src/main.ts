import { createApp } from 'vue'
import App from './App.vue'
// 引入主样式文件
import './index.scss'
// import Button from './button'
import QiuUI from '../build'



createApp(App)
.use(QiuUI)
.mount('#app')
