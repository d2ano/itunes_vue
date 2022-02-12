<template>
	<ul class="tunes-list" v-cloak>
		<li>
			<transition-group name="fade">
				<tunes-song
					v-for="song in colorSongs"
					:key="song.id"
					:song="song"
					v-cloak
				/>
			</transition-group>
		</li>
	</ul>
	<tunes-song-more v-show="this.songs.length >= 1" @click="addDataMore()" />
</template>

<script>
import * as Vibrant from 'node-vibrant'
import TunesSong from '@/components/tunes/TunesSong.vue'
import TunesSongMore from '@/components/tunes/TunesSongMore.vue'

export default {
	components: {
		TunesSong,
		TunesSongMore
	},
	data() {
		return {
			songs: [],
			otherSongs: [],
			loadSongs: 2
		}
	},
	methods: {
		addData(data) {
			this.songs = data.slice(0, this.loadSongs)
			this.otherSongs = data.slice(this.loadSongs, data.length)
		},
		addDataMore() {
			if (this.otherSongs) {
				this.songs = this.songs.concat(this.otherSongs.slice(0, this.loadSongs))
				this.otherSongs = this.otherSongs.slice(
					this.loadSongs,
					this.otherSongs.length
				)
			}
		},
		colorizuj(pesnicka) {
			if (pesnicka.length > 0) {
				pesnicka.forEach(element => {
					Vibrant.from(element.cover)
						.getPalette()
						.then(palette => (element.color = palette.Vibrant.getHex()))
				})

				return pesnicka
			}
		}
	},
	mounted() {
		window.eventBus.on('new-songs-arrived', data => this.addData(data))
	},
	computed: {
		colorSongs() {
			// if (this.songs.length > 0) {
			// 	this.songs.forEach(element => {
			// 		Vibrant.from(element.cover)
			// 		.getPalette()
			// 		.then((palette) => element.color = palette.Vibrant.getHex())
			// 	});
			// 	return this.songs
			// }
			return this.colorizuj(this.songs)
		}
	}
}
</script>

<style scoped>
[v-cloak] {
	display: none;
}
ul {
	margin-top: 3em;
	padding-left: 0;
	list-style: none;
}

.fade-enter-active {
	transition: all 0.3s ease;
}

.fade-enter-from {
	transform: scale(0.9);
}
</style>
