import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlusCircle,
  faCalendarAlt,
  faStream,
  faHome,
  faChartLine,
  faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faPlusCircle, faHome, faCalendarAlt, faStream, faChartLine, faMoneyBillWave);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
