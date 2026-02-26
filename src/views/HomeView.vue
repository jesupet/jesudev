<template>
  <section id="hero">
    <div class="container">
      <!-- Hero Title 
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
      />-->
      <h1 class="hero-title"><span data-aos="fade-up" data-aos-delay="100">Tu </span><span data-aos="fade-up" data-aos-delay="300">mejor </span><span data-aos="fade-up" data-aos-delay="500">compañera </span><span data-aos="fade-up" data-aos-delay="700">en el </span><span data-aos="fade-up" data-aos-delay="900">mundo </span><span data-aos="fade-up" data-aos-delay="1100">digital </span></h1>
      <p class="p-20 px-lg-5" data-aos="fade-up"  data-aos-delay="900">Te entrego una asesoría integral, comunicación fluida y confianza para que tu marca esté presente.</p>
      <div class="button-cont d-flex gap-2 mt-4">
        <ButtonComp 
            :btnColor="'btn-primary'" 
            :buttonText="'Ver servicios'"
            :hashTag="'#servicios'"
            :displayLink="true"
            data-aos="zoom-in"
            data-aos-delay="1000"
          />
          <ButtonComp 
            :btnColor="'btn-secondary'" 
            :buttonText="'Ver proyectos'"
            :hashTag="'#proyectos'"
            :displayLink="true"
            data-aos="zoom-in"
            data-aos-delay="1000"
          />
      </div>
    </div>
    <img src="@/assets/icons/hand_writting.png" alt="mano escribiendo" class="hand-writting">
    <img src="@/assets/curves/white_curve_1.svg" alt="curva blanca" class="curve">
  </section>
  <section id="values">
    <div class="container black" data-aos="fade-up">
      <h2 class="black">¿Por qué elegirme?</h2>
      <p class="subtitle blue">Algunas de las razones...</p>
      <div class="row pt-5 d-none d-lg-flex">
        <div class="col-lg-3" v-for="(card, index) in valueCards" :key="`desktop-value-${index}`" data-aos="fade-up" :data-aos-delay="index * 90">
          <ValueCard
            :number="card.number"
            :title="card.title"
            :description="card.description"
          />
        </div>
      </div>
      <div class="d-lg-none pt-4" data-aos="fade-up" data-aos-delay="100">
        <ValueCardsCarousel :cards="valueCards" />
      </div>
    </div>
  </section>
  <section id="sobre-mi">
    <img src="@/assets/curves/white_curve_2.svg" alt="curva blanca" class="curve">
    <div class="container" data-aos="fade-right">
      <h2>Un compromiso real con hacer las cosas bien.</h2>
      <div class="row">
        <div class="col-lg-7">
          <div class="row pt-3">
            <div class="col-lg-6">
              <p class="p-16">
                Soy programadora front end y asesora digital, y llegué a la tecnología por un camino poco tradicional. <br>Estudié Ingeniería Comercial, trabajé en startups y siempre me movió la curiosidad por aprender y crear. <br>Durante la pandemia descubrí la programación... y me encantó! Ahí entendí que podía unir lo que más me apasiona: la creatividad, la organización y el trabajo con propósito.
              </p>
            </div>
            <div class="col-lg-6">
              <p class="p-16">
                Hoy acompaño a empresas, startups y agencias creativas a dar vida a proyectos digitales con un servicio cercano, claro y fluido. <br>
                No solo programo sitios web: escucho, organizo y traduzco lo técnico a lo simple, para que cada proyecto fluya con confianza y claridad.
              </p>
            </div>
          </div>
          <p class="p-20 bold pt-3">
            Jesu.dev es mi manera de mostrar que el desarrollo web puede ser simple, fluido y creativo.
          </p>
          <ButtonComp 
            :btnColor="'btn-primary'" 
            :buttonText="'¡Conozcámonos!'"
            :linkBtn="'https://calendar.app.google/63Mn8yTNpYVNEEk56'"
            class="mt-5"
          />
        </div>
      </div>
    </div>
    <img src="@/assets/img/yo_escalera.png" alt="jesudev en escalera" class="img-fluid sobre-mi-img" data-aos="fade-left" data-aos-delay="150">
  </section>
  <section id="servicios">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 pe-lg-5" data-aos="fade-up" data-aos-delay="100">
          <h3>Asesoría digital para empresas y startups</h3>
          <p class="p-16">
            Creo sitios web 100% personalizados, dinámicos y con mucha atención a la estructura para lograr una buena interacción con el visitante. No uso plantillas ni porcesos complejos de desarrollo. Priorizo la simplicidad y la eficiencia cuidando siempre los detalles. 
          </p>
          <div class="d-flex flex-wrap justify-content-center pt-3">
            <TagComp 
              :tagColor="'blue-tag'" 
              :tagText="'Desarrollo Web'"
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
        <div class="col-lg-6 ps-lg-5 py-lg-0 py-5" data-aos="fade-up" data-aos-delay="200">
          <h3>Colaboración con agencias de diseño</h3>
          <p class="p-16">
            Trabajo junto a diseñadoras y equipos creativos para llevar sus ideas al mundo digital. Transformo diseños en código con fidelidad, fluidez y cuidado por los detalles, asegurando que el resultado final refleje la intención original del diseño.
          </p>
          <div class="d-flex flex-wrap justify-content-center pt-3">
            <TagComp 
              :tagColor="'blue-tag'" 
              :tagText="'Desarrollo Web'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="metodologia" class="text-center">
    <div class="container">
      <h2 class="black" data-aos="fade-up">Una metodología clara, un proceso colaborativo</h2>
      <p class="subtitle blue pb-5" data-aos="fade-up" data-aos-delay="80">Trabajo con una estructura que combina orden y creatividad, donde el feedback es parte esencial del proceso
      </p>
      <div class="steps">
        <img src="@/assets/curves/blue_line.svg" alt="línea azul" class="blue-line">
        <div class="row">
          <div class="col-lg-3 text-center" data-aos="fade-up" data-aos-delay="60">
            <img src="@/assets/icons/mouth.svg" alt="boca hablando" class="step-icon">
            <h4 class="black">Reunión Brief Inicial</h4>
            <p class="p-14 black">
              Escucho y comprendo el proyecto, su contexto y objetivos. Definimos Carta Gantt con plazos y responsables.
            </p>
          </div>
          <div class="col-lg-3 text-center" data-aos="fade-up" data-aos-delay="200">
            <img src="@/assets/icons/hand_puzzle.svg" alt="mano con puzzle" class="step-icon">
            <h4 class="black">Contenido y Diseño</h4>
            <p class="p-14 black">
              Elaboración de contenido, diseño Wireframe (UX) y Diseño Mockup (UI).
            </p>
          </div>
          <div class="col-lg-3 text-center" data-aos="fade-up" data-aos-delay="300">
            <img src="@/assets/icons/machine.svg" alt="máquina de escribir" class="step-icon">
            <h4 class="black">Programación</h4>
            <p class="p-14 black">
              Desarrollo Web  en lenguajes y plataformas definidas.
            </p>
          </div>
          <div class="col-lg-3 text-center" data-aos="fade-up" data-aos-delay="400">
            <img src="@/assets/icons/computer.svg" alt="máquina de escribir" class="step-icon">
            <h4 class="black">Sitio web online</h4>
            <p class="p-14 black">
              Configuración de hosting y dominio. Pruebas finales de usabilidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="proyectos">
    <img src="@/assets/curves/white_curve_2.svg" alt="curva blanca" class="curve">
    <div class="container text-center" data-aos="fade-up">
      <h2 data-aos="fade-up">Algunos de mis proyectos</h2>
      <p class="subtitle pink" data-aos="fade-up" data-aos-delay="80">
        realizados en colaboración con mis partners
      </p>
      <div class="row pt-5 d-none d-lg-flex">
        <div class="col-lg-4" v-for="(project, index) in projects" :key="project.id" data-aos="zoom-in" :data-aos-delay="(index % 3) * 90">
          <ProjectCard :project="project" />
        </div>
      </div>
      <div class="row pt-5 d-lg-none">
        <div class="col-12" v-for="(project, index) in displayedProjectsMobile" :key="`mobile-project-${project.id}`" data-aos="zoom-in" :data-aos-delay="index * 100">
          <ProjectCard :project="project" />
        </div>
      </div>
      <button
        v-if="shouldShowProjectsButton"
        class="btn btn-primary d-lg-none mt-3"
        type="button"
        @click="showAllProjectsMobileAction"
      >
        Ver todos
      </button>
    </div>
    <img src="@/assets/curves/white_curve_3.svg" alt="curva blanca" class="curve2">
  </section>
  <section id="partners">
    <div class="container text-center" data-aos="zoom-in-up">
      <h2 class="black">Alianzas y partners</h2>
      <p class="subtitle blue">
        Claves para el desarrollo de mis proyectos
      </p>
      <PartnersCarousel />
    </div>
  </section>
  <section id="faqs">
    <img src="@/assets/curves/white_curve_4.svg" alt="curva blanca" class="curve">
    <div class="container text-center" data-aos="fade-up">
      <h2>A cada pregunta,</h2>
      <p class="subtitle green">una respuesta</p>
      <AccordionDudas class="py-5"/>
      <ButtonComp 
        :btnColor="'btn-primary'" 
        :buttonText="'¿Aún tienes dudas?'"
        data-tally-open="vGNXR0" 
        data-tally-hide-title="1"
        class="mt-5"
      />
    </div>
    <img src="@/assets/curves/white_curve_5.svg" alt="curva blanca" class="curve2">
  </section>
  <section id="cta">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 cta-text" data-aos="fade-right">
          <h2 class="black">¿Te gustaría trabajar junt@s?</h2>
          <div class="button-cont">
            <ButtonComp 
              :btnColor="'btn-primary'" 
              :buttonText="'Agéndame una reunión'"
              :linkBtn="'https://calendar.app.google/63Mn8yTNpYVNEEk56'"
              class="me-3"
            />
            <ButtonComp 
              :btnColor="'btn-secondary'" 
              :buttonText="'Envíame un mensaje'"
              data-tally-open="vGNXR0" 
              data-tally-hide-title="1"
            />
          </div>
        </div>
        <div class="col-lg-5" data-aos="fade-left" data-aos-delay="120">
          <img src="@/assets/img/cta_img.png" alt="imagen de cta" class="img-fluid cta-img">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue'
//import BlurText from '@/components/BlurText.vue'
import ValueCard from '@/components/ValueCard.vue'
import ValueCardsCarousel from '@/components/ValueCardsCarousel.vue'
import TagComp from '@/components/TagComp.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import PartnersCarousel from '@/components/PartnersCarousel.vue'
import AccordionDudas from '@/components/AccordionDudas.vue'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    ButtonComp,
    //BlurText,
    ValueCard,
    ValueCardsCarousel,
    TagComp,
    ProjectCard,
    PartnersCarousel,
    AccordionDudas
  },
  computed: {
    ...mapState(['projects', 'valueCards', 'showDescription', 'showButtons', 'showAllProjectsMobile']),
    ...mapGetters(['displayedProjectsMobile', 'shouldShowProjectsButton'])
  },
  methods: {
    ...mapActions({
      handleAnimationComplete: 'handleHomeAnimationComplete',
      showAllProjectsMobileAction: 'showAllProjectsMobile'
    })
  },
  mounted(){
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  },
}
</script>
