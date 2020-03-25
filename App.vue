<script>
	export default {
		onLaunch: function() {
			this.$store.commit('initUser')
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
	/* 订单图标 */
	@font-face {
	  font-family: 'iconfont';  /* project id 1707897 */
	  src: url('//at.alicdn.com/t/font_1707897_kuqzjxnmu2.eot');
	  src: url('//at.alicdn.com/t/font_1707897_kuqzjxnmu2.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1707897_kuqzjxnmu2.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1707897_kuqzjxnmu2.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1707897_kuqzjxnmu2.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1707897_kuqzjxnmu2.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:32rpx;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;}
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
	.uni-input-placeholder {
		font-size: 28rpx;
		}
</style>
