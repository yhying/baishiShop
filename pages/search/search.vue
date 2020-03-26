<template>
	<view class="search">
		<Lines />
		<view class="search-item f-color">
			<view class='search-title'>
				<view class='f-color'>最近搜索</view>
				<view class="iconfont icon-lajitong" @tap="Clearhistory"></view>
			</view>
			<view v-if='history.length > 0'>
				<view class="search-name" v-for="(item,index) in history" :key="index" @tap="Clickhistory(item)">{{item}}</view>
			</view>
			<view class="search-end" v-else>暂无搜索记录</view>
		</view>
		<view class="search-item f-color">
			<view class='search-title'>
				<view class='f-color'>最近搜索</view>
			</view>
			<view>
				<view class="search-name">四件套</view>
				<view class="search-name">面膜</view>
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
				// 搜索关键字
				keyWord: '',
				// 搜索历史
				history: []
			}
		},
		onShow() {
			uni.getStorage({
				key: 'history_key',
				success: (res) => {
					this.history = res.data
				}
			});
		},
		// 监听左上角默认返回功能
		onBackPress(event){
			uni.redirectTo({
				url: '../index/index'
			})
			return true;
		},
		//点击顶栏中的搜索按钮
		onNavigationBarButtonTap(e) {
			this.ToSearch()
		},
		//监听软键盘的搜索按钮点击的
		onNavigationBarSearchInputConfirmed() {
			this.search();
		},
		//监听input输入内容
		onNavigationBarSearchInputChanged(e) {
			// console.log(e)
			this.keyWord = e.text
		},
		methods: {
			// 搜索方法
			ToSearch() {
				if (this.keyWord === '') {
					uni.showToast({
						title: '关键词不能为空',
						icon: 'none'
					})
				} else {
					this.Clickhistory(this.keyWord)
				}
				this.addSearch()
				// 隐藏键盘
				uni.hideKeyboard();
			},
			// 添加搜索记录方法
			addSearch() {
				let idx = this.history.indexOf(this.keyWord)
				if (idx == -1) {
					this.history.unshift(this.keyWord)
				} else {
					this.history.splice(idx, 1) /* 删除原有的记录*/
					this.history.unshift(this.keyWord) /* 重新追加到前面*/
				}
				uni.setStorage({
					key: 'history_key',
					data: this.history
				});
			},
			// 清楚历史记录
			Clearhistory() {
				uni.showModal({
					title:"重要提示",
					content:'是否要清除搜索记录',
					cancelText:'取消',
					confirmText:"确定",
					success: (res) => {
						if(res.confirm){
							uni.removeStorage({
								key:"history_key"
							})
							this.history=[];
						}
					}
				})
			},
			// 点击搜索记录进入商品列表
			Clickhistory(item){
				uni.navigateTo({
					url: '../search-List/search-List?keyWord='+item,
				})
			}
		}
	}
</script>

<style scoped>
	.search-item {
		padding: 20rpx;
		font-size: 28rpx;
	}

	.search-title {
		display: flex;
		justify-content: space-between;
	}

	.search-name {
		display: inline-block;
		padding: 4rpx 24rpx;
		border-radius: 26rpx;
		background-color: #e1e1e1;
		margin: 10rpx;
	}

	.search-end {
		text-align: center;
	}
</style>
