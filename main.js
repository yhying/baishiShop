import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import store from 'store/index.js'
Vue.prototype.$store = store;
App.mpType = 'app'

Vue.prototype.LoginInterCeptor = (options) => {
	if (!store.state.user.loginStatus) {
		uni.showToast({
			title: '请先登录',
			icon: 'none'
		})
	 return	setTimeout(()=>{
			uni.hideToast()
			return uni.navigateTo({
				url: '/pages/login/login'
			})
		},2000)
	}
	uni.navigateTo(options)
}

const app = new Vue({
	...App,
	store
})
app.$mount()
