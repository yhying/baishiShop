<template>
	<view class="Goods" :style="'flex-wrap:'+wrap">
	<!-- 单个商品组件 -->
	<view class="GoodItem" v-for="(item,i) in goodsList" :key="i" :style="'width:'+itemWidth" @tap="goDetail(item.id)" >
		<image :src="item.imgUrl" mode="" :style="'height:'+itemHeight"></image>
		<view class="GoodItem-content">
			<text class='goods-name' :style="'fontSize:'+textSize">{{item.name}}</text>
			<view>
				<text class='pprice'>¥{{item.pprice}}</text>
				<text class='oprice'>¥{{item.oprice}}</text>
			</view>
			<text class='discount'>{{item.discount}}折</text>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		props: {
			goodsList: Array,
			itemWidth:{
				type:String,
				default(){
					return '374rpx'
				}
			},
			itemHeight:{
				type:String,
				default(){
					return '375rpx'
				}
			},
			wrap:{
				type:String,
				default(){
					return 'wrap'
				}
			},
			textSize:{
				type:String,
				default(){
					return '30rpx'
				}
			}
		},
		methods:{
			goDetail(id){
				uni.navigateTo({
				    url: '../../pages/detail/detail?id='+id+''
				})
			}
		}
	}
</script>

<style scoped>
	.Goods {
		display: flex;
		justify-content: space-between;
		/* flex-wrap: wrap; */
	}

	.GoodItem {
		/* width: 374rpx; */
		padding-bottom: 20rpx;
	}

	.GoodItem>image {
		width: 100%;
		/* height: 375rpx; */
	}

	.GoodItem-content {
		text-align: center;
	}

	.goods-name {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		color: #333333;
		word-break: break-all;
		padding: 6rpx 20rpx;
		/* font-size: 30rpx; */
	}

	.oprice {
		text-decoration: line-through;
		font-size: 24rpx;
		color: #999999;
	}

	.discount {
		border-radius: 4rpx;
		border: 1px solid #FF3333;
		padding: 2rpx 10rpx;
		font-size: 20rpx;
		color: #FF3333;
	}
</style>
