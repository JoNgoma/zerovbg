<script setup>
import { useRouter, useRoute } from 'vue-router'
import pnud from "/assets/img/pnud.jpg"

const router = useRouter()
const route = useRoute()

// Fonction pour vérifier si un menu est actif
const isActive = (routeName) => {
  if (routeName === 'home') {
    return route.name === 'home'
  } else if (routeName === 'intellegis') {
    return route.name === 'i-ia' || route.name === 'i-mail'
  } else if (routeName === 'events') {
    return route.name === 'events' || route.name === 'show-event'
  } else if (routeName === 'docs') {
    return route.name === 'docs'
  }
  return false
}
</script>

<template>
  <!-- Navigation bar (Page header) -->
    <header class="navbar navbar-expand-lg bg-body navbar-sticky sticky-top z-fixed px-0" data-sticky-element="">
      <div class="container">

        <!-- Mobile offcanvas menu toggler (Hamburger) -->
        <button type="button" class="navbar-toggler me-3 me-lg-0" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar brand (Logo) -->
        <a class="navbar-brand py-1 py-md-2 py-xl-1 me-2 me-sm-n4 me-md-n5 me-lg-0" href="index-2.html">
          <span class="d-none d-sm-flex flex-shrink-0 text-primary rtl-flip me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 64 64">
              <!-- Bouclier -->
              <path d="M32 4L8 14v18c0 15 11 28 24 30c13-2 24-15 24-30V14L32 4z" 
                    fill="#4f46e5"/>
              <!-- Cœur -->
              <path d="M32 44s-10-6-14-12c-4-6-2-14 5-16c4-1 7 2 9 4c2-2 5-5 9-4c7 2 9 10 5 16c-4 6-14 12-14 12z" 
                    fill="#ffffff"/>
            </svg>


          </span>
          Zerovbg
        </a>

        <!-- Main navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) -->
        <nav class="offcanvas offcanvas-start" id="navbarNav" tabindex="-1" aria-labelledby="navbarNavLabel">
          <div class="offcanvas-header py-3">
            <h5 class="offcanvas-title" id="navbarNavLabel">Browse Finder</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body pt-2 pb-4 py-lg-0 mx-lg-auto">
            <ul class="navbar-nav position-relative">
              <li class="nav-item py-lg-2 me-lg-n2 me-xl-0">
                <router-link :to="{name : 'home'}" class="nav-link" :class="{ 'active': isActive('home') }">
                  Accueil
                </router-link>
              </li>
              <li class="nav-item dropdown py-lg-2 me-lg-n1 me-xl-0">
                <a class="nav-link dropdown-toggle" :class="{ 'active': isActive('intellegis') }" href="#" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" data-bs-auto-close="true" aria-expanded="false">
                  Intellegis
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link :to="{name : 'i-ia'}" class="dropdown-item" :class="{ 'active': route.name === 'i-ia' }">
                      Assitance virtuelle
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name : 'i-mail'}" class="dropdown-item" :class="{ 'active': route.name === 'i-mail' }">
                      Nous contacter par mail
                    </router-link>
                  </li>
                </ul>
              </li>
              
              <li class="nav-item py-lg-2 me-lg-n2 me-xl-0">
                <router-link :to="{name : 'events'}" class="nav-link" :class="{ 'active': isActive('events') }">
                  Evénements
                </router-link>
              </li>
              <li class="nav-item py-lg-2 me-lg-n2 me-xl-0">
                <router-link :to="{name : 'docs'}" class="nav-link" :class="{ 'active': isActive('docs') }">
                  Documentations
                </router-link>
              </li>
            </ul>
          </div>
        </nav>

        <!-- Button group -->
        <div class="d-flex align-items-center gap-sm-1">

          <!-- Theme switcher (light/dark/auto) -->
          <!-- <div class="dropdown me-1">
            <button type="button" class="theme-switcher btn btn-icon btn-outline-secondary fs-lg border-0 animate-scale" data-bs-toggle="dropdown" data-bs-display="dynamic" aria-expanded="false" aria-label="Toggle theme (light)">
              <span class="theme-icon-active d-flex animate-target">
                <i class="fi-sun"></i>
              </span>
            </button>
            <ul class="dropdown-menu start-50 translate-middle-x" style="--fn-dropdown-min-width: 9rem; --fn-dropdown-spacer: .5rem">
              <li>
                <button type="button" class="dropdown-item active" data-bs-theme-value="light" aria-pressed="true">
                  <span class="theme-icon d-flex fs-base me-2">
                    <i class="fi-sun"></i>
                  </span>
                  <span class="theme-label">Light</span>
                  <i class="item-active-indicator fi-check ms-auto"></i>
                </button>
              </li>
              <li>
                <button type="button" class="dropdown-item" data-bs-theme-value="dark" aria-pressed="false">
                  <span class="theme-icon d-flex fs-base me-2">
                    <i class="fi-moon"></i>
                  </span>
                  <span class="theme-label">Dark</span>
                  <i class="item-active-indicator fi-check ms-auto"></i>
                </button>
              </li>
              <li>
                <button type="button" class="dropdown-item" data-bs-theme-value="auto" aria-pressed="false">
                  <span class="theme-icon d-flex fs-base me-2">
                    <i class="fi-auto"></i>
                  </span>
                  <span class="theme-label">Auto</span>
                  <i class="item-active-indicator fi-check ms-auto"></i>
                </button>
              </li>
            </ul>
          </div> -->
          <a href="https://fikiri.co" aria-label="PNUD" class="d-flex align-items-center me-2">
            <img :src="pnud" alt="PNUD" style="height: 3.5rem; width: auto;" />
          </a>



          <!-- Log in button
          <a class="btn btn-outline-secondary animate-slide-end me-2" href="account-signin.html" aria-label="Sign in to account">
            <i class="fi-log-in fs-base animate-target mx-n2 me-xl-2"></i>
            <span class="d-none d-xl-inline">Log in</span>
          </a>

          Sign up / Register button 
          <a class="btn btn-primary animate-shake" href="account-signup.html">
            <i class="fi-user fs-base animate-target ms-n1 me-1 me-sm-2"></i>
            Sign up
          </a> -->
        </div>
      </div>
    </header>
</template>

<style scoped>
/* Style pour le menu actif */
.nav-link.active {
  color: blue !important; /* Changement de couleur de rouge à bleu */
  font-weight: 600;
}

.dropdown-item.active {
  background-color: blue; /* Changement de couleur de fond pour les sous-options */
  color: white;
}

.navbar-brand img {
  max-height: 40px;
}
</style>
