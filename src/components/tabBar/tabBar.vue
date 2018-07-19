<template>
	<!-- 尾部 -->
	<div class="home-footer fixed width-100 bg-f">
		<div class="flex-box footer-wrap align-center font-12 text-center height-100">
			<a href="#/home" class="flex-1 color-9" :class="{'footer-active': currentPath == '/home'}">
				<p>
					<span class="iconfont icon-shouyetianchong"></span>
				</p>
				<p>首页</p>
			</a>
			<a href="#/my" class="flex-1 color-9" :class="{'footer-active': currentPath == '/my'}">
				<p>
					<span class="iconfont icon-yonghutianchong"></span>
				</p>
				<p>我的</p>
			</a>
		</div>
	</div>
</template>
<style scoped lang="scss">
	@import '@/assets/style/index.scss';
	.home-footer {
		border-top: 1px solid #ccc;
		height: .5rem;
		left: 0;
		bottom: 0;
		.footer-active {
			color: $mainBgColor;
		}
		
	}
</style>
<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			currentPath() {
				return this.$store.state.currentPath;
			}
		},
		methods: {
			show() {
				alert(1);
			}
		}
	}
</script>