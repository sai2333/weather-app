<template>
  <div class="lifeContent">
      <div class="lifeNavBox">
          <ul class="lifeNav">
              <li v-for="life in lifes ">
                  <router-link  :to="'/lifecontent/' + life.id">
                    <span class="iconfont forlife" :class="life.text"></span>
                    <p class="iname">{{ strReplace(life.iname) }}</p>
                    <p class="ivalue">{{ life.ivalue }}</p>
                  </router-link>
                  <router-view></router-view>
              </li>
              <li class="lifeShop">
                  <span class="iconfont icon-you"></span>
                  <p>生活指数</p>
                  <p>精品购</p>
              </li>   
          </ul>
      </div>
      <div class="clear"></div>
  </div>
</template>
<script>
export default {
  computed: {
      lifes() {
        //   console.log(this.$store.state.lifes);
          return this.$store.state.lifes;
      }
  },
  methods: {
      strReplace: function(str){
			return str.replace(/空气污染扩散指数/,'污染指数')
        },
      //匹配返回需要的对象
      lifeFind: function(obj){
          let id = this.$route.params.id;
          return obj.id === id;
      }
  },
  created() {
      //绑定需要class和id
    //   this.$store.commit('getImg');
  }
}
</script>
<style>
    @import "../assets/css/life";
</style>

