<template>
	<view class="confirm bg-active-color f-size f-color">
		<Lines />
		<view class="order-header">
			<view class="icon">
				<i class="iconfont">&#xe623;</i>
			</view>
			<view>
				<view class="order-info">
					<view class="f-blod">收货人:张三</view>
					<view class="">1851173322</view>
				</view>
				<view class="order-address">收货地址:福建省厦门市湖里区蔡塘学校</view>
			</view>
			<view class="icon">
				<i class="iconfont">&#xe62c;</i>
			</view>
		</view>
		<!--商品-->
		<view class='goods-list'>
			<view class='goods-content bg-active-color'>
				<image class='goods-img' src='../../static/img/Children3.jpg' mode=""></image>
				<view class='goods-text'>
					<view class='goods-name'>商品名称</view>
					<view class='goods-size f-color'>颜色分类：黑色</view>
					<view class='f-active-color' style='font-size:24rpx'>7天无理由</view>
				</view>
				<view>
					<view>¥299.00</view>
					<view class='f-color'>*1</view>
				</view>
			</view>
			<view class='goods-content bg-active-color'>
				<image class='goods-img' src='../../static/img/Children3.jpg' mode=""></image>
				<view class='goods-text'>
					<view class='goods-name'>商品名称</view>
					<view class='goods-size f-color'>颜色分类：黑色</view>
					<view class='f-active-color' style='font-size:24rpx'>7天无理由</view>
				</view>
				<view>
					<view>¥299.00</view>
					<view class='f-color'>*1</view>
				</view>
			</view>
		</view>
		<view class='order-foot'>
			<view class='total-price'>合计：<text class='f-active-color'>¥3999.00</text></view>
			<view class="submit">提交订单</view>
		</view>
	</view>
</template>

<script>
	import Lines from '@/components/common/Line.vue'
	export default {
		components: {
			Lines
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.confirm{
		position: absolute;
		left:0;
		top:0;
		rigth:0;
		bottom:0;
		width:100%;
		height: 100%;
	}
	.order-header {
		display: flex;
		align-items: center;
		justify-content:space-between;
		background-color: #FFFFFF;
		line-height: 50rpx;
		padding: 30rpx 60rpx;
	}
	.order-info {
		display: flex;
		justify-content: space-between;
	}
	.order-address {
		font-size: 30rpx;
	}
	.goods-list{
		margin-top:20rpx;
		background-color: #FFFFFF;
		padding:20rpx 0;
	}
	.goods-content{
		margin-top:20rpx;
		padding:10rpx 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.goods-text{
		width:360rpx;
		padding:0 10rpx;
		font-size:26rpx;
	}
	.goods-img{
		width:160rpx;
		height:160rpx;
	}
	.goods-name{
		font-size:26rpx;
	}
	.goods-size{
		font-size:24rpx;
	}
	.order-foot{
		height: 80rpx;
		width:100%;
		position: fixed;
		bottom:0;
		left:0;
		background-color: #FFFFFF;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.total-price{
		padding:0 20rpx;
	}
	.submit{
		color:#FFFFFF;
		background-color: #49BDFB;
		padding:0rpx 30rpx;
		height: 100%;
		line-height: 80rpx;
	}
</style>
