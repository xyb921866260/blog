import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import "bootstrap";
import router from './router'



Vue.use(mavonEditor);
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
