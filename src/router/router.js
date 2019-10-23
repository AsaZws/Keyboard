import Vue from 'vue';
import Router from 'vue-router';

const PlateBox = () => import('views/plateBox/PlateBox');
const FastPayment = () => import('views/fastPayment/FastPayment');

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/plateBox'
  },
  {
    path: '/plateBox',
    component: PlateBox
  },
  {
    path: '/fastPatment',
    component: FastPayment
  }
];

export default new Router({
  routes,
  mode: 'history'
})