<template>
	<section class="home">
		<img alt="Vue logo" src="../assets/vuelogo.png" />

		<hello-world msg="Hot Vue.js App" />
	</section>
</template>

<script>
import HelloWorld from '@/components/home/HelloWorld.vue'

// console.log(Vibrant)

export default {
	name: 'home',
	components: {
		HelloWorld
	}
}
</script>

<style scoped lang="scss">
img {
	width: 45%;
}
</style>
