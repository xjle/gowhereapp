import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import "@/assets/css/reset.css";
import "@/assets/css/border.css";
import "@/assets/font/iconfont.css";
import {
  Dialog,
  Form,
  FormItem,
  Input,
  Button,
  Message,
  Pagination,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Pagination)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false;
fastClick.attach(document.body)
Vue.prototype.$http = axios
Vue.prototype.$message = Message;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
