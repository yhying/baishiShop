<template>
	<view class="content">
		<Lines />
		<view class="list">
			<!-- 左侧 -->
			<scroll-view scroll-y="true" class='list-left' :style="'height:'+clentHeight+'px'">
				<view v-for='(item,index) in leftData' :key="index" class='left-item' @tap="changeLeftTab(index,item.id)">
					<view class='left-name' :class="activeIndex===index?'left-name-active':''">{{item.name}}</view>
				</view>
			</scroll-view>
			<!-- 右侧 -->
			<scroll-view scroll-y="true" class='list-right' :style="'height:'+clentHeight+'px'">
				<view class="right-list" v-for="(item,index) in rightData" :key="index">
					<block v-for="(k,i) in item" :key="i">
						<view class="list-title">{{k.name}}</view>
						<view class="right-content">
							<view class="right-item" v-for='(k2,i2) in k.list' :key="i2">
								<image :src="k2.imgUrl" mode=""></image>
								<view class="right-name">{{k2.name}}</view>
							</view>
						</view>
					</block>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Lines from '@/components/common/Line.vue'
	import $http from '@/common/api/request.js'
	export default {
		components: {
			Lines
		},
		data() {
			return {
				clentHeight: '',
				activeIndex: 0,
				//左侧数据
				leftData: [],
				//右侧数据
				rightData: []
			}
		},
		onLoad() {
			this.getgoodsData()
		},
		//获取可视高度
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clentHeight = res.windowHeight - this.getClientHeight();
				}
			})
		},
		// 点击搜索栏跳转搜索页面
		onNavigationBarSearchInputClicked() {
			// console.log(111)
			uni.navigateTo({
				url: '../search/search'
			})
		},
		methods: {
			// 点击左侧切换兰
			changeLeftTab(index,id) {
				console.log(id)
				this.getgoodsData(id)
				this.activeIndex = index
			},
			//监听客户端，兼容
			getClientHeight() {
				const res = uni.getSystemInfoSync();
				const system = res.platform;
				console.log(system)
				if (system === 'ios') {
					// return 44+res.statusBarHeight;
					return 0;
				} else if (system === 'android') {
					// return 48+res.statusBarHeight;
					return 0;
				} else {
					return 0;
				}
			},
			// 获取网络请求数据
			getgoodsData(id) {
				//避免重复点击请求
				console.log(this.activeIndex)
				if(  id === (this.activeIndex+1) ){
					console.log('222')
					return;
				}
				$http.request({
					url: '/goods/list'
				}).then(res => {
					console.log(res)
					let leftData = [];
					let rightData = []
					res.forEach(item => {
						leftData.push({
							id: item.id,
							name: item.name
						})
						if (item.id === this.activeIndex + 1) {
							rightData.push(item.data);
						}
					})
					this.leftData = leftData;
					this.rightData = rightData;
				}).catch(() => {
					uni.showToast({
						title: '请求失败',
						icon: 'none'
					})
				})
			}
		}
	}
</script>

<style scoped>
	.list {
		display: flex;
	}

	.list-left {
		width: 200rpx;
	}

	.left-item {
		border-bottom: 2rpx solid #fff;
		font-size: 28rpx;
		font-weight: 700;
		background-color: #f7f7f7;
	}

	.left-name {
		padding: 30rpx 6rpx;
		text-align: center;
	}

	.left-name-active {
		border-left: 8rpx solid #49BDFB;
		background-color: #FFFFFF;
	}

	.list-right {
		flex: 1;
		padding-left: 30rpx;
	}

	.list-title {
		font-weight: bold;
		padding: 30rpx 0;
	}

	.right-content {
		display: flex;
		flex-wrap: wrap;
		/* justify-content: center; */
	}

	.right-item {
		width: 150rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10rpx;

	}

	.right-name {
		padding: 16rpx 0;
		font-size: 24rpx;
	}

	.right-item image {
		width: 150rpx;
		height: 150rpx;
	}
</style>
