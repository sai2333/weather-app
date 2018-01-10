<template>
<div class="formBox">
    <div class="formNav">
        <router-link to="/" class="goHome">
            <span class="iconfont icon-fanhui"></span>
        </router-link>
        <div class="user">
            <form>
            <!-- 搜索图标 -->
            <span class="iconfont icon-sousuo"></span>
            <input type="text" placeholder="请输入您要查询的城市" v-model="forCity" @keyup.enter="forWeather" class="bar">
            </form>
        </div>
    </div>
    <div class="form">
        <div class="like">
            <!-- 爱心图标 -->
            <span class="iconfont icon-xihuan"></span>
            <p class="guess">猜你想找</p>
        </div>
        <div class="likeCity">
            <ul class="hotCity">
                <li v-for="hotCity in hotCitys">
                    <p @click="button" :cityname=hotCity.name>{{ hotCity.name }}</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="clear"></div>
</div>
</template>
<script>
export default {
    data() {
        return {
            forCity: '',
            cityname: ''
        }
    },
    computed: {
        hotCitys() {
            return this.$store.state.hotcitys;
        }
    },
    methods: {
        //获取当前元素文本，绑定属性。然后城市请求，返回主界面
        button(e) {
            // alert(e.target.getAttribute('cityname'));
            let text = e.target.getAttribute('cityname');
            this.inquireCity(text);
            let cityUrl = this.cityCode(text);
            this.$store.state.user = cityUrl;
            this.$store.dispatch('city_weather');
            this.$router.push('/');
        },
        //转换成可用的代码
        cityCode(str) {
            return encodeURIComponent(str);
        },
        //查询是否是用户的地址
        inquireCity(city) {
            if(this.$store.state.ip.indexOf(city) === -1 ){
                this.$store.commit('reverse');
                // alert('位置改变了！');
            }
        },
        //请求用户天气
        forWeather() {
            this.$store.state.usercity = this.forCity;
            this.inquireCity(this.forCity);
            let cityUrl = this.cityCode(this.forCity);
            this.$store.state.user = cityUrl;
            console.log(this.$store.state.user);
            this.forCity = '';
            this.$store.dispatch('city_weather');
            this.$router.push('/');
        }
    }
}
</script>
<style>
    @import "../assets/css/search";
</style>


