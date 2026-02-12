<template>
  <section id="hero">
    <div class="container">
      <BlurText
        text="Tu mejor compañera en el mundo digital"
        :delay="200"
        class-name="hero-title"
        animate-by="words"
        direction="top"
        :threshold="0.1"
        root-margin="0px"
        :step-duration="0.35"
        :on-animation-complete="handleAnimationComplete"
      />
      <p :class="['hero-description', 'p-20', 'px-5', { 'show': showDescription }]">Te entrego una asesoría integral, comunicación fluida y confianza para que tu marca esté presente.</p>
      <div class="button-cont d-flex gap-2 justify-content-center mt-4">
        <ButtonComp 
            :btnColor="'btn-primary'" 
            :buttonText="'Ver servicios'"
            :linkBtn="'#servicios'"
          />
          <ButtonComp 
            :btnColor="'btn-secondary'" 
            :buttonText="'Ver portafolio'"
            :linkBtn="'#portafolio'"
          />
      </div>
    </div>
    <img src="@/assets/icons/hand_writting.png" alt="mano escribiendo" class="hand-writting">
  </section>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue'
import BlurText from '@/components/BlurText.vue'

export default {
  name: 'HomeView',
  components: {
    ButtonComp,
    BlurText
  },
  data() {
    return {
      showDescription: false
    }
  },
  methods: {
    handleAnimationComplete() {
      // Mostrar el párrafo después de que termine la animación del título
      setTimeout(() => {
        this.showDescription = true
      }, 200) // Pequeño delay para transición más suave
    }
  }
}
</script>
