<template>
	<view class="ShopList f-color">
		<view class="shop-title">
			<view class="shop-item" v-for="(item,index) in Shopbar.data" :key="index" @tap="changeTab(index)">
				<view :class="Shopbar.currentindex==index?'f-active-color':' '">{{item.name}}</view>
				<view class="icons">
					<view class="iconfont icon-shangjiantou up" :class="item.status==1?'f-active-color':''"></view>
					<view class="iconfont icon-xiajiantou down" :class="item.status==2?'f-active-color':''"></view>
				</view>
			</view>
		</view>
		<Lines />
		<goodList :dataList="dataList"></goodList>
		{{orderBy}}
	</view>
</template>

<script>
	import Lines from '@/components/common/Line.vue'
	import goodList from '@/components/common/GoodList.vue'
	import $http from '@/common/api/request.js'
	export default {
		components: {
			Lines,
			goodList
		},
		props: {
			keyWord: {
				type: String
			}
		},
		data() {
			return {
				Shopbar: {
					currentindex: 0,
					data: [{
							name: '价格',
							status: 1,
							key: 'pprice'
						},
						{
							name: '折扣',
							status: 0,
							key: 'discount'
						},
						{
							name: '品牌',
							status: 0
						}
					]
				},
				dataList: []
			}
		},
		computed: {
			orderBy() {
				let obj = this.Shopbar.data[this.Shopbar.currentindex]
				let val = obj.status === 1 ? "asc" : "desc" ;
				return {
					[obj.key]:val
				}
			}
		},
		mounted() {
			this.getSearch()
		},
		methods: {
			changeTab(index) {
				//点击排序==》重新请求了数据
				this.getSearch()
				let idx = this.Shopbar.currentindex
				//具体哪一个对象
				let item = this.Shopbar.data[idx];
				if (idx == index) {
					return item.status = item.status === 1 ? 2 : 1;
				}
				//新的值
				let newItem = this.Shopbar.data[index];
				item.status = 0;
				this.Shopbar.currentindex = index
				newItem.status = 1;

			},
			// 监听网络请求
			getSearch() {
				$http.request({
					url: '/goods/search',
					data: {
						name: this.keyWord,
						// pprice:"desc"
						...this.orderBy
					}
				}).then((res) => {
					this.dataList = res
					console.log(this.dataList)
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
	.ShopList {
		font-size: 28rpx;
	}

	.shop-title {
		display: flex;
	}

	.shop-item {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80rpx;
	}

	.shop-item .icons {
		position: relative;
		margin-left: 5rpx;
		text-align: center;
	}

	.iconfont {
		width: 16rpx;
		height: 8rpx;
		;
		position: absolute;
		left: 0;
	}

	.up {
		top: -22rpx;
	}

	.down {
		top: -8rpx
	}
</style>
