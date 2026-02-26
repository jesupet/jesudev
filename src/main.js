import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'aos/dist/aos.css'
import './assets/css/main.css';

createApp(App).use(store).use(router).mount('#app')

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 80
})

router.afterEach(() => {
  AOS.refresh()
})
