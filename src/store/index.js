import { createStore } from 'vuex'
import projects from './projects.json'

/**
 * Mapeo servicio -> clase de tag.
 * Identidad visual -> pink | Desarrollo/Diseño sitio web -> blue
 * Otros diseños -> green | Branding/Rebranding -> pink
 */


export default createStore({
  state: {
    projects: projects,
    serviceToTagColor: {
      'identidad visual': 'pink-tag',
      'desarrollo sitio web': 'blue-tag',
      'diseño sitio web': 'blue-tag',
      'otros diseños': 'green-tag',
      'branding': 'pink-tag',
      'rebranding': 'pink-tag'
    }
  },
  getters: {
    getTagColorForService: (state) => (serviceName) => {
      if (!serviceName || typeof serviceName !== 'string') return 'pink-tag'
      const normalized = serviceName.trim().toLowerCase()
      return state.serviceToTagColor[normalized] || 'pink-tag'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
