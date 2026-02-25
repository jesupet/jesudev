<template>
  <nav class="navbar navbar-jesudev" aria-label="Navegación principal">
    <div class="container-fluid">
      <!-- Hamburguesa: izquierda en desktop, derecha en mobile (un solo toggler) -->
      <button
        ref="togglerRef"
        class="navbar-toggler nav-toggler-jesudev"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarJesudev"
        aria-controls="navbarJesudev"
        aria-expanded="false"
        aria-label="Abrir menú"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- Logo blanco centrado -->
      <a class="navbar-brand nav-brand-center" href="#"><img src="@/assets/logos/logo_white.svg" alt="Logo Jesudev" class="navbar-logo"></a>

      <!-- Botón "Escribeme" solo visible en desktop -->
      <div class="nav-desktop-cta d-none d-lg-block">
        <a href="#contacto" class="btn btn-primary" data-tally-open="vGNXR0" data-tally-hide-title="1">Escríbeme</a>
      </div>

      <div ref="collapseRef" class="collapse navbar-collapse" id="navbarJesudev">
        <div class="nav-panel-header">
          <button
            type="button"
            class="nav-close-btn"
            aria-label="Cerrar menú"
            @click="closeMenu"
          >
            &times;
          </button>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#sobre-mi" @click="closeMenu">Sobre mí</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#servicios" @click="closeMenu">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#metodologia" @click="closeMenu">Metodología</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#proyectos" @click="closeMenu">Proyectos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#faqs" @click="closeMenu">Faqs</a>
          </li>
        </ul>
        <!-- Botón "Escribeme" dentro del menú en mobile -->
        <div class="nav-cta-mobile d-lg-none">
          <ButtonComp 
            :btnColor="'btn-primary'" 
            :buttonText="'Escríbeme'"
            data-tally-open="vGNXR0" data-tally-hide-title="1"
          />
        </div>
        
      </div>
    </div>
  </nav>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue'
import Collapse from 'bootstrap/js/dist/collapse'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'NavBar',
  components: {
    ButtonComp,
  },
  computed: {
    ...mapState(['isNavMenuOpen']),
    ...mapGetters(['navMenuIsOpen'])
  },
  mounted() {
    const collapseEl = this.$refs.collapseRef
    if (!collapseEl) return

    this._onShown = () => {
      this.openNavMenu()
    }
    this._onHidden = () => {
      this.closeNavMenu()
    }

    collapseEl.addEventListener('shown.bs.collapse', this._onShown)
    collapseEl.addEventListener('hidden.bs.collapse', this._onHidden)
    document.addEventListener('click', this.handleOutsideClick)
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  },
  beforeUnmount() {
    const collapseEl = this.$refs.collapseRef
    if (collapseEl) {
      collapseEl.removeEventListener('shown.bs.collapse', this._onShown)
      collapseEl.removeEventListener('hidden.bs.collapse', this._onHidden)
    }
    document.removeEventListener('click', this.handleOutsideClick)
  },
  methods: {
    ...mapActions(['openNavMenu', 'closeNavMenu', 'toggleNavMenu']),
    closeMenu() {
      const collapseEl = this.$refs.collapseRef
      if (!collapseEl) return
      const collapse = Collapse.getOrCreateInstance(collapseEl, { toggle: false })
      collapse.hide()
      this.closeNavMenu()
    },
    handleOutsideClick(event) {
      if (!this.navMenuIsOpen) return

      const collapseEl = this.$refs.collapseRef
      const togglerEl = this.$refs.togglerRef
      const target = event.target

      if (!collapseEl || !togglerEl || !target) return
      if (collapseEl.contains(target) || togglerEl.contains(target)) return

      this.closeMenu()
    }
  }
}
</script>