<template>
  <div id="app">
    <router-view></router-view>
    <remote-js src="http://pv.sohu.com/cityjson?ie=utf-8"></remote-js>
  </div>
</template>

<script>
export default {
    created (){
      //ip测试
      console.log(returnCitySN);
      this.$store.state.ip = returnCitySN.cname;
      //ip请求
      this.$store.dispatch('get_weather');
    },
    //生成ip组件
    components: {
      'remote-js': {
        render(createElement) {
          return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
        },
        props: {
          src: { type: String, required: true },
        }
      }
    },
    //路由id有变化的时候提交当前id的对象。
    computed: {
      lifes() {
          return this.$store.state.lifes;
      }
    },
    methods: {
      lifeFind: function(obj){
          let id = this.$route.params.id;
          return obj.id === id;
      },
      getId() {
        let lifeObj = this.lifes.find(this.lifeFind);
        console.log(lifeObj);
        this.$store.commit('getLife',lifeObj);
      }
    },
    //监听life组件的id
    watch: {
      '$route': 'getId'
    }
}
</script>

<style>
  @import "./assets/css/init.css"
</style>
