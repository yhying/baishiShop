<template>
	<view class='my-config'>
		<Lines />
		<view class='config-item'>
			<view>账号设置</view>
			<view class='config-mark'> > </view>
		</view>
		<view class='config-item' @tap='goPathList'>
			<view>地址管理</view>
			<view class='config-mark'> > </view>
		</view>
		<view class='config-item'>
			<view>修改密码</view>
			<view class='config-mark'> > </view>
		</view>
		<view class='config-item'>
			<view>绑定手机号</view>
			<view class='config-mark'> > </view>
		</view>
		
		<view class='my-exit' @tap="returnOut()">退出</view>
		
	</view>
</template>

<script>
		import Lines from '@/components/common/Line.vue'
			import {mapMutations} from 'vuex'
	export default {
		components:{
			Lines
		},
		data() {
			return {
				
			}
		},
		methods: {
			...mapMutations(['loginOut']),
			goPathList(){
				uni.navigateTo({
					url:'../my-path-list/my-path-list'
				})
			},
			// 退出登录
			returnOut(){
				uni.showToast({
					title:'退出成功',
					icon:'none'
				})
				this.loginOut()
				setTimeout(()=>{
					uni.redirectTo({
						url:'../index/index'
					})
				},2000)
			}
		}
	}
</script>

<style scoped>
.config-item{
	display: flex;
	justify-content: space-between;
	padding:20rpx 0 20rpx 20rpx;
	border-bottom: 2rpx solid #CCCCCC;
	font-size: 28rpx;
}
.config-mark{
	padding-right:10rpx;
}
.my-exit{
	background-color: #49BDFB;
	width:100%;
	line-height: 80rpx;
	color:#FFFFFF;
	text-align: center;
}
</style>
