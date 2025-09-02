<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import Swiper from 'swiper';
import { Pagination, EffectCreative, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import 'swiper/css/thumbs';

let thumbsSwiper = null;

onMounted(() => {
  // Initialiser le swiper des miniatures d'abord
  thumbsSwiper = new Swiper('#thumbs', {
    modules: [Thumbs],
    spaceBetween: 24,
    slidesPerView: 3,
    watchSlidesProgress: true,
    breakpoints: {
      500: {
        spaceBetween: 32
      }
    }
  });

  // Initialiser le swiper de la section Vidéo
  new Swiper('.video-swiper', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      500: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      }
    }
  });
});

const router = useRouter();
</script>

<template>
    <!-- Blog posts -->
      <section class="container pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
        <div class="d-flex align-items-center justify-content-between gap-3 pb-4 mb-2 mb-lg-3">
          <h2 class="h1 mb-0">Evénements</h2>
        </div>

        <!-- Blog articles that turn into carousel on screens < 900px wide -->
        <div class="swiper video-swiper pb-5">
          <div class="swiper-wrapper">

            <!-- Article -->
            <article class="swiper-slide">
              <a class="ratio d-flex hover-effect-scale rounded overflow-hidden mb-3 mb-sm-4" href="#!" style="--fn-aspect-ratio: calc(300 / 416 * 100%)">
                <img src="/assets/img/home/doctors/steps/sensib.jpeg" class="hover-effect-target" alt="Image">
              </a>
              <div class="nav pb-1 mb-2">
                <a class="nav-link text-body-secondary fs-xs text-uppercase p-0" href="#!">Atelier de sensibilisation</a>
              </div>
              <h3 class="h5 mb-2">
                <a class="hover-effect-underline" href="#!">Former les jeunes leaders contre les VBG</a>
              </h3>
              <p class="fs-sm">Un atelier interactif a rassemblé étudiants, associations et autorités locales pour discuter des solutions concrètes afin d’éliminer les violences basées sur le genre et promouvoir l’égalité.</p>
              <div class="nav fs-sm gap-3">
                <a class="nav-link fw-semibold p-0" href="#!">par PNUD</a>
                <span class="text-body-secondary">10 octobre 2024</span>
              </div>
            </article>

            <!-- Article -->
            <article class="swiper-slide">
              <a class="ratio d-flex hover-effect-scale rounded overflow-hidden mb-3 mb-sm-4" href="#!" style="--fn-aspect-ratio: calc(300 / 416 * 100%)">
                <img src="/assets/img/home/doctors/steps/sensib2.jpeg" class="hover-effect-target" alt="Image">
              </a>
              <div class="nav pb-1 mb-2">
                <a class="nav-link text-body-secondary fs-xs text-uppercase p-0" href="#!">Atelier de sensibilisation</a>
              </div>
              <h3 class="h5 mb-2">
                <a class="hover-effect-underline" href="#!">Former les jeunes leaders contre les VBG</a>
              </h3>
              <p class="fs-sm">Un atelier interactif a rassemblé étudiants, associations et autorités locales pour discuter des solutions concrètes afin d’éliminer les violences basées sur le genre et promouvoir l’égalité.</p>
              <div class="nav fs-sm gap-3">
                <a class="nav-link fw-semibold p-0" href="#!">par PNUD</a>
                <span class="text-body-secondary">10 Mars 2024</span>
              </div>
            </article>

            <!-- Article -->
            <article class="swiper-slide">
              <a class="ratio d-flex hover-effect-scale rounded overflow-hidden mb-3 mb-sm-4" href="#!" style="--fn-aspect-ratio: calc(300 / 416 * 100%)">
                <img src="/assets/img/home/doctors/steps/conf.jpeg" class="hover-effect-target" alt="Image">
              </a>
              <div class="nav pb-1 mb-2">
                <a class="nav-link text-body-secondary fs-xs text-uppercase p-0" href="#!">Conférence</a>
              </div>
              <h3 class="h5 mb-2">
                <a class="hover-effect-underline" href="#!">Justice et droits humains : agir contre les VBG</a>
              </h3>
              <p class="fs-sm">Des experts en droit, en santé et en développement ont échangé sur les meilleures pratiques pour protéger les victimes, assurer l’accès à la justice et renforcer les mécanismes de prévention.</p>
              <div class="nav fs-sm gap-3">
                <a class="nav-link fw-semibold p-0" href="#!">par ONU Femmes</a>
                <span class="text-body-secondary">5 décembre 2025</span>
              </div>
            </article>
          </div>

          <!-- Pagination (Bullets) -->
          <div class="swiper-pagination position-static mt-4"></div>
        </div>
      </section>
</template>