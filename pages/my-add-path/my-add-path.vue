<template>
	<view class='my-add-path'>

		<view class='path-item'>
			<view>收 件 人:</view>
			<input type="text" value="" placeholder="收件人姓名" />
		</view>

		<view class='path-item'>
			<view>手 机 号:</view>
			<input type="text" value="" placeholder="11位手机号" />
		</view>

		<view class='path-item'>
			<view>所在地址:</view>
			<mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="pickerValueDefault" @onConfirm="onConfirm">
			</mpvue-city-picker>
			<view @tap='showCityPicker'>{{cityName}} > </view>
		</view>

		<view class='path-item'>
			<view>详细地址:</view>
			<input type="text" value="" placeholder="5到60个字符" />
		</view>

		<view class='path-item'>
			<view>设为默认地址</view>
			<label class="radio">
				<radio value="" color="#FF3333" /><text></text>
			</label>
		</view>

	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/uni/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				cityName: "请选择",
				pickerValueDefault: [0, 0, 1]
			}
		},
		methods: {
			showCityPicker() {
			  this.$refs.mpvueCityPicker.show();
			},
			onConfirm(e) {
				this.cityName = e.label;
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
