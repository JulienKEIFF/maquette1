import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueTranslate from './modules/vue-translate-sys/main'
import {textFilter, numberFilter, utilsFilter} from './modules/vue-filter/index'

import translationFile from './assets/translate.json'

Vue.config.productionTip = false;
Vue.use(vueTranslate, translationFile);
Vue.use(textFilter);
Vue.use(numberFilter);
Vue.use(utilsFilter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')