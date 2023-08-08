import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../components/Login.vue';
import Setting from '../components/Setting.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting,
      meta: {
        title: 'Setting'
      }
    }
  ]
})

const DEFAULT_TITLE = 'TITLE';

router.afterEach((to) => {
  document.title = to.meta.title ?? DEFAULT_TITLE
})

export default router
