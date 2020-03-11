<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,i) in dataList" :key="i">
				<view class="swiper-item">
					<image :src="item.imgUrl" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props:{
			dataList:{
				type:Array
			}
		}
	}
</script>

<style scoped>
	.swiper {
		width: 100%;
		height: 400rpx;
	}
	image {
		width: 100%;
	}
</style>
