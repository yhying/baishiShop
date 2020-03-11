<template>
	<view class="Shop">
		<view class="Shop-item">
			<view class='shop-big'>
				<image class='shop-big' src="../../static/img/shop.jpg" mode=""></image>
			</view>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item">
					<GoodItem wrap="nowrap" :goodsList="shopList" itemWidth="200rpx" itemHeight="200rpx" textSize="20rpx"></GoodItem>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import GoodItem from '../common/GoodItem.vue'
	export default {
		components: {
			GoodItem
		},
		data() {
			return {
				shopList: [{
						id: 1,
						imgUrl: "../../static/img/shop1.jpg",
						name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice: "299",
						oprice: "659",
						discount: "5.2"
					},
					{
						id: 2,
						imgUrl: "../../static/img/shop2.jpg",
						name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice: "299",
						oprice: "659",
						discount: "5.2"
					},
					{
						id: 3,
						imgUrl: "../../static/img/shop3.jpg",
						name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice: "299",
						oprice: "659",
						discount: "5.2"
					},
					{
						id: 1,
						imgUrl: "../../static/img/shop4.jpg",
						name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice: "299",
						oprice: "659",
						discount: "5.2"
					},
					{
						id: 1,
						imgUrl: "../../static/img/shop4.jpg",
						name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice: "299",
						oprice: "659",
						discount: "5.2"
					}
				],

			}
		}
	}
</script>

<style scoped>
	.shop-big {
		width: 100%;
		height: 350rpx;
	}
	.scroll-content {
		width: 100%;
		white-space: nowrap;
	}
	.scroll-item {
		display: inline-block;
	}
</style>
