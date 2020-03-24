<template>
	<view class="pay-success">
		<view style="font-size: 52rpx;">支付成功</view>
		<view class="Backpage f-size" @tap="Goindex()">回首页在看看吧</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			Goindex(){
				uni.switchTab({
					url:'../index/index'
				})
				}
		}
	}
</script>

<style scoped>
	.pay-success {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.Backpage {
		padding: 10rpx 50rpx;
		border: 2rpx solid #49BDFB;
		border-radius: 40rpx;
		margin-top: 20rpx;
	}
</style>
