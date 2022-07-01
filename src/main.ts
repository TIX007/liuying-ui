import { createApp } from 'vue'
import App from './App.vue'
// 引入主样式文件
import './index.scss'
// import Button from './button'
import LiuYingUi from '../build'



createApp(App)
.use(LiuYingUi)
.mount('#app')
