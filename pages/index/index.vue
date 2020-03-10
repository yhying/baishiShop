<template>
	<view class="content">
		<Swiper></Swiper>
		<Recommend></Recommend>
		<Card cardTitle="猜你喜欢"></Card>
		<GoodList></GoodList>
		<Banner></Banner>
	</view>
</template>

<script>
	import Swiper from '@/components/index/indexSwiper.vue'
	import Recommend from '@/components/index/Recommend.vue'
	import Card from '@/components/common/Card.vue'
	import GoodList from '@/components/common/GoodList.vue'
	import Banner from '@/components/index/banner.vue'
	export default {
		components:{
			Swiper,
			Recommend,
			Card,
			GoodList,
			Banner
		},
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
</style>
