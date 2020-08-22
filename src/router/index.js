import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('@/views/home/index')
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
