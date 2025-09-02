import DocTemoin from '@/static/DocTemoin.vue';
import DocVictime from '@/static/DocVictime.vue';
import HomeView from '@/views/HomeView.vue';
import About from '@/views/pages/About.vue';
import Docs from '@/views/pages/Docs.vue';
import Events from '@/views/pages/Events.vue';
import FAQ from '@/views/pages/FAQ.vue';
import Home from '@/views/pages/Home.vue';
import IA from '@/views/pages/IA.vue';
import Mail from '@/views/pages/Mail.vue';
import ShowEvent from '@/views/pages/ShowEvent.vue';
import { createRouter, createWebHistory } from 'vue-router';

// clé unique pour chaque onglet (sessionStorage est isolé par onglet)
const SESSION_KEY = 'scrollPositions'

// Fonction utilitaire pour récupérer les positions depuis sessionStorage
function getScrollPositions() {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY)) || {}
  } catch {
    return {}
  }
}

// Fonction utilitaire pour sauvegarder les positions
function saveScrollPositions(positions) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(positions))
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: { requiresAuth: true },
      children: [
        { path: '', name: 'home', component: Home },
        {
          path: 'intellegis',
          children: [
            { path: 'i-ia', name: 'i-ia', component: IA },
            { path: 'i-mail', name: 'i-mail', component: Mail },
            { path: 'i-faq', name: 'i-faq', component: FAQ },
          ]
        },
        {
          path: 'events',
          children: [
            { path: '', name: 'events', component: Events },
            { path: 'serviceType', name: 'show-event', component: ShowEvent },
          ]
        },
        {
        path: 'docs',
        component: Docs,
          children: [
            { path: '', name: 'docs', component: DocVictime },
            { path: 'victime', name: 'docs-victime', component: DocVictime },
            { path: 'temoin', name: 'docs-temoin', component: DocTemoin },
          ]
        },
        { path: 'about', name: 'about', component: About },
      ]
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    const scrollPositions = getScrollPositions()

    if (scrollPositions[to.fullPath]) {
      return scrollPositions[to.fullPath]
    }

    return { top: 0 }
  }
})

// avant de quitter une route → enregistrer la position de scroll
router.beforeEach((to, from, next) => {
  const scrollPositions = getScrollPositions()
  scrollPositions[from.fullPath] = { left: window.scrollX, top: window.scrollY }
  saveScrollPositions(scrollPositions)
  next()
})

// 🔹 Quand on recharge la page → reset (tout repartir en haut)
window.addEventListener('beforeunload', () => {
  sessionStorage.removeItem(SESSION_KEY)
})

export default router
