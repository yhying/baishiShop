const carlist = JSON.parse(localStorage.getItem('carlist') || '[]')
export default {
	state: {
		carlist: carlist,
		selectedList: []
	},
	getters: {
		totalCount(state) {
			let total = {
				pprice: 0,
				count: 0
			}
			state.carlist.forEach(item => {
				if (item.checked) {
					total.pprice += item.pprice * item.num
				}
			})
			total.count = state.carlist.filter(item =>item.checked).length
			return total
		}
	},
	mutations: {
		delete(state,getters) {
			if (getters.totalCount.count === 0) {
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
			// 查找之前购物车中是否已经存在商品
			let oldProduct = state.carlist.find(item => {
				return item.id === goods.id
			})
			if (oldProduct) {
				oldProduct.num += 1
			} else {
				state.carlist.push(goods)
			}
			localStorage.setItem('carlist', JSON.stringify(state.carlist))
		},
		clearShopCar(state){
			state.carlist=state.carlist.filter(item=>{
				return !item.checked
			})
			localStorage.setItem('carlist', JSON.stringify(state.carlist))
		}
	},
	actions: {
		deleteGoods({
			commit,
			getters
		}) {
			commit('delete',getters)
		}
	}


}
