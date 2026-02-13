<template>
    <div class="card">
        <img src="@/assets/curves/curve_card.svg" alt="curva negra" class="curve-card">
        <div class="number">
            <p class="subtitle">{{ number }}</p>
        </div>
        <h4>{{ title }}</h4>
        <p class="p-16 black">
            {{ description }}
        </p>
    </div>
</template>

<script>
export default {
  name: 'ValueCard',
  props: {
    number: {
      type: String,
      default: '1'
    },
    title: {
      type: String,
      default: 'Asesoría Experta'
    },
    description: {
      type: String,
      default: 'Escucho tus necesidades y elaboramos un plan para elevar tu marca, Mi rol es traducir lo técnico a lo simple y entregar soluciones que hagan sentido a tu negocio.'
    }
  }
 
}
</script>