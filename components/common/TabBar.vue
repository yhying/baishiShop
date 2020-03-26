<template>
	<view class="tab-content">
		<view class="tab-item" v-for="(item,index) in tabList" :key="index" @tap="changeTab(item.pagePath)">
			<image v-if="currentpage===item.pagePath" :src="item.selectedIconPath" mode=""></image>
			<image v-else :src="item.iconPath" mode=""></image>
			<view class="tab-name">{{item.text}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['currentpage'],
		data() {
			return {
				tabList: [{
						"pagePath": "index",
						"iconPath": "../../static/tabbar/index.png",
						"selectedIconPath": "../../static/tabbar/indexSelected.png",
						"text": "首页"
					}, {
						"pagePath": "category",
						"iconPath": "../../static/tabbar/list.png",
						"selectedIconPath": "../../static/tabbar/listSelected.png",
						"text": "分类"
					},
					{
						"pagePath": "car",
						"iconPath": "../../static/tabbar/shop.png",
						"selectedIconPath": "../../static/tabbar/shopSelected.png",
						"text": "购物车"
					},
					{
						"pagePath": "my",
						"iconPath": "../../static/tabbar/my.png",
						"selectedIconPath": "../../static/tabbar/mySelected.png",
						"text": "我的"
					}
				]
			}
		},
		methods: {
			changeTab(path) {
				if (path === 'car' || path === 'my') {

				} else {
					uni.redirectTo({
						// url: '../../pages/' + path + '/' + path
						url: `../../pages/${path}/${path}`
					})
				}
			}
		}
	}
</script>

<style scoped>
	.tab-content {
		display: flex;
		position: fixed;
		height: 120rpx;
		width: 100%;
		bottom: 0;
		left: 0;
		justify-content: space-around;
		align-items: center;
		background-color: #FFFFFF;
		border-bottom: 2rpx solid #636263;
		z-index: 999;
	}

	.tab-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
	}

	.tab-item image {
		width: 60rpx;
		height: 60rpx;
	}
</style>
