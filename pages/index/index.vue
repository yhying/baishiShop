<template>
	<view class="content">
		<scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="ScrollIndex">
			<view v-for="(item,i) in topBar" :key="i" @click="tabBarClick(i)" :id="'top'+i">
				<text :class="i==tabBarIndex?'f-active-color':'f-color'">{{item.name}}</text>
			</view>
		</scroll-view>
		<swiper @change="SwiperChange" :current="tabBarIndex" :style="'height:'+ClientHeight+'px'">
			<swiper-item v-for="(item,i) in newTopBar" :key="i">
				<!-- <view class="home-nav"> -->
					<!-- 推荐模板 -->
					<scroll-view scroll-y="true" >
						<block v-for="(k,i1) in item.data" :key="i1">
							<Swiper v-if="k.type=='swiperList'" :dataList="k.data"></Swiper>
							<template v-if="k.type=='recommendList'">
								<Recommend :dataList="k.data"></Recommend>
								<Card cardTitle="猜你喜欢"></Card>
							</template>
							<GoodList v-if="k.type=='commodityList'" :dataList="k.data" ></GoodList>
						</block>
					</scroll-view>
				<!-- </view> -->
			</swiper-item>
		</swiper>
		<!-- 其他模板 -->
<!-- 				<Banner></Banner>
		<Icons></Icons>
		<Card cardTitle="热销爆品"></Card>
		<Hots></Hots>
		<Card cardTitle="推荐店铺"></Card>
		<Shop></Shop>
		<Card cardTitle="为您推荐"></Card>
		<GoodList></GoodList> -->
	</view>
</template>

<script>
	import Swiper from '@/components/index/indexSwiper.vue'
	import Recommend from '@/components/index/Recommend.vue'
	import Card from '@/components/common/Card.vue'
	import GoodList from '@/components/common/GoodList.vue'
	import Banner from '@/components/index/banner.vue'
	import Icons from '@/components/index/Icons.vue'
	import Hots from '@/components/index/Hots.vue'
	import Shop from '@/components/index/Shop.vue'
	export default {
		components: {
			Swiper,
			Recommend,
			Card,
			GoodList,
			Banner,
			Icons,
			Hots,
			Shop
		},
		data() {
			return {
				tabBarIndex: 0,
				ScrollIndex: 'top0',
				ClientHeight:1000,
				topBar: [],
				// 承载数据
				newTopBar: []
			}
		},
		onLoad() {
			this.getindexData()
		},
		onReady() {
			// 自定义组件无效,此方法(暂时),无法获取ClientHeight
			// const query = uni.createSelectorQuery().in(this);
			// query.select('.home-nav').boundingClientRect(data => {
			// 	// this.ClientHeight = data.height
			// 	this.ClientHeight = 1300
			// }).exec();
		},
		methods: {
			// 监听顶部滑块切换事件
			tabBarClick(index) {
				this.tabBarIndex = index
				this.ScrollIndex = 'top' + index
			},
			// 监听内容滑块切换事件
			SwiperChange(e) {
				this.tabBarIndex = e.detail.current
				this.ScrollIndex = 'top' + e.detail.current
			},
			// 请求首页数据
			getindexData() {
				uni.request({
					url: "http://192.168.1.10:3000/api/index/data",
					success: (res) => {
						console.log(res)
						let data = res.data.data;
						this.topBar = data.topBar;
						this.newTopBar = this.initData(data);
						console.log(this.newTopBar)
					}
				})
			},
			initData(res) {
				let arr = []
				this.topBar.forEach((item, i) => {
					let obj = {
						data: []
					}
					if (i == 0) {
						obj.data = res.data
						// console.log(res.data)
					}
					arr.push(obj)
				})
				return arr
			}
		}
	}
</script>

<style scoped>
	.scroll-content {
		width: 100%;
		height: 80rpx;
		white-space: nowrap;
	}

	.scroll-content view {
		display: inline-block;
		padding: 10rpx 30rpx;
		font-size: 32rpx;
	}

	.f-active-color {
		padding: 10rpx 0;
		border-bottom: 6rpx solid #49BDFB;
	}
</style>
