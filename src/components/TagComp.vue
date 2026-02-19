<template>
    <div :class="tagColor + ` tag`">
      <p class="p-12">{{ tagText }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TagComp',
    props: {
      tagText : {
        type: String,
        default: 'Desasarrollo web'
      },
      tagColor : {
        type: String,
        default: 'pink-tag'
      },
    }
   
  }
  </script>