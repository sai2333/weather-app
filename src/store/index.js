import Vuex from 'vuex'
import Vue from 'vue'
import api from '../api/index'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        weather: {},//全部天气数据
        hourly: [],//每小时
        daily: [],//7天
        lifes: [],//生活指数
        life: {},//单个生活指数
        hotcitys: [
            { name: '上海市' }, { name: '北京市' }, { name: '杭州市' }, { name: '南京市' }, { name: '苏州市' }, { name: '深圳市' },
             { name: '成都市' }, { name: '重庆市' }, { name: '天津市' }, { name: '武汉市' }, { name: '西安市' }, { name: '广州市' }
        ],
        ip:'',//用户的ip地址
        userip: true,//取决用户位置的真假
        user: '',//用户搜索的位置
        usercity: ''//用户输入的位置
    },
    mutations: {
        //把所有有关天气的数据传state
        getWeather(state, weather) {
            state.weather = weather;
            state.hourly = state.weather.hourly;
            state.daily = state.weather.daily;
            state.lifes = state.weather.index;
            //给life组件的li元素绑定特定的class，还有id
            for (let i = 0; i < state.lifes.length; i++) {
                if (i === 0) {
                    state.lifes[i].text = 'icon-kongtiao';
                    state.lifes[i].id = '389273974298';
                } else if (i === 1) {
                    state.lifes[i].text = 'icon-sports';
                    state.lifes[i].id = '109328758321';
                } else if (i === 2) {
                    state.lifes[i].text = 'icon-ziwaixian';
                    state.lifes[i].id = '091219384742';
                } else if (i === 3) {
                    state.lifes[i].text = 'icon-sick';
                    state.lifes[i].id = '019217493923';
                } else if (i === 4) {
                    state.lifes[i].text = 'icon-xiche';
                    state.lifes[i].id = '874928321012';
                } else if (i === 5) {
                    state.lifes[i].text = 'icon-kongqizhiyiban';
                    state.lifes[i].id = '495292849201';
                } else if (i === 6) {
                    state.lifes[i].text = 'icon-yifu';
                    state.lifes[i].id = '193843681719';
                }
            }
            console.log(state.lifes);
        },
        //监听用户点击哪个li元素，把这个li元素的数据传个state！
        getLife(state,lifeobj) {
            state.life = lifeobj;
        },
        //改变定位的值
        reverse(state) {
            state.userip = false;
        }
        //给life组件的li元素绑定特定的class，还有id
        // getImg(state) {
        //     for(let i =0;i < state.lifes.length;i ++){
        //         if(i === 0){
        //             state.lifes[i].text = 'icon-kongtiao';
        //             state.lifes[i].id = '389273974298';
        //         }else if(i === 1){
        //             state.lifes[i].text = 'icon-sports';
        //             state.lifes[i].id = '109328758321';
        //         }else if(i === 2){
        //             state.lifes[i].text = 'icon-ziwaixian';
        //             state.lifes[i].id = '091219384742';
        //         }else if(i === 3){
        //             state.lifes[i].text = 'icon-sick';
        //             state.lifes[i].id = '019217493923';
        //         }else if(i === 4){
        //             state.lifes[i].text = 'icon-xiche';
        //             state.lifes[i].id = '874928321012';
        //         }else if(i === 5){
        //             state.lifes[i].text = 'icon-kongqizhiyiban';
        //             state.lifes[i].id = '495292849201';
        //         }else if(i === 6){
        //             state.lifes[i].text = 'icon-yifu';
        //             state.lifes[i].id = '193843681719';
        //         }
        //     }
        // }
        // getCount(state) {
        //   return store.state.count
        // }
    },
    actions: {
        //ip请求
        get_weather(store) {
            api.get(returnCitySN.cip, res => {
                console.log(res.data.result);
                store.commit('getWeather', res.data.result);
            })
        },
        //城市请求
        city_weather(store) {
            api.getc(store.state.user, res => {
                // console.log('getc成功：' + res.data.result);
                store.commit('getWeather', res.data.result);
            })
        }
        // get({ commit }) {
        //   commit('getCount')
        // }
    }
})