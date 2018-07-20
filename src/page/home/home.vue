<template>
	<div class="home">
		<div class="fixed home-title-warp width-100 bg-main">
			<div class="home-title flex-box p-ten justify-s-b">
				<a href="#/index/search" class="flex-box align-center">
				   <span class="font-15 color-3">深圳&nbsp;</span>
				   <span class="iconfont icon-jiantouxia font-12 color-6"></span>
				</a>
				<a href="#/index/location" class="search font-12 bg-f flex-box align-center p-r-ten">
					<span class="iconfont icon-sousuotianchong p-l-ten p-r-ten color-9"></span>
					<input class="width-100 font-15" type="text" placeholder="搜索">
				</a>
			</div>
		</div>
		<div class="img-wrap bg-size-cover font-15">
			<mt-swipe :auto="3000">
			  <mt-swipe-item v-for="item in imgDate">
				<a :href="item.href">
					<div class="bg-size-cover height-100" :style="{backgroundImage: 'url(' + item.image + ')'}"></div>
				</a>
			  </mt-swipe-item>
			  <!-- <mt-swipe-item>
				<a href="##">2</a>
			  </mt-swipe-item>
			  <mt-swipe-item>
				<a href="##">3</a>
			  </mt-swipe-item> -->
			</mt-swipe>
		</div>
		<!-- 内容 -->
		<div class="home-content m-t-ten">
			<!-- 免费课程 -->
			<div class="free-class bg-f">
				<a href="#/courseList" class="con-title flex-box justify-s-b p-ten">
					<p class="font-15 color-3 font-b">免费课程</p>
					<p class="color-9 flex-box align-center font-12">
						<span>查看全部课程</span>
						<span class="iconfont icon-jiantouyou font-12"></span>
					</p>
				</a>
				<div class="free-class-wrap p-l-ten p-r-ten rel">
					<ul class="abs clearfix">
						<a href="#/courseList/courseDetail">
							<li class="free-c-block p-ten m-l-ten">
								<p class="font-15 color-3">【2018暑】初三物理尖端陪优版</p>
								<div class="font-12 p-t-ten color-9 free-l-detail">
									<p class="flex-box p-b-five">
										<span class="free-b-left">机构: </span>
										<span class="flex-1">新东方</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">课次: </span>
										<span class="flex-1">9课次</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">时间: </span>
										<span class="flex-1">2018-06-07至2018-06-13每天09:00-11:00</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">地址: </span>
										<span class="flex-1">笋岗,园林,岗厦,洪湖</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">价格: </span>
										<span class="flex-1">
											市场价 <del>¥199.99</del> 会员价 
											<span class="color-main">¥0</span>
										</span>
									</p>
								</div>
							</li>
						</a>
						<a href="#/courseList/courseDetail">
							<li class="free-c-block p-ten m-l-ten">
								<p class="font-15 color-3">【2018暑】初三物理尖端陪优版</p>
								<div class="font-12 p-t-ten color-9 free-l-detail">
									<p class="flex-box p-b-five">
										<span class="free-b-left">机构: </span>
										<span class="flex-1">新东方</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">课次: </span>
										<span class="flex-1">9课次</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">时间: </span>
										<span class="flex-1">2018-06-07至2018-06-13每天09:00-11:00</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">地址: </span>
										<span class="flex-1">笋岗,园林,岗厦,洪湖</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">价格: </span>
										<span class="flex-1">
											市场价 <del>¥199.99</del> 会员价 
											<span class="color-main">¥0</span>
										</span>
									</p>
								</div>
							</li>
						</a>
						<a href="#/courseList/courseDetail">
							<li class="free-c-block p-ten m-l-ten">
								<p class="font-15 color-3">【2018暑】初三物理尖端陪优版</p>
								<div class="font-12 p-t-ten color-9 free-l-detail">
									<p class="flex-box p-b-five">
										<span class="free-b-left">机构: </span>
										<span class="flex-1">新东方</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">课次: </span>
										<span class="flex-1">9课次</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">时间: </span>
										<span class="flex-1">2018-06-07至2018-06-13每天09:00-11:00</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">地址: </span>
										<span class="flex-1">笋岗,园林,岗厦,洪湖</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">价格: </span>
										<span class="flex-1">
											市场价 <del>¥199.99</del> 会员价 
											<span class="color-main">¥0</span>
										</span>
									</p>
								</div>
							</li>
						</a>
						<a href="/courseList/courseDetail">
							<li class="free-c-block p-ten m-l-ten">
								<p class="font-15 color-3">【2018暑】初三物理尖端陪优版</p>
								<div class="font-12 p-t-ten color-9 free-l-detail">
									<p class="flex-box p-b-five">
										<span class="free-b-left">机构: </span>
										<span class="flex-1">新东方</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">课次: </span>
										<span class="flex-1">9课次</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">时间: </span>
										<span class="flex-1">2018-06-07至2018-06-13每天09:00-11:00</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">地址: </span>
										<span class="flex-1">笋岗,园林,岗厦,洪湖</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">价格: </span>
										<span class="flex-1">
											市场价 <del>¥199.99</del> 会员价 
											<span class="color-main">¥0</span>
										</span>
									</p>
								</div>
							</li>
						</a>
						<a href="#/courseList/courseDetail">
							<li class="free-c-block p-ten m-l-ten">
								<p class="font-15 color-3">【2018暑】初三物理尖端陪优版</p>
								<div class="font-12 p-t-ten color-9 free-l-detail">
									<p class="flex-box p-b-five">
										<span class="free-b-left">机构: </span>
										<span class="flex-1">新东方</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">课次: </span>
										<span class="flex-1">9课次</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">时间: </span>
										<span class="flex-1">2018-06-07至2018-06-13每天09:00-11:00</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">地址: </span>
										<span class="flex-1">笋岗,园林,岗厦,洪湖</span>
									</p>
									<p class="flex-box p-b-five">
										<span class="free-b-left">价格: </span>
										<span class="flex-1">
											市场价 <del>¥199.99</del> 会员价 
											<span class="color-main">¥0</span>
										</span>
									</p>
								</div>
							</li>
						</a>
					</ul>
				</div>
			</div>
			
			<div class="discount-class bg-f m-t-ten">
				<!-- 特惠教程 -->
				<a href="#/courseList" class="con-title flex-box justify-s-b p-ten">
					<p class="font-15 color-3 font-b">特惠教程</p>
					<p class="font-12 color-9 flex-box align-center">
						<span>查看全部课程</span>
						<span class="iconfont icon-jiantouyou font-12"></span>
					</p>
				</a>
				<div class="discount-class-wrap">
					<ul>
						<a href="#/courseList/courseDetail">
							<li class="p-ten discount-c-block">
								<p class="font-15 color-3">【2018暑】初三物理尖端陪优版</p>
								<div class="font-12 p-t-ten color-9">
									<p class="flex-box justify-s-b p-b-five">
										<span>机构: 新东方</span>
										<span>课次: 9课次</span>
									</p>
									<p class="p-b-five">时间: 2018-06-06至2018-6-13 每天09:00-11:00</p>
									<p class="p-b-five">地址: 百花旗舰店小区</p>
									<p class="p-b-five">
										<span>价格: 市场价¥1260</span>
										会员价: 
										<span class="font-15 color-main">¥999</span>
									</p>
								</div>
							</li>
						</a>
						<a href="#/courseList/courseDetail">
							<li class="p-ten discount-c-block">
								<p class="font-15 color-3">【2018暑】初三物理尖端陪优版</p>
								<div class="font-12 p-t-ten color-9">
									<p class="flex-box justify-s-b p-b-five">
										<span>机构: 新东方</span>
										<span>课次: 9课次</span>
									</p>
									<p class="p-b-five">时间: 2018-06-06至2018-6-13 每天09:00-11:00</p>
									<p class="p-b-five">地址: 百花旗舰店小区</p>
									<p class="p-b-five">
										<span>价格: 市场价¥1260</span>
										会员价: 
										<span class="font-15 color-main">¥999</span>
									</p>
								</div>
							</li>
						</a>
						<a href="#/courseList/courseDetail">
							<li class="p-ten discount-c-block">
								<p class="font-15 color-3">【2018暑】初三物理尖端陪优版</p>
								<div class="font-12 p-t-ten color-9">
									<p class="flex-box justify-s-b p-b-five">
										<span>机构: 新东方</span>
										<span>课次: 9课次</span>
									</p>
									<p class="p-b-five">时间: 2018-06-06至2018-6-13 每天09:00-11:00</p>
									<p class="p-b-five">地址: 百花旗舰店小区</p>
									<p class="p-b-five">
										<span>价格: 市场价¥1260</span>
										会员价: 
										<span class="font-15 color-main">¥999</span>
									</p>
								</div>
							</li>
						</a>
						<a href="#/courseList/courseDetail">
							<li class="p-ten discount-c-block">
								<p class="font-15 color-3">【2018暑】初三物理尖端陪优版</p>
								<div class="font-12 p-t-ten color-9">
									<p class="flex-box justify-s-b p-b-five">
										<span>机构: 新东方</span>
										<span>课次: 9课次</span>
									</p>
									<p class="p-b-five">时间: 2018-06-06至2018-6-13 每天09:00-11:00</p>
									<p class="p-b-five">地址: 百花旗舰店小区</p>
									<p class="p-b-five">
										<span>价格: 市场价¥1260</span>
										会员价: 
										<span class="font-15 color-main">¥999</span>
									</p>
								</div>
							</li>
						</a>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	/*@import '@/assets/style/index.scss';*/
/*	.home {
		padding-bottom: .7rem;
	}*/
	.p-b-five {
		padding-bottom: .05rem;
	}
	.home-title-warp {
		top: 0;
		left: 0;
		height: .52rem;
		z-index: 1
	}
	.search {
		width: 2.9rem;
		height: .32rem;
		border-radius: .32rem;
	}
	.img-wrap {
		margin-top: .52rem;
		height: 1.5rem;
		background-image: url('https://goss.veer.com/creative/vcg/veer/800water/veer-147150521.jpg')
	}
	.home-content .free-c-block{
		width: 1.8rem;
		border-top: 2px solid $mainBgColor;
		box-shadow: 0px 2px 4px 1px #F9F9F9;
		float: left;
	}
	.home-content .free-c-block .free-b-left {
		width: .35rem;
	}
	.free-class-wrap {
		width: 100%;
		overflow: auto;
		height: 2.4rem;
	}
	.free-class-wrap > ul {
		width: 2000px;
		left: 0;
		top: 0;

	}
	.discount-class-wrap ul .discount-c-block {
		border-top: 1px solid #eee;
	}
	.mint-swipe .mint-swipe-indicators {
		height: 200px;
	}
/*	.mint-swipe-indicators {
		position: fixed;

	}*/
</style>
<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	import Vue from 'vue';

	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	export default {
		data() {
			return {
				imgDate: [
					// {
					// 	image: 'https://goss.veer.com/creative/vcg/veer/800water/veer-147150521.jpg',
					// 	href: '',
					// 	desc: '第一张'
					// },
					{
						image: 'https://operator-advmainimg.zhongxiang51.com/20180720104042.jpg',
						href: 'https://operator-advmainimg.zhongxiang51.com/20180720104042.jpg',
						desc: '第二张'
					},
					{
						image: 'https://operator-advmainimg.zhongxiang51.com/20180720104048.jpg',
						href: 'https://operator-advmainimg.zhongxiang51.com/20180720104042.jpg',
						desc: '第三张'
					}
				]
			}
		},
		methods: {

		}
	}
</script>