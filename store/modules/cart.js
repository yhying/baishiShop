const carlist=JSON.parse(localStorage.getItem('carlist') || '[]')
export default {
	state: {
		carlist: carlist,
		selectedList: []
	},
	getters: {
		checkdAll(state) {
			return state.carlist.length === state.selectedList.length
		},
		totalCount(state) {
			let total = {
				pprice: 0,
				count: 0
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
		},
		delete(state) {
			if (state.selectedList.length === 0) {
				uni.showToast({
					title: '请选择需要删除的商品',
					icon: 'none'
				})
				return;
			}
			state.carlist = state.carlist.filter(item => {
				return !item.checked
			})
			uni.showToast({
				title: '删除成功',
				icon: 'none'
			})
		},
		ShopCar(state, goods) {
			state.carlist.push(goods)
            localStorage.setItem('carlist', JSON.stringify(state.carlist))
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
		},
		deleteGoods({
			commit,
			state
		}) {
			commit('delete')
			commit('uncheckAll')
		}
	}


}
