<template>
	<view class="content">
		<!--自定义导航栏 h5平台-->
		<!-- #ifdef H5-->
		<uniNavBar
			title='百年奥莱' 
			left-icon="search"
			right-icon="chat"
			fixed='true'
			status-bar='true'
			@clickLeft="search()"
		></uniNavBar>
		<!-- #endif -->
		<scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="ScrollIndex">
			<view v-for="(item,i) in topBar" :key="i" @click="tabBarClick(i)" :id="'top'+i">
				<text :class="i==tabBarIndex?'f-active-color':'f-color'">{{item.name}}</text>
			</view>
		</scroll-view>
		<swiper @change="SwiperChange" :current="tabBarIndex" :style="'height:'+ClientHeight+'px'">
			<swiper-item v-for="(item,i) in newTopBar" :key="i">
				<!-- <view class="home-nav"> -->
				<!-- 推荐模板 -->
				<scroll-view scroll-y="true" :style="'height:'+ClientHeight+'px;'" @scrolltolower="loadmore(i)">
					<block v-if="item.data.length>0">
						<block v-for="(k,i1) in item.data" :key="i1">
							<Swiper v-if="k.type=='swiperList'" :dataList="k.data"></Swiper>
							<template v-if="k.type=='recommendList'">
								<Recommend :dataList="k.data"></Recommend>
								<Card cardTitle="猜你喜欢"></Card>
							</template>
							<!-- 其他模板 -->
							<Banner v-if="k.type=='bannerList'" :dataList="k.imgUrl"></Banner>
							<template v-if="k.type=='iconsList'">
								<Icons :dataList="k.data"></Icons>
								<Card cardTitle="热销爆品"></Card>
							</template>
							<template v-if="k.type=='iconsList'">
								<Hots :dataList="k.data"></Hots>
								<Card cardTitle="推荐店铺"></Card>
							</template>
							<template v-if="k.type=='shopList'">
								<Shop :dataList="k.data"></Shop>
								<Card cardTitle="为您推荐"></Card>
							</template>
							<GoodList v-if="k.type=='commodityList'" :dataList="k.data"></GoodList>
						</block>
					</block>
					<view v-else>
						暂无数据...
					</view>
					<uni-load-more @clickLoadMore="loadmore(i)" :status="status" iconType="auto"></uni-load-more>
				</scroll-view>
				<!-- </view> -->
			</swiper-item>
		</swiper>
		<TabBar currentpage="index"></TabBar>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni/uni-nav-bar/uni-nav-bar.vue'
	import TabBar from '@/components/common/TabBar.vue'
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	import $http from '@/common/api/request.js'
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
			uniNavBar,
			TabBar,
			Swiper,
			Recommend,
			Card,
			GoodList,
			Banner,
			Icons,
			Hots,
			Shop,
			uniLoadMore
		},
		data() {
			return {
				tabBarIndex: 0,
				ScrollIndex: 'top0',
				ClientHeight: 0,
				status: 'more',
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
			// 获取系统高度
			uni.getSystemInfo({
				success: (res) => {
					this.ClientHeight = res.windowHeight - uni.upx2px(200) - this.getClientHeight()
				}
			})
		},
		// 监听标题按钮点击事件
		onNavigationBarButtonTap(e){
			console.log(e)
			if(e.float=='left'){
				this.search()
			}
		},
		methods: {
			// 监听h5自定义导航左侧搜索点击事件
			search(){
				uni.navigateTo({
				    url: '../search/search'
				})
			},
			// 监听顶部滑块切换事件
			tabBarClick(index) {
				this.tabBarIndex = index
				this.ScrollIndex = 'top' + index
				if (this.newTopBar[index].loadding == 'first') {
					this.getindexOtherData()
				}
			},
			// 监听内容滑块切换事件
			SwiperChange(e) {
				this.tabBarClick(e.detail.current);
			},
			initData(res) {
				let arr = []
				this.topBar.forEach((item, i) => {
					let obj = {
						data: [],
						loadding: 'first',
					}
					if (i == 0) {
						obj.data = res.data
						// console.log(res.data)
					}
					arr.push(obj)
				})
				return arr
			},
			// 监听上拉加载
			loadmore(index) {
				this.status = 'loading'
				setTimeout(()=> {
					this.getindexOtherData(() => {
						this.status = 'more'
					})
				}, 2000);
			},
			//监听客户端，兼容
			getClientHeight() {
				const res = uni.getSystemInfoSync();
				const system = res.platform;
				console.log(system)
				if (system === 'ios') {
					// return 44+res.statusBarHeight;
					return 0;
				} else if (system === 'android') {
					// return 48+res.statusBarHeight;
					return 0;
				} else {
					return 0;
				}
			},
			/* 
			网络请求事件监听
			 */
			// 请求首页数据
			getindexData() {
				$http.request({
					url: '/index/data',

				}).then((res) => {
					this.topBar = res.topBar;
					this.newTopBar = this.initData(res);
				}).catch(() => {
					uni.showToast({
						title: '请求失败',
						icon: 'none'
					})
				})
			},
			// 其他模板首页数据
			getindexOtherData(callback) {
				let index = this.tabBarIndex
				let topBarid = this.topBar[index].id
				// console.log(this.newTopBar)
				let pageId = Math.ceil(this.newTopBar[index].data.length / 5) + 1;
				$http.request({
					url: `/index/${topBarid}/data/${pageId}` /* ES6*/
				}).then(res => {
					this.newTopBar[index].data = [...this.newTopBar[index].data, ...res]
				}).catch(()=>{
					this.status = 'nomore'
				})
				// 请求结束后，关上loadding
				this.newTopBar[index].loadding = 'last'
				if (typeof callback === 'function') {
					callback();
				}
			}
		}
	}
</script>

<style scoped>
	.scroll-content {
		/* 		position: fixed;
		top:80rpx;
		left: 0;
		right: 0; */
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
