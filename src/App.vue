<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from '@/layout/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

