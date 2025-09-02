<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import pnud from "/assets/img/pnud.jpg"


import Swiper from 'swiper';
import { Pagination, EffectCreative, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import 'swiper/css/thumbs';

const router = useRouter();
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

  // Initialiser le swiper principal avec les miniatures
  new Swiper('.swiper:not(#thumbs):not(.video-swiper)', {
    modules: [EffectCreative, Autoplay, Thumbs],
    effect: 'creative',
    speed: 450,
    allowTouchMove: false,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1]
      },
      next: {
        translate: ["100%", 0, 0]
      }
    },
    thumbs: {
      swiper: thumbsSwiper
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

function showResource() {
  const userType = document.getElementById('user-type').value;
  const violenceType = document.getElementById('violence-type').value;
  const result = document.getElementById('resource-result');

  if (!userType || !violenceType) {
    result.textContent = "Veuillez sélectionner toutes les options.";
    return;
  }

  // Exemple de mapping simple
  const resources = {
    victime: {
      physique: "Contactez le centre d'assistance physique au 123-456-789",
      sexuelle: "Contactez la ligne d'aide sexuelle au 987-654-321",
      psychologique: "Consultez un psychologue spécialisé",
    },
    temoin: {
      physique: "Appelez les autorités et protégez la victime",
      sexuelle: "Signalez immédiatement aux services spécialisés",
      psychologique: "Offrez soutien et guidez vers un expert",
    }
  };

  result.textContent = resources[userType][violenceType];
}
</script>

<template>
    <!-- Page content -->
    <main class="content-wrapper">

      <!-- Hero with search form and slider -->
      <section class="py-5" style="background-color: #30536b">
        <div class="container py-sm-2 py-md-3 py-lg-4 py-xl-5">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-7 mb-5 mb-md-0">
              <h1 class="display-3 text-white text-center text-md-start pb-sm-2 pb-md-3 pb-lg-0 pb-xxl-3 mb-4 mb-lg-5">Avec Zerovbg,<br />Exprime toi aujourd'hui</h1>

              <!-- Description Zerovbg -->
               <div class="nav gap-2 fs-sm pt-3 mt-md-1 mt-lg-2 mt-xl-3" data-bs-theme="dark">
                <h5 class="">Vous vivez dans un milieu où l'insecurité règne, surtout les viols basés sur le genre et les violences sexuelles faites aux femmes ?
                  <br/>Voici une solution à portée des mains.</h5>
               </div>
              <!-- Ce que tu peux faire -->
              <div class="nav gap-2 fs-sm pt-3 mt-md-1 mt-lg-2 mt-xl-3" data-bs-theme="dark">
                <span class="text-body me-2">Agir au plus vite :</span>
                <a class="nav-link hover-effect-underline p-0 me-2" href="#!">Assisttance virtuelle</a>
                <a class="nav-link hover-effect-underline p-0 me-2" href="#!">Nous contacter par mail</a>
              </div>
            </div>


            <!-- Slider -->
            <div class="col-10 col-sm-7 col-md-5 col-xl-4 offset-xl-1">
              <div class="ps-md-4 ps-xl-0">
                <div class="position-relative">
                  <div class="swiper" style="-webkit-clip-path: url(#mask); clip-path: url(#mask)">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="ratio" style="--fn-aspect-ratio: calc(344 / 416 * 100%)">
                          <img src="/assets/img/home/doctors/hero-slider/01.jpeg" alt="Image">
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="ratio" style="--fn-aspect-ratio: calc(344 / 416 * 100%)">
                          <img src="/assets/img/home/doctors/hero-slider/02.jpeg" alt="Image">
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="ratio" style="--fn-aspect-ratio: calc(344 / 416 * 100%)">
                          <img src="/assets/img/home/doctors/hero-slider/03.jpeg" alt="Image">
                        </div>
                      </div>
                    </div>
                  </div>
                  <svg class="position-absolute" xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 416 344" fill="none">
                    <defs>
                      <clipPath id="mask" clipPathUnits="objectBoundingBox" transform="scale(0.0024, 0.0029)">
                        <path d="M298.045 0.00804178C263.343 -0.177193 230.353 15.0453 208 41.558C185.786 14.8641 152.705 -0.40169 117.954 0.00804178C52.8095 0.00804178 0 52.7547 0 117.821C0 229.325 194.835 338.197 202.734 342.405C205.921 344.532 210.078 344.532 213.266 342.405C221.165 338.197 416 230.902 416 117.821C416 52.7547 363.19 0.00804178 298.045 0.00804178Z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="mx-auto" style="max-width: 382px">
                  <div class="swiper swiper-load swiper-thumbs py-4 px-4 mt-2" id="thumbs" 
                       style="--swiper-thumbnail-border-color: rgba(255,255,255, .4); --swiper-thumbnail-active-border-color: var(--fn-info)">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide swiper-thumb rounded-circle p-2">
                        <div class="ratio ratio-1x1 rounded-circle overflow-hidden">
                          <img src="/assets/img/home/doctors/hero-slider/th01.jpeg" class="swiper-thumb-img" alt="Thumbnail">
                        </div>
                        <div class="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center opacity-0" style="width: 150%; height: 150%">
                          <svg class="animate-spin" width="144" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="animation-duration: 22s">
                            <path id="circlePath" fill="none" d="M 10, 50a 40,40 0 1,1 80,0a 40,40 0 1,1 -80,0"></path>
                            <text id="text" font-size="9.4" fill="rgba(255,255,255, .65)" style="letter-spacing: -.05">
                              <textPath id="textPath" href="#circlePath">Exprimer librement les violences basées sur le genre</textPath>
                            </text>
                          </svg>
                        </div>
                      </div>
                      <div class="swiper-slide swiper-thumb rounded-circle p-2">
                        <div class="ratio ratio-1x1 rounded-circle overflow-hidden">
                          <img src="/assets/img/home/doctors/hero-slider/th02.jpeg" class="swiper-thumb-img" alt="Thumbnail">
                        </div>
                        <div class="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center opacity-0" style="width: 150%; height: 150%">
                          <svg class="animate-spin" width="144" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="animation-duration: 22s">
                            <path id="circlePath" fill="none" d="M 10, 50a 40,40 0 1,1 80,0a 40,40 0 1,1 -80,0"></path>
                            <text id="text" font-size="9.4" fill="rgba(255,255,255, .65)" style="letter-spacing: -.05">
                              <textPath id="textPath" href="#circlePath">Exprimer librement les violences basées sur le genre</textPath>
                            </text>
                          </svg>
                        </div>
                      </div>
                      <div class="swiper-slide swiper-thumb rounded-circle p-2">
                        <div class="ratio ratio-1x1 rounded-circle overflow-hidden">
                          <img src="/assets/img/home/doctors/hero-slider/th03.jpeg" class="swiper-thumb-img" alt="Thumbnail">
                        </div>
                        <div class="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center opacity-0" style="width: 150%; height: 150%">
                          <svg class="animate-spin" width="144" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="animation-duration: 22s">
                            <path id="circlePath" fill="none" d="M 10, 50a 40,40 0 1,1 80,0a 40,40 0 1,1 -80,0"></path>
                            <text id="text" font-size="9.4" fill="rgba(255,255,255, .65)" style="letter-spacing: -.05">
                              <textPath id="textPath" href="#circlePath">Exprimer librement les violences basées sur le genre</textPath>
                            </text>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- Popular searches -->
      <section class="container py-5 my-xxl-3">
        <div class="row py-2 py-sm-3 py-md-4 py-lg-5">
          <div class="col-lg-4 d-flex flex-column">
            <div class="row pb-sm-1 pb-md-2 pb-lg-0 mb-4">
                <h2 class="h1 mb-0">Violences Basées sur le Genre (VBG)</h2>
            </div>
            <div class="position-relative rounded overflow-hidden mt-auto d-none d-lg-block">
              <div class="ratio bg-body-tertiary z-1" style="--fn-aspect-ratio: calc(252 / 416 * 100%)">
                <img src="/assets/img/home/doctors/popular-searches-light.jpeg" class="d-none-dark" alt="Image">
                <img src="/assets/img/home/doctors/popular-searches-dark.jpeg" class="d-none d-block-dark" alt="Image">
              </div>
              <span class="position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary d-none d-block-dark"></span>
            </div>
          </div>
          <div class="col-lg-8 col-xl-7 offset-xl-1">
            <div class="ps-lg-4 ps-xl-0">
              <div class="row align-items-center pb-2 pb-xxl-0 mb-4 mb-xxl-5">
                <div class="col-md-4 mb-3 mb-md-0">
                  <div class="d-flex flex-md-column justify-content-between">
                    <h3 class="mb-0 mb-md-2 mb-xl-3">Violence physique</h3>
                    <!-- <div class="nav">
                      <a class="nav-link position-relative text-nowrap px-0" href="#!">
                        <span class="hover-effect-underline stretched-link me-1">View all</span>
                        <i class="fi-chevron-right fs-lg"></i>
                      </a>
                    </div> -->
                  </div>
                  <hr class="mt-2 mt-md-3 mb-0">
                </div>
                <div class="col-md-7 offset-md-1">
                  <div class="row row-cols-2">
                    <div class="col">
                      <div class="nav flex-column gap-2">
                        <a class="nav-link fs-base fw-normal text-body hover-effect-underline p-0" href="#!">Coups</a>
                        <a class="nav-link fs-base fw-normal text-body hover-effect-underline p-0" href="#!">Blessures</a>
                        <a class="nav-link fs-base fw-normal text-body hover-effect-underline p-0" href="#!">Privation de liberté</a>
                      </div>
                    </div>
                    <div class="col">
                      <div class="nav flex-column gap-2">
                        <a class="nav-link fs-base fw-normal text-body hover-effect-underline p-0" href="#!">Brutalités domestiques</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row align-items-center pb-2 pb-xxl-0 mb-4 mb-xxl-5">
                <div class="col-md-4 mb-3 mb-md-0">
                  <div class="d-flex flex-md-column justify-content-between">
                    <h3 class="mb-0 mb-md-2 mb-xl-3">Violence sexuelle</h3>
                  </div>
                  <hr class="mt-2 mt-md-3 mb-0">
                </div>
                <div class="col-md-7 offset-md-1">
                  <div class="row row-cols-2">
                    <div class="col">
                      <div class="nav flex-column gap-2">
                        <a class="nav-link fs-base fw-normal text-body hover-effect-underline p-0" href="#!">Agressions</a>
                        <a class="nav-link fs-base fw-normal text-body hover-effect-underline p-0" href="#!">Viols</a>
                        <a class="nav-link fs-base fw-normal text-body hover-effect-underline p-0" href="#!">Mariages forcés</a>
                      </div>
                    </div>
                    <div class="col">
                      <div class="nav flex-column gap-2">
                        <a class="nav-link fs-base fw-normal text-body hover-effect-underline p-0" href="#!">Exploitation sexuelle en échange d’avantages</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-md-4 mb-3 mb-md-0">
                  <div class="d-flex flex-md-column justify-content-between">
                    <h3 class="mb-0 mb-md-2 mb-xl-3">Violence psychologique</h3>
                  </div>
                  <hr class="mt-2 mt-md-3 mb-0">
                </div>
                <div class="col-md-7 offset-md-1">
                  <div class="row row-cols-2">
                    <div class="col">
                      <div class="nav flex-column gap-2">
                        <a class="nav-link fs-base fw-normal text-body hover-effect-underline p-0" href="#!">Insultes</a>
                        <a class="nav-link fs-base fw-normal text-body hover-effect-underline p-0" href="#!">Menaces</a>
                        <a class="nav-link fs-base fw-normal text-body hover-effect-underline p-0" href="#!">Humiliation</a>
                      </div>
                    </div>
                    <div class="col">
                      <div class="nav flex-column gap-2">
                        <a class="nav-link fs-base fw-normal text-body hover-effect-underline p-0" href="#!">Intimidation</a>
                        <a class="nav-link fs-base fw-normal text-body hover-effect-underline p-0" href="#!">Contrôle et isolement de la victime</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- Offers -->
      <section class="bg-info overflow-hidden">
        <div class="container">
          <div class="row align-items-end justify-content-center justify-content-md-end">
            <div class="col-lg-6 py-2 py-sm-3 py-md-4 py-lg-5 my-xxl-3">
              <h2 class="h1 text-white pt-5 pb-2 pb-md-3">Orientations</h2>
              <div class="row row-cols-1 row-cols-md-2 row-cols-lg-1 g-3 pb-3 mb-2 mb-md-3" data-bs-theme="light">

                <!-- Card: Victime -->
                <div class="col">
                  <div class="card h-100 bg-white bg-opacity-10 border-0 p-xl-2">
                    <div class="card-body d-flex">
                        <div class="d-flex flex-column pe-4">
                          <h3 class="h4 mb-2">
                            <a class="hover-effect-underline stretched-link text-white" href="#!">Que faire si je suis victime ?</a>
                          </h3>
                          <ol class="fs-sm text-white opacity-75">
                            <li>Chercher un endroit sûr.</li>
                            <li>Contacter les services d’assistance (numéros d’urgence).</li>
                            <li>Consulter un médecin ou un centre spécialisé.</li>
                            <li>Signaler aux autorités compétentes si possible.</li>
                          </ol>
                        </div>
                    </div>
                  </div>
                </div>

                <!-- Card: Témoin -->
                <div class="col">
                  <div class="card h-100 bg-white bg-opacity-10 border-0 p-xl-2">
                    <div class="card-body d-flex">
                        <div class="d-flex flex-column pe-4">
                          <h3 class="h4 mb-2">
                            <a class="hover-effect-underline stretched-link text-white" href="#!">Que faire si je suis témoin ?</a>
                          </h3>
                          <ol class="fs-sm text-white opacity-75">
                            <li>Évaluer la situation et votre sécurité.</li>
                            <li>Soutenir discrètement la victime.</li>
                            <li>Contacter les services d’assistance ou alerter les autorités.</li>
                          </ol>
                        </div>
                    </div>
                  </div>
                </div>

                <!-- Card: Questionnaire interactif -->
                <div class="col">
                  <div class="card h-100 bg-white bg-opacity-10 border-0 p-xl-2">
                    <div class="card-body">
                      <h3 class="h4 text-white mb-3">Besoin d'orientation rapide ?</h3>
                      <p class="fs-sm text-white opacity-75 mb-2">Répondez à 2 questions pour obtenir la ressource adaptée :</p>
                      <form id="orientation-form">
                        <div class="mb-2">
                          <label class="form-label text-white opacity-75">Êtes-vous victime ou témoin ?</label>
                          <select class="form-select" id="user-type">
                            <option value="">Sélectionner</option>
                            <option value="victime">Victime</option>
                            <option value="temoin">Témoin</option>
                          </select>
                        </div>
                        <div class="mb-2">
                          <label class="form-label text-white opacity-75">Type de violence concerné</label>
                          <select class="form-select" id="violence-type">
                            <option value="">Sélectionner</option>
                            <option value="physique">Physique</option>
                            <option value="sexuelle">Sexuelle</option>
                            <option value="psychologique">Psychologique</option>
                          </select>
                        </div>
                        <button type="button" class="btn btn-primary w-100" onclick="showResource()">Obtenir la ressource</button>
                      </form>
                      <div id="resource-result" class="mt-2 text-white fw-bold"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Main image -->
            <div class="col-7 col-sm-6 col-md-5 col-lg-6">
              <div class="d-none d-md-block d-lg-none" style="margin-top: -360px;"></div>
              <div class="d-md-none" style="margin-bottom: -40px;"></div>
              <div class="ratio opacity-75" style="--fn-aspect-ratio: calc(832 / 636 * 100%)">
                <img src="/assets/img/home/doctors/offers/main.png" alt="Image">
              </div>
              <div class="d-sm-none" style="margin-bottom: -75px;"></div>
              <div class="d-none d-sm-block d-md-none" style="margin-bottom: -110px;"></div>
            </div>
          </div>
        </div>
      </section>


      <!-- Vidéo -->
      <section class="container pt-2 pt-sm-3 pt-md-4 pt-lg-5 my-xxl-3">
        <div class="d-flex align-items-start justify-content-between gap-4 pt-5 pb-3 mb-2 mb-sm-3">
          <h2 class="h1 mb-0">Assistance Vidéo</h2>
        </div>

        <!-- Row of cards that turns into carousel on screens < 768px wide (md breakpoint) -->
        <div class="swiper video-swiper pb-5">
          <div class="swiper-wrapper">
            <!-- Card -->
            <div class="swiper-slide h-auto">
              <article class="card h-100 hover-effect-scale">
                <div class="card-img-top bg-body-tertiary overflow-hidden">
                  <div class="ratio hover-effect-target" style="--fn-aspect-ratio: calc(230 / 416 * 100%)">
                    <img src="/assets/img/home/doctors/consultation/01.jpeg" alt="Image">
                  </div>
                </div>
                <div class="card-body p-3">
                  <h3 class="h4 pt-1 mb-2">
                    <a class="hover-effect-underline stretched-link" href="#">Témoignages & Espoir</a>
                  </h3>
                  <p class="fs-sm mb-0">
                    Parce qu’il est parfois difficile de trouver les mots, cette vidéo vous partage des histoires 
                    vraies, des conseils et des informations pratiques. Elle est là pour vous rassurer, vous 
                    orienter et vous rappeler que vous n’êtes pas seul(e).</p>
                </div>
                <div class="card-footer d-flex flex-wrap justify-content-between gap-3 bg-transparent border-0 pt-1 pt-sm-2 pt-xl-3 pb-3 px-3">
                  <div class="d-flex align-items-center gap-2">
                    <div class="fs-sm text-body-secondary">Assistance en vidéo</div>
                  </div>
                  <button type="button" class="btn btn-outline-primary position-relative z-2">
                    Lire la vidéo
                  </button>
                </div>
              </article>
            </div>

            <!-- Card -->
            <div class="swiper-slide h-auto">
              <article class="card h-100 hover-effect-scale">
                <div class="card-img-top bg-body-tertiary overflow-hidden">
                  <div class="ratio hover-effect-target" style="--fn-aspect-ratio: calc(230 / 416 * 100%)">
                    <img src="/assets/img/home/doctors/consultation/02.jpg" alt="Image">
                  </div>
                </div>
                <div class="card-body p-3">
                  <h3 class="h4 pt-1 mb-2">
                    <a class="hover-effect-underline stretched-link" href="#">Guide pratique d’assistance</a>
                  </h3>
                  <p class="fs-sm mb-0">
                    Retrouvez ici des témoignages inspirants, ainsi que des explications claires sur les 
                    services d’assistance disponibles : soins médicaux, aide juridique, soutien psychologique…
                    Des ressources simples et accessibles, présentées pour vous accompagner.</p>
                </div>
                <div class="card-footer d-flex flex-wrap justify-content-between gap-3 bg-transparent border-0 pt-1 pt-sm-2 pt-xl-3 pb-3 px-3">
                  <div class="d-flex align-items-center gap-2">
                    <div class="fs-sm text-body-secondary">Découvrez en vidéo</div>
                  </div>
                  <button type="button" class="btn btn-outline-primary position-relative z-2">
                    Lire la vidéo
                  </button>
                </div>
              </article>
            </div>

            <!-- Card -->
            <div class="swiper-slide h-auto">
              <article class="card h-100 hover-effect-scale">
                <div class="card-img-top bg-body-tertiary overflow-hidden">
                  <div class="ratio hover-effect-target" style="--fn-aspect-ratio: calc(230 / 416 * 100%)">
                    <img src="/assets/img/home/doctors/consultation/03.jpg" alt="Image">
                  </div>
                </div>
                <div class="card-body p-3">
                  <h3 class="h4 pt-1 mb-2">
                    <a class="hover-effect-underline stretched-link" href="listings-list-doctors.html">Engagement & Soutien des partenaires</a>
                  </h3>
                  <p class="fs-sm mb-0">
                    Que vous soyez victime, témoin ou proche, ces vidéos vous aideront à comprendre les étapes 
                    essentielles pour agir. Regardez, informez-vous, et trouvez le soutien nécessaire pour 
                    avancer.</p>
                </div>
                <div class="card-footer d-flex flex-wrap justify-content-between gap-3 bg-transparent border-0 pt-1 pt-sm-2 pt-xl-3 pb-3 px-3">
                  <div class="d-flex align-items-center gap-2">
                    <div class="fs-sm text-body-secondary">Vidéo pour vous guider</div>
                  </div>
                  <button type="button" class="btn btn-outline-primary position-relative z-2">
                    Lire la vidéo
                  </button>
                </div>
              </article>
            </div>
          </div>

          <!-- Pagination (Bullets) -->
          <div class="swiper-pagination position-static mt-3"></div>
        </div>
      </section>

      <!-- Registration CTA -->
      <section class="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 my-xxl-3">
        <div class="bg-info rounded py-5 px-4 px-md-0 mb-5">
          <div class="row align-items-center py-md-2 py-lg-3 my-xl-3">
            <div class="col-md-7 col-lg-8 offset-md-1 pb-3 pb-md-0 mb-3 mb-md-0">
              <h2 class="h1 text-white text-center text-md-start mb-4">Parler à un expert maintenant</h2>
              <div class="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-md-start gap-3 gap-sm-4 gap-xl-5">
                <div class="d-flex align-items-center me-1 me-sm-0">
                  <div class="d-flex align-items-center justify-content-center flex-shrink-0 fs-sm fw-medium text-white border border-white rounded-circle" style="width: 2rem; height: 2rem">1</div>
                  <div class="fs-sm fw-medium text-white ps-2 ms-1">Par mail</div>
                </div>
                <div class="d-flex align-items-center me-1 me-sm-0">
                  <div class="d-flex align-items-center justify-content-center flex-shrink-0 fs-sm fw-medium text-white border border-white rounded-circle" style="width: 2rem; height: 2rem">2</div>
                  <div class="fs-sm fw-medium text-white ps-2 ms-1">Par Whatsapp</div>
                </div>
                <div class="d-flex align-items-center me-1 me-sm-0">
                  <div class="d-flex align-items-center justify-content-center flex-shrink-0 fs-sm fw-medium text-white border border-white rounded-circle" style="width: 2rem; height: 2rem">3</div>
                  <div class="fs-sm fw-medium text-white ps-2 ms-1">Par Appel</div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-lg-2 d-flex justify-content-center justify-content-md-end">
              <a class="btn btn-lg btn-primary" href="account-signup.html">Cliquer ici</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits -->
      <section class="bg-info py-5">
        <div class="container py-2 py-sm-3 py-md-4 py-lg-5 my-xxl-3">
          <h2 class="h1 text-white mb-2 mb-md-3">PNUD et Objectifs de Développement Durable</h2>
          <p class="text-white opacity-75 pb-2 pb-md-3 pb-lg-4">
            Le Programme des Nations Unies pour le développement (PNUD) accompagne les États et les 
            communautés dans la lutte contre les violences basées sur le genre (VBG), en mettant 
            l’accent sur la prévention, l’accès à la justice, la protection des victimes et la 
            promotion de l’égalité.<br/>
          Ces actions s’inscrivent directement dans les Objectifs de Développement Durable (ODD), 
          notamment :</p>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-4 gx-5 pb-2 pb-lg-3">
            <div class="col">
              <h3 class="h4 text-white mb-2 mb-md-3">ODD 5</h3>
              <div class="text-white mb-0" style="max-width: 370px">
                Égalité entre les sexes <br/>
                <ul>
                  <li class="text-white opacity-75">
                    Eliminer toutes les formes de violence à l’égard des femmes et des filles.
                  </li>
                </ul> 
              </div>
            </div>
            <div class="col">
              <h3 class="h4 text-white mb-2 mb-md-3">ODD 3</h3>
              <p class="text-white mb-0" style="max-width: 370px">
                Bonne santé et bien-être<br/>
                <ul>
                  <li class="text-white opacity-75">
                    Garantir une vie saine et promouvoir le bien-être de tous.
                  </li>
                </ul> 
              </p>
            </div>
            <div class="col">
              <h3 class="h4 text-white mb-2 mb-md-3">ODD 16</h3>
              <p class="text-white mb-0" style="max-width: 370px">
                Paix, justice et institutions efficaces <br/>
                <ul>
                  <li class="text-white opacity-75">
                    Protéger les droits humains et assurer un accès équitable à la justice.
                  </li>
                </ul> 
              </p>
            </div>
          </div>
          <hr data-bs-theme="light" style="opacity: .2">
          <div class="row gx-5 pt-2 pt-lg-3 justify-content-center" data-bs-theme="light">
  <div class="col-12 col-md-4 d-flex flex-column align-items-center text-center"
       style="color: var(--fn-primary-border-subtle)">
       
    <!-- Image -->
    <a href="https://fikiri.co" aria-label="PNUD">
      <img :src="pnud" alt="PNUD" style="height: 5rem; width: auto;" />
    </a>

    <!-- Texte -->
    <div class="mt-3" style="max-width: 140px;">
      PNUD <br/> ZEROVBG
    </div>
  </div>
</div>

        </div>
      </section>
      
    </main>
</template>