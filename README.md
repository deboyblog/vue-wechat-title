# vue-wechat-title
为Vuejs SPA设计的动态设置微信网页中标题的指令

### 用法

##### ES6
> main.js
```js
Vue.use(require('vue-wechat-title'))
```
> App.vue **建议全局只使用一次该指令**
```html
<router-view v-wechat-title="$route.title || 'your-title'"></router-view>
<!-- 或者任意元素中加 wechat-title 指令 建议将标题放在 route 的定义中 -->
<div v-wechat-title="$route.title || 'your-title'"></div>
```

> 或者直接包含(不是单页应用 也用不到这个...)

### 欢迎提交PR