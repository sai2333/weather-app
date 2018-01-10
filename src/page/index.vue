<template>
	<div class="indexBox">
		<div class="title">
				<div class="citys">
					<span class="positioning iconfont icon-dingwei" v-if="userIp"></span>
					<span class="city">{{ day.city }}</span>
				</div>
				<router-link to="/formsearch">
					<span class="right more iconfont icon-gongneng"></span>
				</router-link>
				<button class="position" @click='position'>定位</button>
		</div>
		<div class="weaConent">
				<span class="weather">{{ day.weather }}</span>
				<p class="temp">{{ day.temp + '°' }}</p>
				<!-- 风和湿度 -->
				<div class="windAndHumid">
					<div class="wind">
						<span class="iconfont icon-flag"></span>
						<span class="winds">{{ day.winddirect + day.windpower}}</span>
					</div>
					<div class="humid">
						<span class="iconfont icon-water-drop"></span>
						<span class="humidity">{{ day.humidity + '%'  }}</span>
					</div>
				</div>
				<!-- 空气质量 -->
				<div class="air">
					<span class="iconfont icon-leaf"></span>
					<span class="aqi">{{ day.aqi.aqi + ' ' + day.aqi.quality }}</span>
				</div>
		</div>
		<scroll></scroll>
		<div class="future-weather">
			<router-link to="/content" class="future" >
			未来7天预报
			<!-- <img src="../assets/icon/功能.svg" alt="功能">
			 -->
			 <span class="iconfont icon-toLeft"></span>
			</router-link>
		</div>
		<life></life>
		<div class="copyright">
			<span class="iconfont icon-ali"></span>
			<p>阿里云天气 技术支持</p>		
		</div>
	</div>
</template>
<script>
	// require('../assets/fontcss/iconfont.css');
	import Life from '../components/life'
	import Scroll from '../components/scroll'
	import { mapState } from 'vuex'
	export default{
		data() {
			return {
				result: {},
				tems: [],
				dailys: []
			}
		},
		computed: {
			day() {
				return this.$store.state.weather
			},
			dayCity() {
				return this.$store.state.weather.city
			},
			userIp() {
				return this.$store.state.userip
			}
		},
		created (){
		},
		methods: {
			//刷新界面，重新ip请求
			position() {
				 location.reload();
				// this.$store.dispatch('get_weather');
			}
		},
		components: {
			Scroll,
			Life
		}
	}
</script>
<style>
	@import "../assets/css/index";
</style>