<template>
    <div class="card-proyecto text-start">
      <a :href="project.link" target="_blank"><img :src="require(`@/assets/img/${project.image}`)" :alt="project.companyName" class="img-fluid img-proyecto"></a>
      <h4>{{ project.companyName }}</h4>
      <p class="p-12">{{ project.date }}</p>
      <div class="d-flex flex-wrap tag-cont">
        <TagComp 
          :key="index"
          :tagColor="getTagColorForService(service)"
          :tagText="service"
          v-for="(service, index) in project.services"
          class="mb-0"
        />
      </div>
      <p class="p-14 text-justify pt-3">
        {{ project.description }}
      </p>
      <p class="colaboracion p-12 italic pt-4" v-if="project.colaboration">En colaboración con:<br><span class="uppercase">{{project.colaboration}}</span></p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TagComp from '@/components/TagComp.vue'

export default {
  name: 'ProjectCard',
  components: {
    TagComp
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getTagColorForService'])
  }
}
</script>