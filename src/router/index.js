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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'intellegis',
          children: [
            {
              path: 'i-ia',
              name: 'i-ia',
              component: IA
            },
            {
              path: 'i-mail',
              name: 'i-mail',
              component: Mail
            },
            {
              path: 'i-faq',
              name: 'i-faq',
              component: FAQ
            },
          ]
        },
        {
          path: 'events',
          children: [
            {
              path: '',
              name: 'events',
              component: Events
            },
            {
              path: 'serviceType',
              name: 'show-event',
              component: ShowEvent
            },
          ]
        },
        {
          path: 'docs',
          name: 'docs',
          component: Docs
        },
        {
              path: 'about',
              name: 'about',
              component: About
            },
      ]
    },
      ]
});

export default router;
