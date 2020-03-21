<template>
	<view class='my-path-list'>
		<Lines />
		<view class='path-list'>
			<view class='path-item'>
				<view class='item-main'>
					<view class='item-name'>张三</view>
					<view>18511773322</view>
				</view>
				<view class='item-main'>
					<view class='active'>默认</view>
					<view>北京市海淀区上地办公中心xxxx</view>
				</view>
			</view>
		</view>

		<view class='add-path'>
			<view class='add-path-btn'>新增地址</view>
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
	.path-list {
		padding-left: 20rpx;
		font-size: 32rpx;
	}

	.path-item {
		padding: 10rpx;
		/* border-bottom: 2rpx solid #CCCCCC; */
	}

	.item-main {
		display: flex;
		align-items: center;
	}
	.item-main view{
		font-size: 30rpx;
	}
	.item-name {
		padding-right: 10rpx;
	}

	.active {
		padding:0 10rpx;
		background-color: #49BDFB;
		color: #FFFFFF;
		border-radius: 26rpx;
		font-size: 24rpx;
		text-align: center;
	}

	.add-path {
		padding: 20rpx 0;
		margin-top: 30rpx;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.add-path-btn {
		border: 2rpx solid #49BDFB;
		color: #49BDFB;
		border-radius: 30rpx;
		padding: 6rpx 60rpx;
	}
</style>
