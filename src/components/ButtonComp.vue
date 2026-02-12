<template>
    <button :class="btnColor  + ` btn`">
      <a :href="linkBtn" target="_blank" v-if="!displayLink">{{buttonText}}</a>
      <router-link :to="hashTag" v-else>{{ buttonText }}</router-link>
    </button>
  </template>
  
  <script>
  export default {
    name: 'ButtonComp',
    props: {
      buttonText : {
        type: String,
        default: 'Learn More'
      },
      btnColor : {
        type: String,
        default: 'btn-primary'
      },
      linkBtn : {
        type: String,
        default: '/'
      },
      hashTag: {
        type: String,
        default: '#'
      },
      displayLink: {
        type: Boolean,
        default: false,
      }
    }
   
  }
  </script>