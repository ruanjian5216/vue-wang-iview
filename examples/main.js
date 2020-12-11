import Vue from 'vue'
import App from './App.vue'

// 引入 install 所导出的所有组件，执行安装
import vueWangIview from "../src/index";

Vue.config.productionTip = false
Vue.use(vueWangIview)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
