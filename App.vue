<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* @import url("./common/uni.css"); */
	@import url("common/iconfont.css");
	@import url("./common/common.css");
	
	/* 修改默认样式 */
	.uni-page-head-btn {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	/* 修改首页顶部导航样式 */
	.uni-navbar--border[data-v-cee94ab2]{
		border-bottom: none !important;
	}
	.uni-nav-bar-text[data-v-cee94ab2] {
		font-weight: 700 !important;
	}
	uni-page-head .uni-page-head-ft {
		padding-right: 30rpx;
	}
</style>
