<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <!-- Page Victime -->
  <div class="d-flex align-items-start border-bottom ps-md-4 pb-3 pb-sm-4">
    <h2 class="h5 d-flex min-w-0 mb-0">
      <span class="d-md-none">Etes-vous une victime ?</span>
      <span class="text-truncate d-none d-md-inline">Etes-vous une victime ?</span>
    </h2>
  </div>
  <div class="position-relative">
    <div class="position-absolute top-0 start-0 h-100 border-start d-none d-md-block"></div>
    <div class="row g-0">
      <div class="col-xl-11 col-xxl-10 pt-4 ps-md-4">
        <p>
          Être victime de violences basées sur le genre (VBG) est une expérience difficile et bouleversante. 
          Il est important de savoir que vous n’êtes pas seul·e et qu’il existe des ressources pour vous protéger, 
          vous soigner et vous accompagner. Voici quelques étapes essentielles à connaître :
        </p>

        <h3 class="h6 pt-2 pt-lg-3">1. Trouver un endroit sûr</h3>
        <p>
          Votre sécurité est la priorité. Si vous êtes en danger immédiat :
        </p>
        <ul>
          <li>Cherchez à vous mettre à l’abri (chez un proche, voisin, lieu public sécurisé).</li>
          <li>Appelez les numéros d’urgence (police, services spécialisés).</li>
        </ul>

        <h3 class="h6 pt-2 pt-lg-3">2. Prendre soin de sa santé</h3>
        <p>
          Les violences peuvent avoir des conséquences physiques et psychologiques. Il est important de :
        </p>
        <ul>
          <li>Consulter rapidement un médecin ou un centre de santé spécialisé.</li>
          <li>Demander un certificat médical qui pourra servir de preuve.</li>
          <li>Accéder à un soutien psychologique si nécessaire.</li>
        </ul>

        <h3 class="h6 pt-2 pt-lg-3">3. Signaler et chercher justice</h3>
        <p>
          Le signalement est une étape importante pour obtenir protection et justice :
        </p>
        <ul>
          <li>Porter plainte auprès des autorités compétentes (police, gendarmerie, justice).</li>
          <li>Contacter les associations spécialisées qui peuvent vous assister gratuitement.</li>
        </ul>

        <h3 class="h6 pt-2 pt-lg-3">4. Chercher du soutien</h3>
        <p>
          Vous n’avez pas à traverser cette épreuve seul·e :
        </p>
        <ul>
          <li>Appelez les lignes d’assistance dédiées aux victimes de VBG.</li>
          <li>Rejoignez des groupes de soutien ou des associations de défense des droits.</li>
          <li>Confiez-vous à une personne de confiance.</li>
        </ul>

        <h3 class="h6 pt-2 pt-lg-3">5. Connaître ses droits</h3>
        <p>
          Vous avez le droit à :
        </p>
        <ul>
          <li>La protection contre l’auteur des violences.</li>
          <li>L’accès gratuit à certains soins médicaux et psychologiques (selon votre pays).</li>
          <li>L’assistance juridique et sociale.</li>
        </ul>

        <h3 class="h6 pt-2 pt-lg-3">Conclusion</h3>
        <p>
          Personne ne mérite de subir des violences. Si vous êtes victime de VBG, sachez qu’il existe des 
          structures prêtes à vous écouter, vous protéger et vous accompagner dans votre reconstruction. 
          Chaque pas que vous faites pour chercher de l’aide est un acte de courage.
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
