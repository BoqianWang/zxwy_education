<template>
	<div class="search bg-wrap">
		<div class="fixed search-title-wrap width-100">
			<div class="search-title p-ten font-15 flex-box">
				<div class="bg-f search-wrap flex-box overflow-h p-r-ten">
					<span class="iconfont icon-sousuotianchong p-l-ten p-r-ten color-9"></span>
					<input class="flex-1" type="text" placeholder="搜索">
				</div>
				<div class="color-main flex-1 search-btn text-right p-r-ten">确定</div>
			</div>
		</div>
		<div class="search-content p-ten font-15 bg-f">
			<p class="c-title p-t-ten">热门搜索</p>
			<div class="search-class clearfix">
				<span class="m-t-ten m-r-ten">物理</span>
				<span class="m-t-ten m-r-ten">托福</span>
				<span class="m-t-ten m-r-ten">中考</span>
				<span class="m-t-ten m-r-ten">语文</span>
				<span class="m-t-ten m-r-ten">英文作文</span>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.search-title-wrap {
		left: 0;
		top: 0;
		background: #f9f9f9;
		z-index: 1;
	}
	.search-title {
		line-height: .32rem;
	}
	.search-title > .search-wrap {
		width: 3rem;
		height: .32rem;
		border-radius: .3rem;
	}
	.text-right {
		text-align: right;
	}
	.search-content {
		padding-top: .62rem;
	}
	.search-content .search-class > span{
			float: left;
			padding: .05rem .2rem;
			border:1px solid #ccc;
			border-radius: 4px;
	}
</style>
<script>
	export default {

	}
</script>