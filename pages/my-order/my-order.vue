<template>
	<view class="order bg-active-color ">
		<Lines />
		<view class="order-header">
			<view class="header-item" :class="currentIndex==index?'active':''" v-for="(item,index) in orderBar" :key="index"
			 v-text="item.name" @tap="changeBar(index)"></view>
		</view>
		<block v-for="(Baritem,Barindex) in orderBar" :key="Barindex">
			<view v-show="Barindex==currentIndex" :style="'height:'+ClientHeight+'px'">
					<view class='order-main' v-if="Baritem.list.length>0">
						<!--商品-->
						<block v-for="(listitem,listindex) in Baritem.list" :key="listindex">
						<view class='order-goods'>
							<view class='goods-status f-active-color'>{{listitem.status}}</view>
							<view class='goods-item' v-for="(goodsitem,goodsindex) in listitem.goods_item" :key="goodsindex">
								<order-list :goodsitem="goodsitem" :goodsindex="goodsindex"></order-list>
							</view>
						</view>
						<Lines></Lines>
						<!--总价-->
						<view class='total-price'>
							订单金额: <text class='f-active-color'>¥{{listitem.totalPrice}}</text> (包含运费¥0.00)
						</view>
						<Lines></Lines>
						<!--支付-->
						<view class='payment'>
							<view class='payment-text f-active-color'>支付</view>
						</view>
						</block>
					</view>
					<view class="no-order" v-else>
						<view>你还没有相关订单</view>
						<view class="btn" @tap="goIndex()">去首页逛逛吧</view>
					</view>
			</view>
		</block>
	</view>
</template>

<script>
	import Lines from '@/components/common/Line.vue'
	import OrderList from '@/components/order/Order-list.vue'
	export default {
		components: {
			Lines,
			OrderList
		},
		data() {
			return {
				currentIndex: 0,
				ClientHeight: '',
				orderBar: [{
						name: "全部",
						list: [{
							status: '待付款',
							totalPrice: 2999,
							goods_item: [{
								imgUrl: '../../static/img/Children3.jpg',
								name: '大姨绒毛大款2020年必须买,不买你就不行了必须买',
								attr: '黑色',
								pprice: '299.00',
								num: '1'
							}, {
								imgUrl: '../../static/img/Children3.jpg',
								name: '大姨绒毛大款2020年必须买,不买你就不行了必须买',
								attr: '黑色',
								pprice: '299.00',
								num: '1'
							}]
						}]
					},
					{
						name: "待付款",
						list: []
					},
					{
						name: "待收货",
						list: []
					},
					{
						name: "待收货",
						list: []
					},
					{
						name: "待评价",
						list: []
					},
				]
			}
		},
		onReady() {
			// 获取系统高度
			uni.getSystemInfo({
				success: (res) => {
					this.ClientHeight = res.windowHeight - uni.upx2px(104)
				}
			})
		},
		methods: {
			changeBar(index) {
				this.currentIndex = index
			},
			goIndex() {
				uni.redirectTo({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style scoped>
	.order-header {
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #f7f7f7;
		font-size: 32rpx;
		/* margin-top: 2rpx; */
		padding: 0 20rpx;
		background-color: #FFFFFF;
	}

	.header-item {
		flex: auto;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
		box-sizing: border-box;
	}

	.active {
		border-bottom: 4rpx solid #42B7FB;
	}

	.goods-status {
		display: flex;
		justify-content: flex-end;
		background-color: #FFFFFF;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.goods-item {
		/* margin-bottom: 5rpx; */
	}
	.total-price {
		display: flex;
		justify-content: flex-end;
		background-color: #FFFFFF;
		padding: 20rpx;
		font-size: 28rpx;
	}

	.total-price text {
		margin: 0 10rpx;
		font-size: 32rpx;
	}

	.payment {
		display: flex;
		justify-content: flex-end;
		background-color: #FFFFFF;
		padding: 20rpx;
	}

	.payment-text {
		border: 2rpx solid #49BDFB;
		padding: 6rpx 40rpx;
		border-radius: 30rpx;
		font-size: 28rpx;
	}

	.no-order {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #FFFFFF;
		height: 100%;
	}

	.no-order .btn {
		padding: 8rpx 60rpx;
		border-bottom: 2rpx solid #49BDFB;
		color: #49BDFB;
		border-radius: 40rpx;
		margin-top: 12rpx;
	}
</style>
