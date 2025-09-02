<script setup>
import DocVictime from '@/static/DocVictime.vue';
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <section class="container pb-5 mb-2 mb-sm-3 mb-md-4 mb-xl-5">
    <div class="row g-0">
      <!-- Navigation fixe -->
      <div class="col-md-4 col-lg-3 pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0">
        <h2 class="h5 border-bottom pb-3 pb-sm-4 mb-0">Documentations</h2>
        <div class="list-group list-group-borderless pt-4 pe-md-4 sticky-nav" role="tablist">
          <router-link
            :to="{ name: 'docs-victime' }"
            class="list-group-item list-group-item-action d-flex align-items-center fs-base"
            :class="{ active: $route.name === 'docs-victime' || $route.name === 'docs' }"
          >
            Je suis victime
          </router-link>
          
          <router-link
            :to="{ name: 'docs-temoin' }"
            class="list-group-item list-group-item-action d-flex align-items-center fs-base"
            :class="{ active: $route.name === 'docs-temoin' }"
          >
            Je suis témoin
          </router-link>
        </div>
      </div>

      <!-- Article content -->
      <div class="col-md-8 col-lg-9">
          <RouterView />
        </div>
    </div>
    <!-- Contact CTA -->
    <div class="pt-4 mt-2 mt-sm-3">
      <h3 class="fs-base pb-sm-1">Pas très bien compris ? Autre préoccupation ?</h3>
      <a class="btn btn-lg btn-primary" href="contact-v1.html">Nous écrire</a>
    </div>
  </section>
</template>

<style scoped>
.sticky-nav {
  position: sticky;
  top: 3.3rem; /* distance par rapport au haut de la fenêtre */
}
</style>
