<template>
	<view class='details'>
		<!--商品图-->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for='(item,index) in swiperList' :key='index'>
				<view class="swiper-item">
					<image class='swiper-img' :src="item.imgUrl" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<!--价格和名称-->
		<view class='details-goods'>
			<view class='goods-pprice'>¥399.00</view>
			<view class='goods-oprice'>¥599.00</view>
			<view class='goods-name'>大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须</view>
		</view>
		<!--商品详情图-->
		<view>
			<view><image class='details-img' src="../../static/img/detail1.jpg" mode=""></image></view>
			<view><image class='details-img' src="../../static/img/detail2.jpg" mode=""></image></view>
			<view><image class='details-img' src="../../static/img/detail3.jpg" mode=""></image></view>
			<view><image class='details-img' src="../../static/img/detail4.jpg" mode=""></image></view>
			<view><image class='details-img' src="../../static/img/detail5.jpg" mode=""></image></view>
		</view>
		
		<Card cardTitle='看了又看'></Card>
		<CommodityList :dataList='dataList'></CommodityList>
		<!--底部-->
		<view class='details-foot'>
			<view class="icon">
				<view class='iconfont icon-xiaoxi'></view>
				<view class='iconfont icon-gouwuche-'></view>
			</view>
			<view class="add">
				<view class='add-shopcart'>加入购物车</view>
				<view class='purchase'>立即购买</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Card from '@/components/common/Card.vue'
	import CommodityList from '@/components/common/GoodList.vue'
	export default {
		components:{
			Card,
			CommodityList
		},
		data() {
			return {
				swiperList:[
					{imgUrl:"../../static/img/details1.jpeg"},
					{imgUrl:"../../static/img/details2.jpeg"},
					{imgUrl:"../../static/img/details3.jpeg"}
				],
				dataList:[
					{
						id:1,
						imgUrl:"../../static/img/commodity1.jpg",
						name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					},
					{
						id:2,
						imgUrl:"../../static/img/commodity2.jpg",
						name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					},
					{
						id:3,
						imgUrl:"../../static/img/commodity3.jpg",
						name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					},
					{
						id:4,
						imgUrl:"../../static/img/commodity4.jpg",
						name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.details{
	padding-bottom: 110rpx;
}
swiper{
	width: 100%;
	height: 700rpx;
}
.swiper-img{
	width: 100%;
	height: 700rpx;
}
.details-goods{
	text-align: center;
	font-weight: bold;
	font-size:36rpx;
	padding:10rpx 0;
}
.details-img{
	width: 100%;
}
.details-foot{
	position: fixed;
	left:0;
	bottom: 0;
	width:100%;
	height: 110rpx;
	display: flex;
	align-items: center;
	justify-content:space-around;
	background-color: #FFFFFF;
	font-size: 28rpx;
}
.details-foot .iconfont{
	width:75rpx;
	height: 75rpx;
	line-height: 75rpx;
	border-radius: 100%;
	background-color: #000000;
	color:#FFFFFF;
	text-align: center;
	margin:0 10rpx;
}
.details-foot>view {
	display: flex;
}
.add-shopcart{
	margin:0 20rpx 0 60rpx;
	padding:15rpx 30rpx;
	background-color: #000000;
	color:#FFFFFF;
	border-radius: 40rpx;
}
.purchase{
	/* margin:0 20rpx; */
	padding:15rpx 30rpx;
	background-color: #49BDFB;
	color:#FFFFFF;
	border-radius: 40rpx;
}
</style>
