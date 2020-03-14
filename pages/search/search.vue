<template>
	<view class="search">
		<Lines />
		<view class="search-item f-color">
			<view class='search-title'>
				<view class='f-color'>最近搜索</view>
				<view class="iconfont icon-lajitong"></view>
			</view>
			<view>
				<view class="search-name">四件套</view>
				<view class="search-name">面膜</view>
			</view>
		</view>
		<view class="search-item f-color">
			<view class='search-title'>
				<view class='f-color'>最近搜索</view>
			</view>
			<view>
				<view class="search-name">四件套</view>
				<view class="search-name">面膜</view>
			</view>
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
		onNavigationBarButtonTap(e){
			console.log(e)
			if(e.float=='right'){
				uni.navigateTo({
				    url: '../search-List/search-List'
				})
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.search-item {
		padding: 20rpx;
		font-size: 28rpx;
	}
	.search-title {
		display: flex;
		justify-content: space-between;
	}
	.search-name {
		display: inline-block;
		padding: 4rpx 24rpx;
		border-radius: 26rpx;
		background-color: #e1e1e1;
		margin: 10rpx;
	}
</style>
