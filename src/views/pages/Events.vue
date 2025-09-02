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
                <img src="/assets/img/blog/v1/02.jpg" class="hover-effect-target" alt="Image">
              </a>
              <div class="nav pb-1 mb-2">
                <a class="nav-link text-body-secondary fs-xs text-uppercase p-0" href="#!">Investment advice</a>
              </div>
              <h3 class="h5 mb-2">
                <a class="hover-effect-underline" href="#!">Types of luxury housing</a>
              </h3>
              <p class="fs-sm">What luxury housing is clear to every person. Housing characterized by increased comfort, interior, quality and ma...</p>
              <div class="nav fs-sm gap-3">
                <a class="nav-link fw-semibold p-0" href="#!">by Kristin Watson</a>
                <span class="text-body-secondary">July 09, 2024</span>
              </div>
            </article>

            <!-- Article -->
            <article class="swiper-slide">
              <a class="ratio d-flex hover-effect-scale rounded overflow-hidden mb-3 mb-sm-4" href="#!" style="--fn-aspect-ratio: calc(300 / 416 * 100%)">
                <img src="/assets/img/blog/v1/01.jpg" class="hover-effect-target" alt="Image">
              </a>
              <div class="nav pb-1 mb-2">
                <a class="nav-link text-body-secondary fs-xs text-uppercase p-0" href="#!">Renting advice</a>
              </div>
              <h3 class="h5 mb-2">
                <a class="hover-effect-underline" href="#!">What to know when renting an apartment</a>
              </h3>
              <p class="fs-sm">It is quite difficult to find a good apartment for long-term rent in large cities. In addition, potential tenants can face prob...</p>
              <div class="nav fs-sm gap-3">
                <a class="nav-link fw-semibold p-0" href="#!">by Cody Fisher</a>
                <span class="text-body-secondary">June 26, 2024</span>
              </div>
            </article>

            <!-- Article -->
            <article class="swiper-slide">
              <a class="ratio d-flex hover-effect-scale rounded overflow-hidden mb-3 mb-sm-4" href="#!" style="--fn-aspect-ratio: calc(300 / 416 * 100%)">
                <img src="/assets/img/blog/v1/08.jpg" class="hover-effect-target" alt="Image">
              </a>
              <div class="nav pb-1 mb-2">
                <a class="nav-link text-body-secondary fs-xs text-uppercase p-0" href="#!">Interior design</a>
              </div>
              <h3 class="h5 mb-2">
                <a class="hover-effect-underline" href="#!">7 tips for achieving maximum coziness</a>
              </h3>
              <p class="fs-sm">Creating a cozy atmosphere in your home is a delightful way to enhance comfort and relaxation. Here are seven tips to...</p>
              <div class="nav fs-sm gap-3">
                <a class="nav-link fw-semibold p-0" href="#!">by Bessie Cooper</a>
                <span class="text-body-secondary">March 10, 2024</span>
              </div>
            </article>
          </div>

          <!-- Pagination (Bullets) -->
          <div class="swiper-pagination position-static mt-4"></div>
        </div>
      </section>
</template>