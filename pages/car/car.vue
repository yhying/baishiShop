<template>
	<view class="content">
		<template v-if="carlist.length>0">
			<!--自定义导航栏-->
			<uniNavBar title='购物车' :right-text='  isNavBar?"完成":"编辑"   ' fixed='true' status-bar='true' @clickRight='  isNavBar = !isNavBar  '></uniNavBar>
			<!--商品内容-->
			<view class='shop-list'>
				<view class='shop-item' v-for='(item,index) in carlist' :key='index'>
					<label class="radio" @tap="clickRadio(item)">
						<radio value="" color="#FF3333" :checked="item.checked" /><text></text>
					</label>
					<image class='shop-img' :src="item.imgUrl" mode=""></image>
					<view class='shop-text'>
						<view class='shop-name'>{{item.name}}</view>
						<view class='shop-color f-color'>{{item.color}}</view>
						<view class='shop-price'>
							<view>¥{{item.pprice}}</view>
							<view v-if="!isNavBar">*{{item.num}}</view>
							<view v-else>
								<UniNumberBox :min='1' :value="item.num" @change="changeBox($event,index)"></UniNumberBox>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!--底部-->
			<view class='shop-foot'>
				<label class="radio foot-radio" @tap="checkAllFn()">
					<radio value="" color='#FF3333' :checked="checkdAll" /><text>全选</text>
				</label>
				<template v-if="!isNavBar">
					<view class='foot-total'>
						<view class='foot-count'>合计：<text class='f-active-color'>¥{{totalCount.pprice}}</text></view>
						<view class='foot-num' @tap="confirmOrder()">结算({{totalCount.count}})</view>
					</view>
				</template>
				<template v-else>
					<view class='foot-total'>
						<view class='foot-count' style="background-color: #000000;color: #FFFFFF;">移入收藏夹</view>
						<view class='foot-num' @tap="deleteGoods()">删除</view>
					</view>
				</template>
			</view>
		</template>
		<template v-else>
			<uniNavBar title='购物车' fixed='true' status-bar='true'></uniNavBar>
			<view class='shop-else-list'>
				<text>囧～购物车还是空的～</text>
				<view class="shop-buy" @click="goSearch()">马上去逛逛</view>
			</view>
		</template>
		<TabBar currentpage="car"></TabBar>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni/uni-nav-bar/uni-nav-bar.vue'
	import TabBar from '@/components/common/TabBar.vue'
	import UniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
	import {
		mapState,
		mapActions,
		mapGetters,
		mapMutations
	} from 'vuex'
	export default {
		components: {
			uniNavBar,
			UniNumberBox,
			TabBar
		},
		data() {
			return {
				isNavBar: false,
			}
		},
		computed: {
			...mapGetters(['totalCount']),
			...mapState({
				carlist: state => state.cart.carlist,
				/*, 对象语法,映射 */
				selectedList: state => state.cart.selectedList
			}),
			// 判断全选
			checkdAll() {
				// return !(this.carlist.filter(item => !item.checked).length)
				return !this.carlist.find(item => !item.checked)
			}

		},
		onLoad() {},
		methods: {
			...mapActions(['deleteGoods']),
			...mapMutations(['clearShopCar']),
			// 跳转分类页面
			goSearch() {
				uni.redirectTo({
					url: '../category/category'
				})
			},
			changeBox(e, index) {
				this.carlist[index].num = e
			},
			confirmOrder() {
				if (this.totalCount.count > 0) {
					uni.navigateTo({
						url: '../confrim-order/confrim-order'
					})
					this.clearShopCar()
					return;
				}
				uni.showToast({
					title: "请选择要购买的商品",
					icon: 'none'
				})
			},
			// 点击单选
			clickRadio(item) {
				console.log(item,"单选")
				item.checked = !item.checked
			},
			// 点击全选
			checkAllFn(){
				console.log('全选')
				if(this.checkdAll){
					this.carlist.map(item=>{
						return item.checked=false
					})
				}else {
					this.carlist.map(item=>{
						return item.checked=true
					})
				}
			}
		}
	}
</script>

<style scoped>
	.shop-list {
		padding-bottom: 120rpx;
	}

	.shop-item {
		display: flex;
		padding: 20rpx;
		align-items: center;
		background-color: #F7F7F7;
		margin-bottom: 10rpx;
	}

	.shop-img {
		width: 200rpx;
		height: 200rpx;
	}

	.shop-text {
		flex: 1;
		padding-left: 20rpx;
	}

	.shop-name {
		font-size: 30rpx;
	}

	.shop-color {
		font-size: 24rpx;
	}

	.shop-price {
		display: flex;
		justify-content: space-between;
	}

	.shop-foot {
		border-top: 2rpx solid #F7F7F7;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 120rpx;
		left: 0;
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.foot-radio {
		padding-left: 20rpx;
	}

	.foot-total {
		display: flex;
	}

	.foot-count {
		line-height: 100rpx;
		padding: 0 20rpx;
		font-size: 32rpx;
	}

	.foot-num {
		background-color: #49BDFB;
		color: #FFFFFF;
		padding: 0 60rpx;
		line-height: 100rpx;
	}

	.shop-else-list {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: #F7F7F7;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
	}

	.shop-buy {
		width: 260rpx;
		height: 80rpx;
		border-radius: 60rpx;
		margin-top: 60rpx;
		font-size: 32rpx;
		text-align: center;
		line-height: 80rpx;
		color: #fff;
		background-color: #45bdfe;
	}
</style>
