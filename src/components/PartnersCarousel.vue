<template>
  <div class="partners-carousel" v-if="partnerLogos.length > 0">
    <div
      id="partnersCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      <div class="carousel-inner">
        <div
          v-for="(chunk, index) in partnerLogoChunks"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <div class="partners-slide d-flex align-items-center justify-content-center gap-4 flex-wrap">
            <div
              v-for="(logo, i) in chunk"
              :key="i"
              class="partner-logo-wrapper"
            >
              <img
                :src="logo.src"
                :alt="logo.alt"
                class="partner-logo img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        v-if="partnerLogoChunks.length > 1"
        class="carousel-control-prev"
        type="button"
        data-bs-target="#partnersCarousel"
        data-bs-slide="prev"
        aria-label="Anterior"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        v-if="partnerLogoChunks.length > 1"
        class="carousel-control-next"
        type="button"
        data-bs-target="#partnersCarousel"
        data-bs-slide="next"
        aria-label="Siguiente"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>
  <p v-else class="partners-empty text-muted small">Añade logotipos en <code>src/assets/logos/partners</code> para ver el carrusel.</p>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'PartnersCarousel',
  computed: {
    ...mapState(['partnerLogos']),
    ...mapGetters(['partnerLogoChunks'])
  }
}
</script>

<style src="@/assets/css/components/partners-carousel.css"></style>
