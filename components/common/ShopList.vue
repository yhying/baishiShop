<template>
	<view class="ShopList f-color">
		<view class="shop-title">
			<view class="shop-item">
				<view>价格</view>
				<view class="icons">
					<view class="iconfont icon-shangjiantou up"></view>
					<view class="iconfont icon-xiajiantou down"></view>
				</view>
			</view>
			<view class="shop-item">
				<view>折扣</view>
				<view class="icons">
					<view class="iconfont icon-shangjiantou up"></view>
					<view class="iconfont icon-xiajiantou down"></view>
				</view>
			</view>
			<view class="shop-item">
				<view>品牌</view>
				<view class="icons">
					<view class="iconfont icon-shangjiantou up"></view>
					<view class="iconfont icon-xiajiantou down"></view>
				</view>
			</view>
		</view>
		<Lines />
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
	.ShopList {
		font-size: 28rpx;
	}

	.shop-title {
		display: flex;
	}

	.shop-item {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80rpx;
	}

	.shop-item .icons {
		position: relative;
		margin-left: 5rpx;
		text-align: center;
	}
	.iconfont {
		width: 16rpx;
		height: 8rpx;;
		position: absolute;
		left: 0;
	}
	.up {
		top:-22rpx;
	}
	.down {
		top:-8rpx
	}
</style>
