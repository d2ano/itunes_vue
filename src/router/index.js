import { createRouter, createWebHistory } from 'vue-router'

// views
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tunes from '../views/Tunes.vue'

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/tunes',
		component: Tunes
	},
	{
		path: '/about',
		component: About
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
