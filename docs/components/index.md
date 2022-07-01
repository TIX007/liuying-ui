# 安装
## npm 安装
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

``` bash
npm i qiu-ui -S
```

## 引入 Qiu
你可以引入整个 Qiu，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Qiu。

完整引入
在 main.js 中写入以下内容：

``` js
import Vue from 'vue';
import QiuUI from 'Qiu-ui';
import 'Qiu-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(QiuUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 Qiu 的引入。需要注意的是，样式文件需要单独引入。