
let url = 'http://jisutqybmf.market.alicloudapi.com/weather/query?ip=';
let urlc = 'http://jisutqybmf.market.alicloudapi.com/weather/query?city=';
//引入axios
let axios = require('axios');

function apiAxios(ip,callback){
	url += ip;
	axios.get(url,{
		headers: {
			"Authorization": 'APPCODE 7ba9f4e6034249b2922a753760cdc013'
		}
	}).then( res => {
		// console.log(res.data) 
		callback(res)
	}).catch(function (error) {
		alert(erro)
	})
}

function cityAxios(city,callback){
	urlc += city;
	axios.get(urlc, {
		headers: {
			"Authorization": 'APPCODE 7ba9f4e6034249b2922a753760cdc013'
		}
	}).then(res => {
		callback(res)
	}).catch(function (error) {
		// console.log(error)
		alert("系统繁忙，请刷新后重试！")
		// cityAxios(city,callback);
	})
}
//vue模板中的调用接口
export default {
// 接口处理函数
 get: function(ip,callback){
 	 apiAxios(ip,callback);
 },
 getc: function(city,callback){
	 cityAxios(city,callback);
 }
}