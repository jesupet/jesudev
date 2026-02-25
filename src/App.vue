<template>
  <WhatsAppBtn class="whatsapp fixed-button"/>
  <NavBar />
  <router-view />
  <FooterComp />
</template>

<script>
import NavBar from '@/layout/NavBar.vue'
import FooterComp from '@/layout/FooterComp.vue'
import WhatsAppBtn from './components/WhatsAppBtn.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp,
    WhatsAppBtn
  }
}
</script>

