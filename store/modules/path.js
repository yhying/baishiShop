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
		pathDefault(state) {
		return	state.addressList.filter(item => {
				return item.isDefault
			})
		}
	},
	mutations: {
		// 添加新地址
		addAddress(state, obj) {
			state.addressList.unshift(obj)
		},
		// 修改地址
		EditAddress(state, {
			index,
			item
		}) {
			state.addressList[index] = item
		},
		// 设置默认地址
		attrAddress(state) {
			state.addressList.map(item => {
				return item.isDefault = false
			})
		}
	},
	actions: {
		addAddressFn({
			commit,
			state
		}, payload) {
			if (payload.isDefault) {
				commit('attrAddress')
			}
			commit("addAddress", payload)
		},
		// 修改地址
		EditAddressFn({
			commit,
			state
		}, payload) {
			if (payload.item.isDefault) {
				commit('attrAddress')
			}
			commit("EditAddress", payload)
		}
	}
}
