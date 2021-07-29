import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index'

import toast from '@/components/common/toast/index'
import FastClick from 'fastclick';
import VueLazyLoad from 'vue-lazyload';

Vue.config.productionTip = false

//添加时间总线对象
Vue.prototype.$bus = new Vue()

//注册toast插件
Vue.use(toast)

// 解决移动端点击300ms延迟
FastClick.attach(document.body)

// 使用图片懒加载的插件
Vue.use(VueLazyLoad)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
