<template>
	<view class="GoodList">
		<GoodItem :goodsList="dataList"></GoodItem>
	</view>
</template>

<script>
	import GoodItem from './GoodItem.vue'
	export default {
		components: {
			GoodItem
		},
		props:{
			dataList:{
				type:Array
			}
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
