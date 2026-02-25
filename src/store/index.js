import { createStore } from 'vuex'
import projects from './projects.json'
import faqs from './faqs.json'

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
  'desarrollo web': 'blue-tag',
  'diseño web ux ui': 'green-tag',
  'otros diseños': 'green-tag',
  'branding': 'pink-tag',
  'rebranding': 'pink-tag'
}

export default createStore({
  state: {
    projects: projects,
    faqs: faqs,
    partnerLogos: loadPartnerLogos(),
    serviceToTagColor: SERVICE_TO_TAG_COLOR,
    isNavMenuOpen: false
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
    },
    /**
     * Estructura lista para renderizar el accordion dinámicamente.
     * Si se agrega un nuevo FAQ en faqs.json, aparece automáticamente.
     */
    faqAccordionItems: (state) => {
      return state.faqs.map((item, index) => ({
        id: index,
        collapseId: `faq-collapse-${index}`,
        question: item.question,
        answer: item.answer
      }))
    },
    navMenuIsOpen: (state) => state.isNavMenuOpen
  },
  mutations: {
    SET_NAV_MENU_OPEN(state, isOpen) {
      state.isNavMenuOpen = isOpen
    }
  },
  actions: {
    openNavMenu({ commit }) {
      commit('SET_NAV_MENU_OPEN', true)
    },
    closeNavMenu({ commit }) {
      commit('SET_NAV_MENU_OPEN', false)
    },
    toggleNavMenu({ state, commit }) {
      commit('SET_NAV_MENU_OPEN', !state.isNavMenuOpen)
    }
  },
  modules: {
  }
})
