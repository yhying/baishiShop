import store from '@/store/index.js'
export default {
	common: {
		baseUrl: 'http://192.168.1.10:3000/api',
		data: {},
		header: {
			'Content-Type': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		method: "GET",
		dataType: "json"
	},
	request(options = {}) {
		// uni.showLoading({
		//     title: '加载中'
		// });
		options.url = this.common.baseUrl + options.url;
		options.data = options.data || this.common.data;
		options.header = options.header || this.common.header;
		options.method = options.method || this.common.method;
		options.dataType = options.dataType || this.common.dataType;
		// 判断用户是否登录，token
		if (options.header.token) {
			options.header.token = store.state.user.token
			if (!options.header.token) {
				uni.showToast({
					title: "请先登录",
					icon: 'none'
				})
				 setTimeout(() => {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}, 1000)
				return;
			}
		}
		return new Promise((res, rej) => {
			uni.request({
				...options,
				success: (result) => {
					if (result.statusCode != 200) {
						return rej();
					}
					// setTimeout(function () {
					//     uni.hideLoading();
					// }, 1000);
					let data = result.data.data;
					res(data);
				}
			})
		})
	}

}
