import { createApp } from 'vue'
import mitt from 'mitt'

window.eventBus = mitt()

import App from './App.vue'
import router from './router'

createApp(App)
	.use(router)
	.mount('#app')
