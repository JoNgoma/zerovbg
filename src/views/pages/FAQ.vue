<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <!-- FAQ (Accordion) -->
  <section class="container py-5 mb-xxl-3">
    <div class="row py-1 py-sm-2 py-md-3 py-lg-4 py-xl-5">
      <div class="col-md-4 col-xl-3 mb-4 mb-md-0" style="margin-top: -120px">
        <div class="sticky-md-top text-center text-md-start pe-md-4 pe-lg-5 pe-xl-0" style="padding-top: 120px;">
          <h2>FAQs</h2>
          <p class="pb-2 pb-md-3">Les questions qui reviennent souvent</p>
          <a class="btn btn-lg btn-primary" href="contact-v1.html">Nous écrire</a>
        </div>
      </div>
      <div class="col-md-8 offset-xl-1">
        <!-- Accordion of questions -->
        <div class="accordion" id="faq">

          <!-- Question 1 -->
          <div class="accordion-item">
            <h3 class="accordion-header" id="faqHeading-1">
              <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-1" aria-expanded="false" aria-controls="faqCollapse-1">
                Que faire si je suis témoin d’une violence ?
              </button>
            </h3>
            <div class="accordion-collapse collapse" id="faqCollapse-1" aria-labelledby="faqHeading-1" data-bs-parent="#faq">
              <div class="accordion-body">
                Assurez-vous que la personne est en sécurité. Contactez immédiatement les autorités compétentes ou les services spécialisés pour signaler l’incident. Offrez votre soutien émotionnel sans mettre votre propre sécurité en danger.
              </div>
            </div>
          </div>

          <!-- Question 2 -->
          <div class="accordion-item">
            <h3 class="accordion-header" id="faqHeading-2">
              <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-2" aria-expanded="false" aria-controls="faqCollapse-2">
                Comment puis-je soutenir une victime sans nuire ?
              </button>
            </h3>
            <div class="accordion-collapse collapse" id="faqCollapse-2" aria-labelledby="faqHeading-2" data-bs-parent="#faq">
              <div class="accordion-body">
                Écoutez-la attentivement, croyez-la et respectez sa confidentialité. Encouragez-la à contacter des services spécialisés et ne la jugez pas. Évitez d’imposer vos propres solutions, mais proposez un accompagnement pour chercher de l’aide professionnelle.
              </div>
            </div>
          </div>

          <!-- Question 3 -->
          <div class="accordion-item">
            <h3 class="accordion-header" id="faqHeading-3">
              <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-3" aria-expanded="false" aria-controls="faqCollapse-3">
                Dois-je appeler la police si je suspecte des violences ?
              </button>
            </h3>
            <div class="accordion-collapse collapse" id="faqCollapse-3" aria-labelledby="faqHeading-3" data-bs-parent="#faq">
              <div class="accordion-body">
                Oui, surtout si la sécurité de la victime ou d’autrui est menacée. Même si vous n’êtes pas certain, il vaut mieux signaler l’incident afin que des professionnels puissent évaluer la situation.
              </div>
            </div>
          </div>

          <!-- Question 4 -->
          <div class="accordion-item">
            <h3 class="accordion-header" id="faqHeading-4">
              <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-4" aria-expanded="false" aria-controls="faqCollapse-4">
                Quelles sont les ressources disponibles pour les victimes ?
              </button>
            </h3>
            <div class="accordion-collapse collapse" id="faqCollapse-4" aria-labelledby="faqHeading-4" data-bs-parent="#faq">
              <div class="accordion-body">
                Les victimes peuvent accéder à des centres d’accueil, lignes d’assistance téléphonique, services de santé, psychologues spécialisés, et associations de défense des droits. Encouragez-les à se rapprocher de ces structures.
              </div>
            </div>
          </div>

          <!-- Question 5 -->
          <div class="accordion-item">
            <h3 class="accordion-header" id="faqHeading-5">
              <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-5" aria-expanded="false" aria-controls="faqCollapse-5">
                Que faire si je suis témoin mais la victime ne veut pas de mon aide ?
              </button>
            </h3>
            <div class="accordion-collapse collapse" id="faqCollapse-5" aria-labelledby="faqHeading-5" data-bs-parent="#faq">
              <div class="accordion-body">
                Respectez son choix et ne la forcez pas. Vous pouvez rester disponible et lui fournir discrètement des informations sur les services d’aide, pour qu’elle sache qu’elle peut demander de l’aide quand elle sera prête.
              </div>
            </div>
          </div>

          <!-- Question 6 -->
          <div class="accordion-item">
            <h3 class="accordion-header" id="faqHeading-6">
              <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-6" aria-expanded="false" aria-controls="faqCollapse-6">
                Puis-je rester anonyme en signalant un incident ?
              </button>
            </h3>
            <div class="accordion-collapse collapse" id="faqCollapse-6" aria-labelledby="faqHeading-6" data-bs-parent="#faq">
              <div class="accordion-body">
                Dans la plupart des cas, oui. Vous pouvez contacter des lignes d’assistance ou services spécialisés qui acceptent les signalements anonymes, mais certaines procédures judiciaires peuvent nécessiter votre identité.
              </div>
            </div>
          </div>

          <!-- Question 7 -->
          <div class="accordion-item">
            <h3 class="accordion-header" id="faqHeading-7">
              <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-7" aria-expanded="false" aria-controls="faqCollapse-7">
                Comment puis-je protéger moi-même ou d’autres personnes ?
              </button>
            </h3>
            <div class="accordion-collapse collapse" id="faqCollapse-7" aria-labelledby="faqHeading-7" data-bs-parent="#faq">
              <div class="accordion-body">
                Assurez-vous que vous êtes en sécurité avant d’intervenir. Signalez immédiatement les violences aux autorités compétentes, et aidez les victimes à accéder aux services professionnels. Évitez les confrontations directes si cela met votre sécurité en danger.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
