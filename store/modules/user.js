export default {
	state:{
		// 登录状态
		loginStatus:false,
		token:null,
		userInfo:{}
		
	},
	mutations:{
		// 一旦进入app，读取用户登录信息，持久化存储
		initUser(state){
			let userInfo=uni.getStorageSync('userInfo')
			if(userInfo){
				userInfo=JSON.parse(userInfo)
				state.userInfo=userInfo
				state.loginStatus=true,
				state.token=userInfo.token
			}
		},
		// 登录后保存数据
		login(state,payload){
			state.userInfo=payload
			state.loginStatus=true,
			state.token=payload.token
			uni.setStorageSync('userInfo',JSON.stringify(payload))
		},
		// 退出登录
		loginOut(state){
			state.loginStatus=false
			state.userInfo={}
			state.token=null
			uni.removeStorageSync('userInfo');
		}
	}
}