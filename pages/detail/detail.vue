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
			<view class='goods-pprice'>¥{{goodsContent.pprice}}</view>
			<view class='goods-oprice'>¥{{goodsContent.oprice}}</view>
			<view class='goods-name'>{{goodsContent.name}}</view>
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
				<view class='add-shopcart' @tap='showPop'>加入购物车</view>
				<view class='purchase' @tap='showPop'>立即购买</view>
			</view>
		</view>
		
		<!--底部弹出层-->
		<view class="pop" v-show='isShow' @touchmove.stop.prevent=''>
			<!--蒙层-->
			<view class='pop-mask' @tap='hidePop'></view>
			<!--内容块-->
			<view class='pop-box' :animation="animationData">
				<view>
					<image class='pop-img' src="../../static/img/Furnishing1.jpg" mode=""></image>
				</view>
				<view class='pop-num'>
					<view>购买数量</view>
					<UniNumberBox 
						:min='1'
					></UniNumberBox>
				</view>
				<view class='pop-sub'>
					确定
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Card from '@/components/common/Card.vue'
	import CommodityList from '@/components/common/GoodList.vue'
		import UniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
		import $http from '@/common/api/request.js'
	export default {
		components:{
			Card,
			CommodityList,
			UniNumberBox
		},
		data() {
			return {
			    isShow:false,
				animationData:{},
				goodsContent:{},
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
		onLoad(e) {
			this.getdetailData(e.id)
		},
		// 监听左上角默认返回功能
		onBackPress(event){
			if(this.isShow){
				this.hidePop()
				return true;
			}
		},
		//点击分享 不支持h5
		onNavigationBarButtonTap(e) {
			console.log(e)
			if(e.type==='share'){
				uni.share({
					"provider":"weixin",
					"type":0,
					"scene":"WXSceneSession",
					"title":this.goodsContent.name,
					"href":"http://192.168.8.6:8080/#/pages/details/details?id="+this.goodsContent.id+"",
					imageUrl:this.goodsContent.imgUrl,
					success: function (res) {
						uni.showTabBar({
							title:"分享成功"
						})
					},
					fail: function (err) {
						console.log("fail:" + JSON.stringify(err));
					}
					
				})
			}
		},
		methods: {
			//点击购买
			showPop(){
				var animation = uni.createAnimation({
				   duration: 200
				})
				animation.translateY(600).step();
				this.animationData = animation.export();
				this.isShow = true;
				setTimeout(()=>{
					animation.translateY(0).step();
					this.animationData = animation.export();
				},200)
			},
			// 点击蒙层关闭
			hidePop(){
				var animation = uni.createAnimation({
				   duration: 200
				})
				animation.translateY(600).step();
				this.animationData = animation.export();
				this.isShow =true;
				setTimeout(()=>{
					animation.translateY(0).step();
					this.animationData = animation.export();
					this.isShow = false;
				},200)
			},
			getdetailData(id){
				$http.request({
					url: '/goods/id',
					data:{
						id:id
					}
				
				}).then((res) => {
					this.goodsContent = res[0];
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
.pop{
	position: fixed;
	left:0;
	top:0;
	width: 100%;
	height: 100%;
	z-index: 9999;
}
.pop-mask{
	position: absolute;
	left:0;
	top:0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.3);
}
.pop-box{
	position: absolute;
	left:0;
	bottom:0;
	width: 100%;
	background-color: #FFFFFF;
}
.pop-img{
	width: 260rpx;
	height: 260rpx;
}
.pop-num{
	padding:20rpx;
	display: flex;
	justify-content: space-between;
}
.pop-sub{
	line-height: 80rpx;
	background-color: #49BDFB;
	color:#FFFFFF;
	text-align: center;
}
</style>
