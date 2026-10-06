import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import store from './store'

const app = createApp(App)

const routes = [
  {
    path: '/3tgg2/entwicklung-einer-app-design-thinking/admin',
    name: '3tgg2-design-thinking-admin',
    component: () => import('./components/views/TGG2/DesignThinkingAdmin.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/3tgg2',
    name: '3tgg2',
    component: () => import('./components/views/TGG2/TGG2.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/3tgg2/entwicklung-einer-app-design-thinking',
    name: '3tgg2-design-thinking',
    component: () => import('./components/views/TGG2/DesignThinking.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/kahoot-farbmischsysteme-programme-bkgd',
    name: 'bkgd-live-quiz',
    component: () => import('./components/views/BKGDQuiz/BKGDQuiz.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/1bfd1',
    name: '1bfd1',
    component: () => import('./components/views/BFD1/BFD1.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/1bfd1/layouts-und-wirkung',
    name: '1bfd1-layouts',
    component: () => import('./components/views/BFD1/Layouts.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/3tgg12/visuelle-kommunikation-punktportraits',
    name: '3tgg12-punktportraits',
    component: () => import('./components/views/TGG12/Punktportraits.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/3tgg12/visuelle-kommunikation-linienportraits',
    name: '3tgg12-linienportraits',
    component: () => import('./components/views/TGG12/Linienportraits.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/3tgg12/visuelle-kommunikation-flaechenportraits',
    name: '3tgg12-flaechenportraits',
    component: () => import('./components/views/TGG12/Flaechenportraits.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/3tgg12/visuelle-kommunikation-sehvorgang',
    name: '3tgg12-sehvorgang',
    component: () => import('./components/views/TGG12/Sehvorgang.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/3tgg12/visuelle-kommunikation-andere-geschichte-farbensehen',
    name: '3tgg12-andere-geschichte-farbensehen',
    component: () => import('./components/views/TGG12/AndereGeschichteFarbensehen.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/3tgg12/visuelle-kommunikation-zusatzaufgabe',
    name: '3tgg12-zusatzaufgabe',
    component: () => import('./components/views/TGG12/Zusatzaufgabe.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/3tgg12',
    name: '3tgg12',
    component: () => import('./components/views/TGG12/TGG12.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/3tgg12/visuelle-kommunikation-punkt-und-linie',
    name: '3tgg12-punkt-und-linie',
    component: () => import('./components/views/TGG12/PunktUndLinie.vue'),
    meta: { requiresAuth: false }
  },
  { path: '/freecreatures', name: 'free-creatures', component: () => import('./components/views/Rally/FreeCreatures.vue'), meta: { requiresAuth: false } },
  { path: '/farbmischsysteme', name: 'farbmischsysteme', component: () => import('./components/views/Farbmischsysteme/Farbmischsysteme.vue'), meta: { requiresAuth: false } },
  {
    path: '/rally',
    name: 'rally',
    component: () => import('./components/views/Rally/Rally.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/programme-medientechnik-erstes-jahr',
    name: 'programme-medientechnik',
    component: () => import('./components/views/MedientechnikProgramme/MedientechnikProgramme.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/pruefung-schulrecht-schulorganisation',
    name: 'pruefung-schulrecht',
    component: () => import('./components/views/PruefungSchulrecht/PruefungSchulrecht.vue'),
    meta: { requiresAuth: false }
  },
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
    path: '/gestaltgesetze',
    name: 'gestaltgesetze',
    component: () => import('./components/views/Gestaltgesetze/Gestaltgesetze.vue'),
    meta: { requiresAuth: false }
  },

  {
    path: '/bkgdpage',
    name: 'bkgdpage',
    component: () => import('./components/views/BKGDPage/BKGDPage.vue'),
    meta: { requiresAuth: false }
  },

  {
    path: '/bkgdpage/portfolio/:name',
    name: 'bkgdportfolio',
    component: () => import('./components/views/BKGDPage/PortfolioPage.vue'),
    meta: { requiresAuth: false }
  },

  {
    path: '/bkgdpage/portfolio/:name/illustration-wueste',
    name: 'bkgdprojectwueste',
    component: () => import('./components/views/BKGDPage/WuesteProjectPage.vue'),
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
  routes,
  scrollBehavior() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    return { top: 0, left: 0, behavior: 'instant' }
  }
})

router.beforeEach((to, from, next) => {
  if (
    to.meta.requiresAuth &&
    !isLoggedIn() &&
    to.query.parameter !== '1511'
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
