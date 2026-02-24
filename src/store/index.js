import { createStore } from 'vuex'
import projects from './projects.json'

/**
 * Carga automática de logotipos desde assets/logos/partners.
 * Al recompilar el proyecto con nuevos archivos en esa carpeta, se actualizan aquí.
 */
const partnerContext = require.context(
  '@/assets/logos/partners',
  false,
  /\.(png|jpe?g|svg|webp)$/i
)

function loadPartnerLogos() {
  return partnerContext.keys().map((key) => ({
    src: partnerContext(key),
    alt: key.replace(/^\.\//, '').replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
  }))
}

/**
 * Mapeo servicio -> clase de tag.
 */
const SERVICE_TO_TAG_COLOR = {
  'identidad visual': 'pink-tag',
  'desarrollo sitio web': 'blue-tag',
  'diseño sitio web': 'blue-tag',
  'otros diseños': 'green-tag',
  'branding': 'pink-tag',
  'rebranding': 'pink-tag'
}

export default createStore({
  state: {
    projects: projects,
    partnerLogos: loadPartnerLogos(),
    serviceToTagColor: SERVICE_TO_TAG_COLOR
  },
  getters: {
    getTagColorForService: (state) => (serviceName) => {
      if (!serviceName || typeof serviceName !== 'string') return 'pink-tag'
      const normalized = serviceName.trim().toLowerCase()
      return state.serviceToTagColor[normalized] || 'pink-tag'
    },
    /** Logos de partners agrupados en chunks de N para el carrusel */
    partnerLogoChunks: (state) => {
      const logos = state.partnerLogos
      const perSlide = 4
      const chunks = []
      for (let i = 0; i < logos.length; i += perSlide) {
        chunks.push(logos.slice(i, i + perSlide))
      }
      return chunks.length ? chunks : (logos.length ? [logos] : [])
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
