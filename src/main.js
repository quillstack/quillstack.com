import Vue from 'vue';
import router from '@/router';
import '@/assets/css/style.css';
import App from '@/App';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CodePhp from '@/components/CodePhp';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
import VueScrollTo from 'vue-scrollto';

Vue.config.productionTip = false;

Vue.component('my-footer', Footer);
Vue.component('my-header', Header);
Vue.component('code-php', CodePhp);
Vue.use(VueLodash, { lodash: lodash });
Vue.use(VueScrollTo);

new Vue({
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
}).$mount('#app');
