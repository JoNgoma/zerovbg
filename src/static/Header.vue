<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { Offcanvas, Dropdown } from 'bootstrap'
import pnud from "/assets/img/pnud.jpg"

const route = useRoute()
const router = useRouter()

let offcanvasInstance = null

onMounted(() => {
  const offcanvasEl = document.getElementById('navbarNav')
  if (!offcanvasEl) return

  offcanvasInstance = Offcanvas.getOrCreateInstance(offcanvasEl)

  // Nettoyage des backdrops "fantômes"
  offcanvasEl.addEventListener('hidden.bs.offcanvas', () => {
    document.querySelectorAll('.offcanvas-backdrop, .modal-backdrop').forEach(el => el.remove())
    document.body.classList.remove('offcanvas-open')
  })

  // Activer hover des dropdowns seulement sur desktop
  if (!('ontouchstart' in window)) {
    const toggles = offcanvasEl.querySelectorAll('.dropdown-toggle')
    toggles.forEach((t) => {
      const dd = Dropdown.getOrCreateInstance(t)
      t.addEventListener('mouseenter', () => dd.show())
      const menu = t.nextElementSibling
      t.addEventListener('mouseleave', () => {
        if (menu) {
          menu.addEventListener('mouseleave', () => dd.hide(), { once: true })
        } else {
          dd.hide()
        }
      })
    })
  }
})

// 👉 ferme l’offcanvas après navigation
const navigateAndClose = (to) => {
  router.push(to)
  if (offcanvasInstance) offcanvasInstance.hide()
}

const isActive = (routeName) => {
  if (routeName === 'home') return route.name === 'home'
  if (routeName === 'intellegis') return ['i-ia', 'i-mail', 'i-faq'].includes(route.name)
  if (routeName === 'events') return ['events', 'show-event'].includes(route.name)
  if (routeName === 'docs') return route.name === 'docs'
  if (routeName === 'about') return route.name === 'about'
  return false
}
</script>

<template>
  <header class="navbar navbar-expand-lg bg-body navbar-sticky sticky-top z-fixed px-0" data-sticky-element="">
    <div class="container">
      <!-- Toggler -->
      <button type="button" class="navbar-toggler me-3 me-lg-0" 
              data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Logo -->
      <router-link :to="{name : 'home'}" class="navbar-brand py-1 py-md-2 py-xl-1 me-2 me-sm-n4 me-md-n5 me-lg-0">
        <span class="d-none d-sm-flex flex-shrink-0 text-primary rtl-flip me-2">
          <!-- svg logo ici -->
        </span>
        Zerovbg
      </router-link>

      <!-- Menu -->
      <nav class="offcanvas offcanvas-start" id="navbarNav" tabindex="-1" aria-labelledby="navbarNavLabel">
        <div class="offcanvas-header py-3">
          <h5 class="offcanvas-title" id="navbarNavLabel">Zerovgb</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body pt-2 pb-4 py-lg-0 mx-lg-auto">
          <ul class="navbar-nav position-relative">
            <!-- Accueil -->
            <li class="nav-item py-lg-2 me-lg-n2 me-xl-0">
              <a class="nav-link" :class="{ 'active': isActive('home') }"
                 href="#" @click.prevent="navigateAndClose({ name: 'home' })">
                Accueil
              </a>
            </li>

            <!-- Intellegis -->
            <li class="nav-item dropdown py-lg-2 me-lg-n1 me-xl-0">
              <a class="nav-link dropdown-toggle" :class="{ 'active': isActive('intellegis') }"
                 href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                Intellegis
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" :class="{ 'active': route.name === 'i-ia' }"
                     href="#" @click.prevent="navigateAndClose({ name: 'i-ia' })">
                    Assistance virtuelle
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ 'active': route.name === 'i-mail' }"
                     href="#" @click.prevent="navigateAndClose({ name: 'i-mail' })">
                    Nous contacter par mail
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ 'active': route.name === 'i-faq' }"
                     href="#" @click.prevent="navigateAndClose({ name: 'i-faq' })">
                    FAQ
                  </a>
                </li>
              </ul>
            </li>

            <!-- Evénements -->
            <li class="nav-item py-lg-2 me-lg-n2 me-xl-0">
              <a class="nav-link" :class="{ 'active': isActive('events') }"
                 href="#" @click.prevent="navigateAndClose({ name: 'events' })">
                Evénements
              </a>
            </li>

            <!-- Docs -->
            <li class="nav-item py-lg-2 me-lg-n2 me-xl-0">
              <a class="nav-link" :class="{ 'active': isActive('docs') }"
                 href="#" @click.prevent="navigateAndClose({ name: 'docs' })">
                Documentations
              </a>
            </li>

            <!-- A propos -->
            <li class="nav-item py-lg-2 me-lg-n2 me-xl-0">
              <a class="nav-link" :class="{ 'active': isActive('about') }"
                 href="#" @click.prevent="navigateAndClose({ name: 'about' })">
                A propos
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Right side -->
      <div class="d-flex align-items-center gap-sm-1">
        <a href="https://fikiri.co" aria-label="PNUD" class="d-flex align-items-center me-2">
          <img :src="pnud" alt="PNUD" style="height: 3.5rem; width: auto;" />
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-link.active {
  color: blue !important;
  font-weight: 600;
}
.dropdown-item.active {
  background-color: rgb(70, 70, 177);
  color: white;
}
.navbar-brand img {
  max-height: 40px;
}
</style>
