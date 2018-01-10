<template>
	<div class="contentPage">
		<div class="nav">
			<router-link to="/" class="goHome">
			<span class="iconfont icon-fanhui"></span>
			未来7天天气</router-link>
		</div>
		<seven-day></seven-day>
	</div>
</template>
<script>
	import SevenDay from '../components/sevenDay'
	export default {
		components: { SevenDay }
	}
</script>
<style>
	@import "../assets/css/content";
</style>