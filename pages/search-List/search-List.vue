<template>
	<view>
		<ShopList></ShopList>
	</view>
</template>

<script>
	import ShopList from '@/components/common/ShopList.vue'
	export default {
		components:{
			ShopList
		},
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap(e){
			console.log(e)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
