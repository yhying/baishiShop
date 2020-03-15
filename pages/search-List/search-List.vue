<template>
	<view>
		<ShopList :keyWord="keyWord"></ShopList>
	</view>
</template>

<script>
	import ShopList from '@/components/common/ShopList.vue'
	export default {
		components: {
			ShopList
		},
		data() {
			return {
				keyWord: ''
			}
		},
		onLoad(e) {
			this.keyWord = e.keyWord
			// #ifdef APP-PLUS  
			var webView = this.$mp.page.$getAppWebview();  
			webView.setTitleNViewSearchInputText(e.keyWord);
			// #endif
		},
		// 监听点击输入框回退事件
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search',
				success: () => {}
			})
		},
		methods: {

		}
	}
</script>

<style>

</style>
