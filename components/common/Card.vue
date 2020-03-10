<template>
	<view class="card">
		<view>-</view>
		<view class="card-name">{{cardTitle}}</view>
		<view>-</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}

		},
		props:{
			cardTitle:{
				type:String,
				default(){
					return '猜你喜欢'
				}
			}
		}
	}
</script>

<style scoped>
	.card {
		display: flex;
		justify-content: center;
		font-weight: bold;
		padding: 20rpx 0;
	}

	.card-name {
		padding: 0 20rpx;
		font-size: 32rpx;
	}
</style>
