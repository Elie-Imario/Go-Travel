import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import goTravelkits from './plugins/go-travel-kit'

createApp(App).use(router).use(goTravelkits).mount('#app')
