<template>
  <div class="box">
      <div class="nav">
          <router-link to="/" class="goHome">
            <span class="iconfont icon-fanhui"></span>
            {{ life.iname }}
          </router-link>
      </div>
      <div class="details">
          <div class="conBox">
            <p class="ivalue">{{ life.ivalue }}</p>
            <p class="idetail">{{ life.detail }}</p>
          </div>
          <div class="fright">
              <img :src="$tool.lifesImg(life.iname)">
          </div>
      </div>  
  </div>
</template>
<script>
export default {
  computed: {
      life() {
          return this.$store.state.life;
      }
  },
  created() {
      console.log(this.life);
  }
}
</script>
<style>
    @import "../assets/css/lifecontent";
</style>

