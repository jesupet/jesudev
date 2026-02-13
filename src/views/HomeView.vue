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
      <div :class="['button-cont', 'd-flex', 'gap-2', 'justify-content-center', 'mt-4', { 'show': showButtons }]">
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
    <img src="@/assets/curves/white_curve_1.svg" alt="curva blanca" class="curve">
  </section>
  <section id="values">
    <div class="container black">
      <h2 class="black">¿Por qué elegirme?</h2>
      <p class="subtitle blue">algunas de las razones...</p>
      <div class="row pt-5">
        <div class="col-lg-3">
          <ValueCard 
            :number="'1'"
            :title="'Asesoría Experta'"
            :description="'Escucho tus necesidades y elaboramos un plan para elevar tu marca, Mi rol es traducir lo técnico a lo simple y entregar soluciones que hagan sentido a tu negocio.'"
          />
        </div>
        <div class="col-lg-3">
          <ValueCard 
            :number="'2'"
            :title="'Planificación y claridad'"
            :description="'Me gusta trabajar con procesos organizados: plazos definidos, entregas claras y un camino que te da seguridad desde el primer día. Así sabes qué esperar en cada etapa del proyecto.'"
          />
        </div>
        <div class="col-lg-3">
          <ValueCard 
            :number="'3'"
            :title="'Comunicación fluida'"
            :description="'La buena comunicación es la base de todo. Respondo rápido, escucho activamente y mantengo una relación cercana para que el proyecto avance sin problemas.'"
          />
        </div>
        <div class="col-lg-3">
          <ValueCard 
            :number="'4'"
            :title="'Profesionalismo'"
            :description="'Cumplo lo que prometo. Soy responsable, transparente y me tomo cada proyecto con la seriedad que merece, cuidando tanto la parte técnica como la relación con el cliente.'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue'
import BlurText from '@/components/BlurText.vue'
import ValueCard from '@/components/ValueCard.vue'

export default {
  name: 'HomeView',
  components: {
    ButtonComp,
    BlurText,
    ValueCard
  },
  data() {
    return {
      showDescription: false,
      showButtons: false
    }
  },
  methods: {
    handleAnimationComplete() {
      // Mostrar el párrafo después de que termine la animación del título
      setTimeout(() => {
        this.showDescription = true
      }, 200) // Pequeño delay para transición más suave
      setTimeout(() => {
        this.showButtons = true
      }, 400) // Pequeño delay para transición más suave
    }
  }
}
</script>
