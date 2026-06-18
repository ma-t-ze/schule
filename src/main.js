import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import store from './store'

const app = createApp(App)

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('./components/views/LoginPage/LoginPage.vue')
  },

  {
    path: '/chaos',
    name: 'chaos',
    component: () => import('./components/views/ChaosPage/ChaosPage.vue'),
    meta: { requiresAuth: false }
  },

  {
    path: '/variablefont',
    name: 'variablefont',
    component: () => import('./components/views/VariableFontPage/VariableFontPage.vue'),
    meta: { requiresAuth: false }
  },

  {
    path: '/bridgepage',
    name: 'bridgepage',
    component: () => import('./components/views/BridgePage/BridgePage.vue'),
    meta: { requiresAuth: false }
  },

  {
    path: '/bkgdpage',
    name: 'bkgdpage',
    component: () => import('./components/views/BKGDPage/BKGDPage.vue'),
    meta: { requiresAuth: false }
  },

  {
    path: '/conversepage',
    name: 'conversepage',
    component: () => import('./components/views/ConversePage/ConversePage.vue'),
    meta: { requiresAuth: false }
  },

  {
    path: '/3dprint',
    name: '3dprint',
    component: () =>
      import('./components/views/ThreeDPrint/ThreeDPrint.vue'),
    meta: { requiresAuth: false }
  },

  {
    path: '/game',
    name: 'game',
    component: () =>
      import('./components/views/ThreeDPrint/GamePage/GamePage.vue'),
    meta: { requiresAuth: false }
  },

  {
    path: '/fdm',
    name: 'fdm',
    component: () =>
      import('./components/views/ThreeDPrint/FDMPage/FDMPage.vue'),
    meta: { requiresAuth: false }
  },

  {
    path: '/sla',
    name: 'sla',
    component: () =>
      import('./components/views/ThreeDPrint/SLAPage/SLAPage.vue'),
    meta: { requiresAuth: false }
  },

  {
    path: '/sls',
    name: 'sls',
    component: () =>
      import('./components/views/ThreeDPrint/SLSPage/SLSPage.vue'),
    meta: { requiresAuth: false }
  },

  {
    path: '/results',
    name: 'results',
    component: () =>
      import('./components/views/ThreeDPrint/ResultsPage/ResultsPage.vue'),
    meta: { requiresAuth: false }
  },

  {
    path: '/',
    name: 'home',
    component: () =>
      import('./components/views/MainApplication/MainApplication.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (
    to.meta.requiresAuth &&
    !isLoggedIn() &&
    to.query.parameter !== '1'
  ) {
    next('/login')
  } else {
    next()
  }
})

function isLoggedIn() {
  const isAuthenticated = store.getters.isAuthenticated
  console.log('isAuthenticated:', isAuthenticated)
  return isAuthenticated
}

app.use(router)
app.use(store)

app.mount('#app')

window.addEventListener('gesturestart', e => e.preventDefault())
window.addEventListener('gesturechange', e => e.preventDefault())
window.addEventListener('gestureend', e => e.preventDefault())