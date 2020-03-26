<template>
	<view class='my'>
		<!--头部-->
		<view class='my-header'>
			<view class='header-main'>
				<view class='header-logo' @tap="loginUser()">
					<image class='logo-img' :src="loginStatus?userInfo.imgUrl:'../../static/header/one.png'" mode=""></image>
					<view class='logo-name'>{{loginStatus?userInfo.rolesName:'用户昵称'}}</view>
				</view>
				<view class='header-config'>
					<image class='config-img' src="../../static/img/config.png" @tap="goConfig()" mode=""></image>
				</view>
			</view>
		</view>
		<!--我的订单-->
		<view class='order'>
			<view class='order-title' @tap="goOrder()">
				<view>我的订单</view>
				<view>全部订单 > </view>
			</view>
			<view class='order-list'>
				<view class='order-item'>
					<image class='order-img' src="../../static/img/order1.png" mode=""></image>
					<view>待付款</view>
				</view>
				<view class='order-item'>
					<image class='order-img' src="../../static/img/order2.png" mode=""></image>
					<view>待收货</view>
				</view>
				<view class='order-item'>
					<image class='order-img' src="../../static/img/order3.png" mode=""></image>
					<view>待评价</view>
				</view>
				<view class='order-item'>
					<image class='order-img' src="../../static/img/order4.png" mode=""></image>
					<view>待售后</view>
				</view>
				<view class='order-item'>
					<image class='order-img' src="../../static/img/order5.png" mode=""></image>
					<view>待退款</view>
				</view>
			</view>
		</view>
		<!--内容列表-->
		<view class='my-content'>

			<view class="my-content-item">
				<view>我的钱包</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>我的收藏</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>我的足迹</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>下载APP</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>关于</view>
				<view>></view>
			</view>

		</view>
		<TabBar currentpage="my"></TabBar>
	</view>
</template>

<script>
	import TabBar from '@/components/common/TabBar.vue'
	import {mapState} from 'vuex'
	export default {
		components:{
			TabBar
		},
		data() {
			return {}
		},
		computed:{
			...mapState({
				loginStatus:state=>state.user.loginStatus,
				userInfo:state=>state.user.userInfo
			})
		},
		onLoad() {

		},
		methods: {
			// 跳转设置页面
			goConfig(){
				uni.navigateTo({
					url:'../my-config/my-config'
				})
			},
			// 跳转订单页面
			goOrder(){
				uni.navigateTo({
					url:'../my-order/my-order'
				})
			},
			loginUser(){
				uni.navigateTo({
					url:'../login/login'
				})
			}
		}
	}
</script>

<style scoped>
	.my {
		font-size: 32rpx;
	}

	.my-header {
		background: url(../../static/img/mybg.png) no-repeat;
		width: 100%;
		height: 400rpx;
	}

	.header-main {
		position: relative;
		top: 120rpx;
	}

	.header-config {
		position: absolute;
		left: 20rpx;
	}

	.header-logo {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 50%;
		margin-left: -100rpx;
		width: 200rpx;

	}

	.config-img {
		width: 40rpx;
		height: 40rpx;
	}

	.logo-img {
		width: 120rpx;
		height: 120rpx;
		border: 2rpx solid #CCCCCC;
		border-radius: 50%;
		background-color: #FFFFFF;
	}

	.logo-name {
		font-weight: bold;
		color: #FFFFFF;
		font-size: 28rpx;
	}

	.order-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
	}

	.order-list {
		padding: 20rpx;
		display: flex;
	}

	.order-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.order-img {
		width: 66rpx;
		height: 66rpx;
	}

	.my-content {
		margin: 20rpx 0;
		padding: 0 20rpx;
	}

	.my-content-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 0;
		border-bottom: 2px solid #CCCCCC;
	}
</style>
