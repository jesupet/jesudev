<template>
  <nav class="navbar navbar-jesudev" aria-label="Navegación principal">
    <div class="container-fluid">
      <!-- Hamburguesa: izquierda en desktop, derecha en mobile (un solo toggler) -->
      <button
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
        <a href="#contacto" class="btn btn-primary">Escríbeme</a>
      </div>

      <div class="collapse navbar-collapse" id="navbarJesudev">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#sobre-mi">Sobre mí</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#servicios">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#metodologia">Metodología</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#proyectos">Proyectos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#faqs">Faqs</a>
          </li>
        </ul>
        <!-- Botón "Escribeme" dentro del menú en mobile -->
        <div class="nav-cta-mobile d-lg-none">
          <ButtonComp 
            :btnColor="'btn-primary'" 
            :buttonText="'Escríbeme'"
            :linkBtn="'#contacto'"
          />
        </div>
        
      </div>
    </div>
  </nav>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue'

export default {
  name: 'NavBar',
  components: {
    ButtonComp
  },
}
</script>