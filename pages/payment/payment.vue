<template>
	<view class="payment">
		<uniNavBar title='确认支付' left-text="关闭" fixed='true' status-bar='true' @clickLeft="Close()"></uniNavBar>
		<Lines />
		<view class="pay-main">
			<label>
				<view class="pay-item">
					<view class="pay-left">
						<image src="../../static/img/zfb.png" mode=""></image>
					</view>
					<view class="pay-center">
						<view>支付宝支付</view>
						<view class="pay-txt">推荐支付宝用户使用</view>
					</view>
					<view class="pay-right">
						<label class="radio">
							<radio value="" color="#FF3333"></radio>
						</label>
					</view>
				</view>
			</label>
			<label>
				<view class="pay-item">
					<view class="pay-left">
						<image src="../../static/img/wxf.png" mode=""></image>
					</view>
					<view class="pay-center">
						<view>微信支付</view>
						<view class="pay-txt">推荐微信用户使用</view>
					</view>
					<view class="pay-right">
						<label class="radio">
							<radio value="" color="#FF3333"></radio>
						</label>
					</view>
				</view>
			</label>
		</view>
		<view class="pay-footer">
			<view class="left">
				<text class="f-color">合计</text>
				<text class="total">￥159</text>
			</view>
			<view class="right">
				<text @tap="GoPay()">去支付</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni/uni-nav-bar/uni-nav-bar.vue'
	import Lines from '@/components/common/Line.vue'
	export default {
		components: {
			uniNavBar,
			Lines
		},
		data() {
			return {

			}
		},
		methods: {
			Close() {
				uni.navigateTo({
					url: '../confrim-order/confrim-order'
				})
			},
			// 实现支付，调用第三方支付接口
			GoPay(){
				uni.navigateTo({
					url:'../pay-success/pay-success'
				})
			}
		}
	}
</script>

<style scoped>
	.pay-item {
		display: flex;
		height: 120rpx;
		align-items: center;
		font-size: 28rpx;
		border-bottom: 2rpx solid #CCCCCC;
	}
	.pay-left {
		width: 25%;
		text-align: center;
	}

	.pay-center {
		width: 60%
	}

	.pay-right {
		width: 15%;
		text-align: center;
	}

	.pay-item image {
		width: 75rpx;
		height: 75rpx;
	}

	.pay-txt {
		color: #a9a6a6;
		font-size: 26rpx;
	}

	.pay-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100rpx
	}

	.pay-footer .left {
		flex: auto;
		padding-left: 35rpx;
		line-height: 100rpx;
		background-color: #000000;
	}

	.pay-footer .right {
		line-height: 100rpx;
		background-color: #42B7FB;
		width: 220rpx;
		text-align: center;
		color: #FFFFFF;
	}

	.pay-footer .total {
		margin-left: 20rpx;
		color: #FFFFFF;
	}
</style>
