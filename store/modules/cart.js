export default {
	state: {
		carlist: [{
				checked: false,
				id: 1,
				name: "大姨绒毛大款2020年爆款疯狂GG008",
				color: "颜色：粉色",
				imgUrl: "../../static/img/Children2.jpg",
				pprice: "27",
				num: 1
			},
			{
				checked: false,
				id: 2,
				name: "大姨绒毛大款2020年爆款疯狂GG008",
				color: "颜色：粉色",
				imgUrl: "../../static/img/Children2.jpg",
				pprice: "27",
				num: 1
			}
		],
		selectedList: []
	},
	getters: {
		checkdAll(state) {
			return state.carlist.length === state.selectedList.length
		},
		totalCount(state) {
			let total = {
				pprice:0,
				count:0
			}
			state.carlist.forEach(item => {
				if (state.selectedList.indexOf(item.id) > -1) {
					total.pprice += item.pprice * item.num
					total.count = state.selectedList.length
				}
			})
			return total
		}
	},
	mutations: {
		checkAll(state) {
			state.selectedList = state.carlist.map(item => {
				item.checked = true
				return item.id
			})
		},
		uncheckAll(state) {
			state.carlist.forEach(item => {
				item.checked = false;
			})
			state.selectedList = [];
		},
		ClickRadio(state, item) {
			let id = item.id
			let i = state.selectedList.indexOf(id)
			if (i > -1) {
				item.checked = false
				state.selectedList.splice(i, 1)
			} else {
				item.checked = true
				state.selectedList.push(id)
			}
		}
	},
	actions: {
		checkAllFn({
			commit,
			getters
		}) {
			getters.checkdAll ? commit('uncheckAll') : commit('checkAll')
		},
		clickRadio({
			commit,
			state
		}, payload) {
			commit('ClickRadio', payload)
		}
	}


}
