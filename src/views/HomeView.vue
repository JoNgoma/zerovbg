<script setup>
import Customizer from '@/static/Customizer.vue';
import Footer from '@/static/Footer.vue';
import Header from '@/static/Header.vue';
import TopButton from '@/static/TobButton.vue';


// const userData = ref({
//   firstName: '',
//   name: '',
//   email: ''
// })

</script>

<template>
<div class="be-wrapper be-fixed-sidebar">
      <Customizer />
      <Header />
      <RouterView />
      <Footer />
      <TopButton />
    </div>
</template>

