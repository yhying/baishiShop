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
	</view>
</template>

<script>
	import Lines from '@/components/common/Line.vue'
	import goodList from '@/components/common/GoodList.vue'
	export default {
		components: {
			Lines,
			goodList
		},
		props:{
			keyWord:{
				type:String
			}
		},
		data() {
			return {
				Shopbar: {
					currentindex: 0,
					data: [{
							name: '价格',
							status: 1
						},
						{
							name: '折扣',
							status: 0
						},
						{
							name: '品牌',
							status: 0
						}
					]
				},
				dataList: [{
						id: 1,
						imgUrl: "../../static/img/commodity1.jpg",
						name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice: "299",
						oprice: "659",
						discount: "5.2"
					},
					{
						id: 2,
						imgUrl: "../../static/img/commodity2.jpg",
						name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice: "299",
						oprice: "659",
						discount: "5.2"
					},
					{
						id: 3,
						imgUrl: "../../static/img/commodity3.jpg",
						name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice: "299",
						oprice: "659",
						discount: "5.2"
					},
					{
						id: 4,
						imgUrl: "../../static/img/commodity4.jpg",
						name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice: "299",
						oprice: "659",
						discount: "5.2"
					}
				]
			}
		},
		methods: {
			changeTab(index) {
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
