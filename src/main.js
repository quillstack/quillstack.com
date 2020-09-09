import Vue from 'vue';
import router from '@/router';
import '@/assets/css/style.css';
import App from '@/App';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CodePhp from "@/components/CodePhp";

Vue.config.productionTip = false;

Vue.component('my-footer', Footer);
Vue.component('my-header', Header);
Vue.component('code-php', CodePhp);

new Vue({
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
}).$mount('#app');
