<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Customizer from '@/static/Customizer.vue';
import Footer from '@/static/Footer.vue';
import Header from '@/static/Header.vue';
import TopButton from '@/static/TobButton.vue';

// Récupérer la route actuelle
const route = useRoute()

// Déterminer si on doit afficher le footer
const showFooter = computed(() => route.name !== 'i-ia')
</script>

<template>
  <div class="be-wrapper be-fixed-sidebar">
    <Customizer />
    <Header />
    <RouterView />
    <!-- Afficher le footer seulement si showFooter est vrai -->
    <Footer v-if="showFooter" />
    <TopButton />
  </div>
</template>
