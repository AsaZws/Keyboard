import Vue from 'vue';
import Router from 'vue-router';

const PlateBox = () => import('views/plateBox/PlateBox');
const PlateInput = () => import('views/plateInput/PlateInput');

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
    path: '/plateInput',
    component: PlateInput
  }
];

export default new Router({
  routes,
  mode: 'history'
})