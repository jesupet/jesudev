<template>
  <div class="values-carousel">
    <div class="values-carousel-track">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="values-carousel-item"
      >
        <ValueCard
          :number="card.number"
          :title="card.title"
          :description="card.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ValueCard from '@/components/ValueCard.vue'

export default {
  name: 'ValueCardsCarousel',
  components: {
    ValueCard
  },
  props: {
    cards: {
      type: Array,
      default: () => []
    }
  }
}
</script>
