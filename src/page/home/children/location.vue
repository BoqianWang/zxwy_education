<template>
	<div class="bg-wrap">
		<div class="fixed search-title-wrap width-100">
			<div class="search-title p-ten font-15 flex-box">
				<div class="bg-f search-wrap flex-box overflow-h p-r-ten flex-1">
					<span class="iconfont icon-sousuotianchong p-l-ten p-r-ten color-9"></span>
					<input class="flex-1" type="text" placeholder="搜索">
				</div>
				<!-- <div class="color-main flex-1 search-btn text-right p-r-ten">确定</div> -->
			</div>
		</div>
		<div class="location-content p-r-ten p-l-ten">
			<div class="c-city-wrap font-15">
				<p class="color-7">最近访问</p>
				<div class="city clearfix color-3">
					<span class="m-t-ten m-r-ten">深圳</span>
					<span class="m-t-ten m-r-ten">上海</span>
				</div>
			</div>
			<div class="c-city-wrap font-15">
				<p class="color-7">热门城市</p>
				<div class="city clearfix color-3">
					<span class="m-t-ten m-r-ten">深圳</span>
					<span class="m-t-ten m-r-ten">上海</span>
					<span class="m-t-ten m-r-ten">北京</span>
					<span class="m-t-ten m-r-ten">广州</span>
					<span class="m-t-ten m-r-ten">厦门</span>
					<span class="m-t-ten m-r-ten">石家庄</span>
					<span class="m-t-ten m-r-ten">佛山</span>
					<span class="m-t-ten m-r-ten">东莞</span>
					<span class="m-t-ten m-r-ten">惠州</span>
				</div>
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
		height: .32rem;
		border-radius: .3rem;
	}
	.location-content {
		padding-top: .52rem;
	}
	.location-content > .c-city-wrap {
		padding-top: .2rem;
	}
	.location-content > .c-city-wrap > .city span {
		float: left;
		padding: .05rem .2rem;
		border: 1px solid #eee;
		border-radius: 4px;
	}
</style>
<script>
	export default {
		
	}
</script>