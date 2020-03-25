<template>
	<view class="login-tel">
		<Lines></Lines>
		<view class='login-tel'>
			<view class='tel-main'>
				<view class='login-from'>
					<view class='login-user'>
						<text class='user-text'>验证码</text>
						<input type="text" placeholder="请输入验证码"  v-model="userCode"/>
						<button plain="true" :disabled="disabled" @tap="FreshCode()">{{codemsg}}</button>
					</view>
				</view>
				<view class='tel' @tap="goIndex()">下一步</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Lines from '@/components/common/Line.vue'
	export default {
		components: {
			Lines
		},
		data() {
			return {
				codeNum: 60,
				codemsg: '重新发送',
				disabled: false,
				userCode:''
			}
		},
		onReady() {
			this.codemsg='重新发送('+this.codeNum+')'
			this.FreshCode()
		},
		methods: {
			FreshCode(){
				this.disabled=true
				let timer=setInterval(()=>{
					--this.codeNum
					this.codemsg='重新发送('+this.codeNum+')'
					if(this.codeNum===0){
						this.codemsg='重新发送'
						this.disabled=false
						this.codeNum=60
						clearInterval(timer)
					}
				},1000)
			},
			goIndex(){
				uni.switchTab({
					url:'../index/index'
				})
			}
		}
	}
</script>

<style scoped>
	.login-tel {
		width: 100vw;
		/* height: 100vh; */
	}

	.tel-main {
		padding: 0 20rpx;
	}

	.login-from {
		padding: 30rpx 0;
	}

	.login-user {
		font-size: 32rpx;
		padding: 10rpx 0;
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #f7f7f7;
	}

	.user-text {
		padding-right: 10rpx;
	}

	.tel {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		color: #FFFFFF;
		background-color: #49BDFB;
		border-radius: 40rpx;
	}
	.login-user button {
		/* width: 180rpx; */
		height: 50rpx;
		line-height: 50rpx;
		border-radius: 30rpx;
		font-size: 28rpx;
	}
</style>
