<template>
	<view class="content">
		<!--自定义导航栏-->
		<uniNavBar 
			title='购物车' 
			:right-text='  isNavBar?"完成":"编辑"   ' 
			fixed='true'
			status-bar='true'
			@clickRight='  isNavBar = !isNavBar  '
		></uniNavBar>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components:{
			uniNavBar
		},
		data() {
			return {
				isNavBar:false,
			}
		},
		onLoad() {

		},
		methods: {
		}
	}
</script>

<style scoped>
</style>
