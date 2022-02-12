<template>
	<article
		v-cloak
		class="tunes-song"
		:style="[
			color ? { backgroundColor: color } : { backgroundColor: song.color }
		]"
	>
		<div class="inside">
			<h2>{{ songify(song) }}</h2>

			<div class="player-wrapper">
				<img v-if="song.cover" :src="song.cover" alt="cover image" />
				<audio controls :src="song.audioFile" />
			</div>
		</div>

		<footer class="meta">
			{{ shorten(song.album) }}
			<div class="colorContainer">
				<tunes-color
					v-for="color in colors"
					:key="color.id"
					:color="color"
					@changeColor="changeColor($event)"
				/>
			</div>
		</footer>
	</article>
</template>

<script>
import TunesColor from '@/components/tunes/TunesColor.vue'
import { truncate } from 'lodash-es'

export default {
	components: {
		TunesColor
	},
	props: {
		song: {
			type: Object
		}
	},
	data() {
		return {
			colors: ['#e4405f', '#cc73e1', '#3cba54', '#2e294e', '#262626'],
			color: ''
		}
	},
	methods: {
		songify(song) {
			return song.artist + ' - ' + song.name
		},
		shorten(str) {
			return truncate(str, { length: 55 })
		},
		changeColor(event) {
			this.color = event
		}
	}
}
</script>

<style lang="scss" scoped>
.colorContainer {
	text-align: left;
	margin-top: 0.3rem;
}
.tunes-song {
	color: $color;
	text-align: left;

	max-width: 24em;
	margin: 0 auto 2em;
	position: relative;

	box-sizing: border-box;
	background-color: #262626;
	border-radius: 0.75em;

	transition: all 0.5s;
}

.inside {
	padding: 1.35em 1.75em 1.75em;
}

h2 {
	font-size: inherit;
	line-height: 1.5em;
	margin: 0;
}

.player-wrapper {
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 1.5em;
}

img {
	width: 5em;
	border: 3px solid white;
	border-radius: 0.5em;
}

audio {
	outline: none;
	max-width: 14em;
}

audio::-webkit-media-controls-panel {
	background: #fff;
}

.meta {
	font-size: 0.75em;
	font-weight: 800;
	line-height: 1.5;
	color: rgba(255, 255, 255, 0.6);

	padding: 1.5em 2.25em;
	background: rgba(0, 0, 0, 0.2);
	border-bottom-left-radius: 1em;
	border-bottom-right-radius: 1em;
}

// animation
[v-cloak] {
	display: none;
}

// responsive
@media screen and (max-width: 520px) {
	.player-wrapper {
		audio {
			margin-top: 1.5em;
		}

		flex-direction: column;
	}
}
</style>
