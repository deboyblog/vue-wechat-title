### 作用
Vuejs 单页应用在iOS系统下部分APP的webview中 标题不能通过 document.title = xxx 的方式修改
该插件只为解决该问题而生(兼容安卓)

> 已测试APP

 - 微信
 - QQ
 - 支付宝
 - 淘宝

### 效果 (请使用以上列表中任意一个APP扫码打开体验)

> 不同版本使用方法类似 但是效果是一样的 demo是Vuejs1.x写的

![预览](./preview.png)

直接打开: [http://vue-wechat-title.deboy.cn/](http://vue-wechat-title.deboy.cn/)

### 安装

> Vuejs 1.x

```bash
npm install vue-wechat-title@1.0.7 --save
```

> Vuejs 2.x

```bash
npm install vue-wechat-title --save
```

### 用法 

> [Vuejs 1.x demo](https://github.com/deboyblog/vue-wechat-title-demo/tree/use-directive)

> [Vuejs 2.x demo](https://github.com/deboyblog/vue-wechat-title-demo/tree/2.0)

##### ES6
> main.js

```js
Vue.use(require('vue-wechat-title'))
```
> 路由定义(只截取一部分)

```js
// ...
const routes = [
  {
    name: 'Home',
    path: '/home',
    meta: {
      title: '首页'
    },
    component: require('../views/Home.vue')
  },
  {
    name: 'Order',
    path: '/order',
    meta: {
      title: '订单'
    },
    component: require('../views/Order.vue')
  },
  {
    name: 'UCenter',
    path: '/ucenter',
    meta: {
      title: '用户中心'
    },
    component: require('../views/UCenter.vue')
  }
]
// ...
```

> App.vue **建议全局只使用一次该指令 标题可用vuex或者router中定义 不要多处使用!!**

```html
<!-- 任意元素中加 v-wechat-title 指令 建议将标题放在 route 对应meta对象的定义中 -->
<div v-wechat-title="$route.meta.title"></div>
<!--or-->
<router-view v-wechat-title="$route.meta.title"></router-view>
```

> 自定义加载的图片地址 默认是 ./favicon.ico 可以是相对或者绝对的

```html
<div v-wechat-title="$route.meta.title" img-set="/static/logo.png"></div>
```

### 欢迎提交PR