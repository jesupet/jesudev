<template>
  <div class="accordion" id="accordionExample">
    <div
      v-for="item in faqAccordionItems"
      :key="item.id"
      class="accordion-item"
    >
      <h4 class="accordion-header">
        <button
          :class="['accordion-button', { collapsed: activeItem !== item.id }]"
          type="button"
          @click="toggleItem(item.id)"
          :aria-expanded="activeItem === item.id"
          :aria-controls="item.collapseId"
        >
          <span class="p-16">{{ item.question }}</span>
        </button>
      </h4>
      <div
        :id="item.collapseId"
        :class="['accordion-collapse', 'collapse', { show: activeItem === item.id }]"
      >
        <div class="accordion-body text-start">
          <p class="p-14 white">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AccordionDudas',
  data() {
    return {
      activeItem: 0
    }
  },
  computed: {
    ...mapGetters(['faqAccordionItems'])
  },
  methods: {
    toggleItem(index) {
      // Si se hace clic en el item activo, lo cierra; si no, abre el nuevo
      this.activeItem = this.activeItem === index ? null : index
    }
  }
}
</script>

