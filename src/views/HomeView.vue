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
  <section id="sobre-mi">
    <img src="@/assets/curves/white_curve_2.svg" alt="curva blanca" class="curve">
    <div class="container">
      <h2>Un compromiso real con hacer las cosas bien.</h2>
      <div class="row">
        <div class="col-lg-7">
          <div class="row pt-3">
            <div class="col-lg-6">
              <p class="p-16">
                Soy programadora front end y asesora digital, y llegué a la tecnología por un camino poco tradicional.Estudié Ingeniería Comercial, trabajé en startups y siempre me movió la curiosidad por aprender y crear. En plena pandemia descubrí la programación... ¡y me encantó! Ahí entendí que podía unir lo que más me apasiona: la creatividad, la organización y el trabajo con propósito.
              </p>
            </div>
            <div class="col-lg-6">
              <p class="p-16">
                Hoy acompaño a empresas, startups y agencias creativas a dar vida a proyectos digitales con un servicio cercano, claro y fluido. No solo programo sitios web: escucho, organizo y traduzco lo técnico a lo simple, para que cada proyecto fluya con confianza y claridad.
              </p>
            </div>
          </div>
          <p class="p-20 bold pt-3">
            Jesu.dev es mi manera de demostrar que la programación puede ser creativa, cercana y con propósito.
          </p>
          <ButtonComp 
            :btnColor="'btn-primary'" 
            :buttonText="'¡Conozcámonos'"
            :linkBtn="'#servicios'"
            class="mt-5"
          />
        </div>
      </div>
    </div>
    <img src="@/assets/img/yo_escalera.png" alt="jesudev en escalera" class="img-fluid sobre-mi-img">
  </section>
  <section id="servicios">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 pe-5">
          <h3>Desarrollo web para empresas y startups</h3>
          <p class="p-16">
            Trabajo junto a diseñadoras y equipos creativos para llevar sus ideas al mundo digital. Transformo diseños en código con fidelidad, fluidez y cuidado por los detalles, asegurando que el resultado final refleje la intención original del diseño.
          </p>
          <div class="d-flex flex-wrap justify-content-center pt-3">
            <TagComp 
              :tagColor="'blue-tag'" 
              :tagText="'Desarrollo Sitio Web'"
            />
            <TagComp 
              :tagColor="'pink-tag'" 
              :tagText="'Branding'"
            />
            <TagComp 
              :tagColor="'green-tag'" 
              :tagText="'Diseño UX/UI'"
            />
            <TagComp 
              :tagColor="'blue-tag'" 
              :tagText="'Otros Diseños'"
            />
          </div>
        </div>
        <div class="col-lg-6 ps-5">
          <h3>Colaboración con agencias de diseño y diseñadoras</h3>
          <p class="p-16">
            Trabajo junto a diseñadoras y equipos creativos para llevar sus ideas al mundo digital. Transformo diseños en código con fidelidad, fluidez y cuidado por los detalles, asegurando que el resultado final refleje la intención original del diseño.
          </p>
          <div class="d-flex flex-wrap justify-content-center pt-3">
            <TagComp 
              :tagColor="'blue-tag'" 
              :tagText="'Desarrollo Sitio Web'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="metodologia" class="text-center">
    <div class="container">
      <h2 class="black">Una metodología clara, un proceso colaborativo</h2>
      <p class="subtitle blue">Trabajo con una estructura que combina orden y creatividad, donde el feedback es parte esencial del proceso:
      </p>
    </div>
  </section>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue'
import BlurText from '@/components/BlurText.vue'
import ValueCard from '@/components/ValueCard.vue'
import TagComp from '@/components/TagComp.vue'

export default {
  name: 'HomeView',
  components: {
    ButtonComp,
    BlurText,
    ValueCard,
    TagComp
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
