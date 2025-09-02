<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <!-- Page Témoin -->
  <div class="d-flex align-items-start border-bottom ps-md-4 pb-3 pb-sm-4">
    <h2 class="h5 d-flex min-w-0 mb-0">
      <span class="d-md-none">Vous êtes témoin ?</span>
      <span class="text-truncate d-none d-md-inline">Vous êtes témoin ?</span>
    </h2>
  </div>
  <div class="position-relative">
    <div class="position-absolute top-0 start-0 h-100 border-start d-none d-md-block"></div>
    <div class="row g-0">
      <div class="col-xl-11 col-xxl-10 pt-4 ps-md-4">
        <p>
          Être témoin de violences basées sur le genre (VBG) peut être choquant et stressant. 
          Il est important de savoir comment réagir pour soutenir la victime et garantir sa sécurité.
        </p>

        <h3 class="h6 pt-2 pt-lg-3">1. Assurer la sécurité immédiate</h3>
        <p>
          Si vous êtes témoin d’une situation dangereuse :
        </p>
        <ul>
          <li>Ne mettez pas votre propre sécurité en danger.</li>
          <li>Appelez immédiatement les services d’urgence (police, services spécialisés).</li>
          <li>Aidez la victime à se mettre à l’abri si c’est sûr de le faire.</li>
        </ul>

        <h3 class="h6 pt-2 pt-lg-3">2. Écouter et soutenir</h3>
        <p>
          Le soutien émotionnel est essentiel pour la victime :
        </p>
        <ul>
          <li>Écoutez sans juger et croyez ce que la victime vous raconte.</li>
          <li>Montrez de l’empathie et du respect pour sa situation.</li>
          <li>Encouragez-la à chercher de l’aide professionnelle si nécessaire.</li>
        </ul>

        <h3 class="h6 pt-2 pt-lg-3">3. Fournir des informations et des ressources</h3>
        <p>
          Vous pouvez aider la victime à connaître ses options :
        </p>
        <ul>
          <li>Fournissez des contacts d’associations spécialisées, lignes d’assistance et services de santé.</li>
          <li>Informez-la sur ses droits et sur les démarches légales possibles.</li>
        </ul>

        <h3 class="h6 pt-2 pt-lg-3">4. Encourager le signalement en toute sécurité</h3>
        <p>
          Signaler les violences peut aider la victime à obtenir protection et justice :
        </p>
        <ul>
          <li>Accompagnez-la si elle le souhaite pour porter plainte ou consulter un service compétent.</li>
          <li>Respectez sa décision si elle n’est pas prête à signaler, mais restez disponible pour soutenir.</li>
        </ul>

        <h3 class="h6 pt-2 pt-lg-3">5. Protéger la confidentialité</h3>
        <p>
          Respectez toujours la vie privée de la victime :
        </p>
        <ul>
          <li>Ne partagez pas d’informations personnelles sans consentement.</li>
          <li>Ne prenez pas de photos ou vidéos de la situation.</li>
        </ul>

        <h3 class="h6 pt-2 pt-lg-3">Conclusion</h3>
        <p>
          Être témoin de VBG implique responsabilité et prudence. Votre soutien peut faire une grande différence pour la sécurité et le bien-être de la victime. 
          Agir de manière réfléchie et bien informée est un acte de solidarité et de courage.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar-brand img {
  max-height: 40px;
}
</style>
