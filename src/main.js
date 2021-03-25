import Vue from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag"

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: "2392996933" }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
