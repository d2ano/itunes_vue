<template>
	<span
		:style="{ backgroundColor: color }"
		@click="drop()"
		ref="colorSpan"
	></span>
</template>

<script>
export default {
	props: {
		color: {
			type: String
		}
	},
	methods: {
		drop() {
			let curentColor = this.$refs.colorSpan.style.backgroundColor

			this.$emit('change-color', curentColor)
		}
	},
	setup() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
span {
	width: 1rem;
	height: 1rem;
	display: inline-block;
	margin-right: 0.4rem;
	border-radius: 50%;
	border: 1px solid rgba(255, 255, 255, 0.6);
	cursor: pointer;
}
span:last-child {
	margin-right: 0;
}
</style>
