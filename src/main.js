// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Elementui from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill';
import store from 'vuex/store';
import vueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

Vue.use(Elementui);
Vue.use(vueQuillEditor);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
