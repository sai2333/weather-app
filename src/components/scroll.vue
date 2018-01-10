<template>
	<div class="wrapper" ref="wrapper">
		<ul class="content">
			<li v-for="tem in hourly">
				<p>{{ tem.time}}</p>
				<img :src="$utils.replImg(tem.img)">
				<p class="timeWeather">{{ tem.weather }}</p>
				<p>{{ tem.temp + '°' }}</p>
			</li>
		</ul>
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	export default {
		mounted() {
			this.$nextTick(() =>{
				this.scroll = new BScroll(this.$refs.wrapper, {
					scrollX:  true,
					scrollY: false,
					eventPassthrough: 'vertical'
				})
			})
		},
		computed: {
			hourly() {
				console.log(this.$store.state.hourly)
				return this.$store.state.hourly;		
			}
		},
		// props: ['tems'],
		methods: {
			
		}
	}
</script>
<style>
	@import "../assets/css/scroll";
</style>