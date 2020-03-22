<template>
	<view class='goods-content bg-active-color'>
		<image class='goods-img' :src="goodsitem.imgUrl" mode=""></image>
		<view class='goods-text'>
			<view class='goods-name'>{{goodsitem.name}}</view>
			<view class='goods-size f-color'>颜色分类：{{goodsitem.attr}}</view>
			<view class='f-active-color' style='font-size:24rpx'>7天无理由</view>
		</view>
		<view class="goods-right">
			<view>¥{{goodsitem.pprice}}</view>
			<view class='f-color'>*{{goodsitem.num}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		// props:{
		// 	goodsitem:Object,
		// 	goodsindex:Number
		// }
		props:['goodsitem','goodsindex']
	}
</script>

<style scoped>
	.goods-content {
		padding: 10rpx 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #f7f7f7;
	}
	
	.goods-text {
		width: 360rpx;
		padding: 0 10rpx;
		font-size: 24rpx;
	}
	
	.goods-right {
		font-size: 28rpx;
	}
	
	.goods-img {
		width: 160rpx;
		height: 160rpx;
	}
	
	.goods-name {
		font-size: 26rpx;
	}
</style>
