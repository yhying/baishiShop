<template>
	<view class='my-add-path'>

		<view class='path-item'>
			<view>收 件 人:</view>
			<input type="text" value="" placeholder="收件人姓名"  v-model="pathObj.name"/>
		</view>

		<view class='path-item'>
			<view>手 机 号:</view>
			<input type="text" value="" placeholder="11位手机号" v-model="pathObj.tel" />
		</view>

		<view class='path-item'>
			<view>所在地址:</view>
			<mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="pickerValueDefault" @onConfirm="onConfirm">
			</mpvue-city-picker>
			<view @tap='showCityPicker'>{{pathObj.cityName}} > </view>
		</view>

		<view class='path-item'>
			<view>详细地址:</view>
			<input type="text" value="" placeholder="5到60个字符" v-model="pathObj.details" />
		</view>

		<view class='path-item'>
			<view>设为默认地址</view>
			<label class="radio">
				<radio value="" color="#FF3333"  :checked="pathObj.isDefault"/><text></text>
			</label>
		</view>

	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/uni/mpvue-citypicker/mpvueCityPicker.vue'
	import {mapActions} from 'vuex'
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				pickerValueDefault: [0, 0, 1],
				name:'',
				tel:'',
				details:'',
				isDefault:false,
				pathObj:{
					name:'',
					tel:'',
					cityName: "请选择",
					details:'',
					isDefault:false,
				},
				i:-1,
				// 是否修改
				isRemind:false,
			}
		},
		onLoad(e){
			if(e.data){
				uni.setNavigationBarTitle({
				    title: '修改地址'
				});
				let res=JSON.parse(e.data);
				this.pathObj=res.item
				this.i=res.index
				this.isRemind=true
			}
		},
		onNavigationBarButtonTap(){
			console.log()
			if(this.isRemind){
				// 修改
				this.EditAddressFn({
					index:this.i,
					item:this.pathObj
				})
				uni.showToast({
					"title":"修改地址成功",
					"icon":"success",
				})
			}else{
				// 添加
				this.addAddressFn(this.pathObj)
				uni.showToast({
					"title":"添加地址成功",
					"icon":"success",
				})
			}
			setTimeout(()=>{
				uni.navigateTo({
					url:'../my-path-list/my-path-list'
				})
			},2000)
		},
		methods: {
			...mapActions(['addAddressFn','EditAddressFn']),
			showCityPicker() {
			  this.$refs.mpvueCityPicker.show();
			},
			onConfirm(e) {
				this.pathObj.cityName = e.label;
			}
		}
	}
</script>

<style scoped>
	.my-add-path {
		padding-left: 20rpx;
		padding-right: 20rpx;
		font-size: 32rpx;
	}

	.path-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16rpx 0;
		width: 100%;
		border-bottom: 2rpx solid #CCCCCC;
	}

	.path-item input {
		flex: 1;
		text-align: left;
		padding-left: 10rpx;
	}

	.uni-input-input,
	.uni-input-placeholder {
		font-size: 28rpx;
	}
</style>
