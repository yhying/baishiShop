<template>
	<view class="content">
		<template v-if="carlist.length>0">
		<!--自定义导航栏-->
		<uniNavBar title='购物车' :right-text='  isNavBar?"完成":"编辑"   ' fixed='true' status-bar='true' @clickRight='  isNavBar = !isNavBar  '></uniNavBar>
		<!--商品内容-->
		<view class='shop-list'>
			<view class='shop-item' v-for='(item,index) in carlist' :key='index'>
				<label class="radio" @tap="clickRadio(item)">
					<radio value="" color="#FF3333" :checked="item.checked" /><text></text>
				</label>
				<image class='shop-img' :src="item.imgUrl" mode=""></image>
				<view class='shop-text'>
					<view class='shop-name'>{{item.name}}</view>
					<view class='shop-color f-color'>{{item.color}}</view>
					<view class='shop-price'>
						<view>¥{{item.pprice}}</view>
						<view>*{{item.num}}</view>
					</view>
				</view>
			</view>
		</view>
		<!--底部-->
		<view class='shop-foot'>
			<label class="radio foot-radio" @tap="checkAllFn()">
				<radio value="" color='#FF3333'  :checked="checkdAll"/><text>全选</text>
			</label>
			<view class='foot-total'>
				<view class='foot-count'>合计：<text class='f-active-color'>¥{{totalCount.pprice}}</text></view>
				<view class='foot-num'>结算({{totalCount.count}})</view>
			</view>
		</view>
	</template>
	<template v-else>
		<uniNavBar title='购物车' fixed='true' status-bar='true'></uniNavBar>
			<view class='shop-else-list'>
				<text>囧～购物车还是空的～</text>
				<view class="shop-buy" @click="goSearch()">马上去逛逛</view>
			</view>
	</template>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni/uni-nav-bar/uni-nav-bar.vue'
	import {mapState,mapActions,mapGetters} from 'vuex'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				isNavBar: false,
			}
		},
		computed:{
			...mapGetters(['checkdAll','totalCount']),
			...mapState({
				carlist:state=>state.cart.carlist   /* 对象语法,映射 */
			})
		},
		onLoad() {

		},
		methods: {
			...mapActions(['checkAllFn','clickRadio']),
			// 跳转分类页面
			goSearch(){
				uni.switchTab({
					url:'../category/category'
				})
			}
		}
	}
</script>

<style scoped>
	.shop-list {
		padding-bottom: 100rpx;
	}
	.shop-item{
		display: flex;
		padding:20rpx;
		align-items: center;
		background-color: #F7F7F7;
		margin-bottom:10rpx;
	}
	.shop-img{
		width:200rpx;
		height: 200rpx;
	}
	.shop-text{
		flex:1;
		padding-left:20rpx;
	}
	.shop-name {
		font-size: 30rpx;
	}
	.shop-color{
		font-size:24rpx;
	}
	.shop-price{
		display: flex;
		justify-content: space-between;
	}
	.shop-foot{
		border-top:2rpx solid #F7F7F7;
		background-color: #FFFFFF;
		position: fixed;
		bottom:100rpx;
		left:0;
		width:100%;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.foot-radio{
		padding-left:20rpx;
	}
	.foot-total{
		display: flex;
	}
	.foot-count{
		line-height: 100rpx;
		padding:0 20rpx;
		font-size:32rpx;
	}
	.foot-num{
		background-color: #49BDFB;
		color:#FFFFFF;
		padding:0 60rpx;
		line-height: 100rpx;
	}
	.shop-else-list{
		position: absolute;
		left:0;
		top:0;
		right:0;
		bottom:0;
		background-color: #F7F7F7;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
	}
	.shop-buy {
		width: 260rpx;
		height: 80rpx;
		border-radius: 60rpx;
		margin-top: 60rpx;
		font-size: 32rpx;
		text-align: center;
		line-height: 80rpx;
		color: #fff;
		background-color:#45bdfe;
	}
</style>
