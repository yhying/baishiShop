export default {
	state: {
		addressList: [{
				name: "皮皮爽",
				tel: "18662785566",
				cityName: "湖北省武汉市江夏区",
				details: "光谷大道118号",
				isDefault: false
			},
			{
				name: "小老弟",
				tel: "17725285536",
				cityName: "湖北省武汉市江夏区",
				details: "光谷大道118号",
				isDefault: true
			}
		]
	},
	getters: {

	},
	mutations: {
		// 添加新地址
		addAddress(state, obj) {
			state.addressList.unshift(obj)
		},
		EditAddress(state,{index,item}){
			state.addressList[index]=item
		}
	},
	actions:{
		addAddressFn({
			commit,
			state
		},payload) {
			commit("addAddress", payload)
		},
		// 修改地址
		EditAddressFn({
			commit,
			state
		},payload) {
			commit("EditAddress", payload)
		}
	}
}
