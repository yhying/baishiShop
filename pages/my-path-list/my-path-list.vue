<template>
	<view class='my-path-list'>
		<Lines />
		<view class='path-list' v-for="(item,index) in addressList" :key="index">
			<view class='path-item' @tap="editAddress(index)">
				<view class='item-main'>
					<view class='item-name'>{{item.name}}</view>
					<view>{{item.tel}}</view>
				</view>
				<view class='item-main'>
					<view class='active' v-if="item.isdefault">默认</view>
					<view>{{item.cityName+item.details}}</view>
				</view>
			</view>
		</view>

		<view class='add-path'>
			<view class='add-path-btn' @tap="addAddress()">新增地址</view>
		</view>

	</view>
</template>

<script>
	import Lines from '@/components/common/Line.vue'
	import {mapState} from 'vuex' 
	export default {
		components: {
			Lines
		},
		data() {
			return {

			}
		},
		computed:{
			...mapState({
				addressList:state=>state.path.addressList
			})
		},
		
		methods: {
			// 修改地址
			editAddress(index){
				let pathObj=JSON.stringify({
					index:index,
					item:this.addressList[index]
				})
				uni.navigateTo({
					url:'../my-add-path/my-add-path?data='+pathObj
				})
			},
			addAddress(){
				uni.navigateTo({
					url:'../my-add-path/my-add-path'
				})
			}
		}
	}
</script>

<style scoped>
	.path-list {
		padding-left: 20rpx;
		font-size: 32rpx;
	}

	.path-item {
		padding: 20rpx 10rpx 0 10rpx;
		border-bottom: 2rpx solid #CCCCCC;
	}
	.path-item .item-main:first-child {
		padding-bottom: 20rpx;
	}
	.path-item .item-main:last-child {
		padding-bottom: 10rpx;
	}
	.item-main {
		display: flex;
		align-items: center;
	}
	.item-main view{
		font-size: 30rpx;
	}
	.item-name {
		padding-right: 10rpx;
	}

	.active {
		padding:0 10rpx;
		margin-right: 10rpx;
		background-color: #49BDFB;
		color: #FFFFFF;
		border-radius: 26rpx;
		font-size: 24rpx;
		text-align: center;
		
	}

	.add-path {
		padding: 20rpx 0;
		margin-top: 30rpx;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.add-path-btn {
		border: 2rpx solid #49BDFB;
		color: #49BDFB;
		border-radius: 30rpx;
		padding: 6rpx 60rpx;
	}
</style>
