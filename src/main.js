// main.js

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; // Import createWebHashHistory for hash mode
import App from './App.vue';
import store from './store';

const app = createApp(App);

import LoginPage from './components/views/LoginPage/LoginPage.vue';

const routes = [
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/', name: 'home', component: () => import('./components/views/MainApplication/MainApplication.vue'), meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(), // Use createWebHashHistory for hash mode
  routes,
});

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.meta.requiresAuth && !isLoggedIn() && to.query.parameter !== '1') {
    // Redirect to login page if not authenticated
    next('/login'); // Redirect to the login page
  } else {
    // Continue to the requested route
    next();
  }
});

function isLoggedIn() {
  const isAuthenticated = store.getters.isAuthenticated;
  console.log('isAuthenticated:', isAuthenticated);
  return isAuthenticated;
}

app.use(router);
app.use(store);

app.mount('#app'); // Mount the app to the DOM element with id 'app'

window.addEventListener('gesturestart', e => e.preventDefault());
window.addEventListener('gesturechange', e => e.preventDefault());
window.addEventListener('gestureend', e => e.preventDefault());


