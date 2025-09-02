<script setup>
import DocVictime from '@/static/DocVictime.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <!-- Documentaions topics -->
      <section class="container pb-5 mb-2 mb-sm-3 mb-md-4 mb-xl-5">

        <div class="row g-0">
          <div class="col-md-4 col-lg-3 pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0">
            <h2 class="h5 border-bottom pb-3 pb-sm-4 mb-0">Documentaions</h2>

            <!-- Nav in format of list group -->
            <div class="list-group list-group-borderless pt-4 pe-md-4" role="tablist">
              <a class="list-group-item list-group-item-action d-flex align-items-center fs-base active" href="help-topics-v1.html">Je suis victime</a>
              <a class="list-group-item list-group-item-action d-flex align-items-center fs-base" href="help-topics-v1.html">Je suis temoin</a>
            </div>

          </div>
          <!-- Article content -->
          <div class="col-md-8 col-lg-9">
            <div class="d-flex align-items-start border-bottom ps-md-4 pb-3 pb-sm-4">
              <h2 class="h5 d-flex min-w-0 mb-0">
                <span class="d-md-none">Etes-vous une victime ?</span>
                <span class="text-truncate d-none d-md-inline">Etes-vous une victime ?</span>
              </h2>
            </div>
            <div class="position-relative">
              <div class="position-absolute top-0 start-0 h-100 border-start d-none d-md-block"></div>
                <DocVictime />
            </div>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="pt-4 mt-2 mt-sm-3">
          <h3 class="fs-base pb-sm-1">Pas très bien compris ? Autre préocupation ?</h3>
          <a class="btn btn-lg btn-primary" href="contact-v1.html">Nous écrire</a>
        </div>
      </section>
</template>