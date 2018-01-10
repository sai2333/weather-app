<template>
		<div class="seven">
		<div class="sevenContent">
			<ul class="seven-content">
				<li v-for="daily in dailys">
					<p class="week">{{ strReplace(daily.week) + ' ' + slices(daily.date) }}</p>
					<div class="temp">
						<img :src="$utils.replImg(daily.day.img)">
						<span class="smallFont">{{ daily.day.weather }}</span>
					</div>
					<p class="temper">{{ addSym(daily.day.temphigh) + ' ~ ' + addSym(daily.night.templow) }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		computed: {
			dailys() {
				return this.$store.state.daily;
			}
		},
		methods: {
			slices: function(str){
				return str.slice(5)
			},
			strReplace: function(str){
				return str.replace(/星期/,'周')
			},
			addSym: function(str){
				return str += '°'
			}
		}
	}
</script>
<style>
</style>