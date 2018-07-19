<template>
	<div class="my">
		<div class="my-title flex-box align-center justify-center">
			<div class="t-img-wrap bg-size-cover" style="background-image: url(https://pic.qqtn.com/up/2018-7/2018071309280798237.jpg);"></div>
			<p class="font-12 color-3 p-t-ten">用户昵称</p>
		</div>
		<div class="my-content">
			<a href="#/orderList" class="p-ten flex-box justify-s-b bg-f align-center">
				<p class="font-15 color-3">订单管理</p>
				<p class="font-12">
					<span class="color-9">查看全部订单</span>
					<span class="iconfont icon-jiantouyou font-12 color-9"></span>
				</p>
			</a>
			<div class="order-list bg-f flex-box font-12">
				<div class="order-block text-center flex-1">
					<a href="#/orderList">
						<img src="../../assets/images/my/unpaid.png" alt="">
						<p class="color-6">待支付</p>
					</a>
				</div>
				<div class="order-block text-center flex-1">
					<a href="#/orderList">
						<img src="../../assets/images/my/paid.png" alt="">
						<p class="color-6">已支付</p>
					</a>
				</div>
				<div class="order-block text-center flex-1">
					<a href="#/orderList">
						<img src="../../assets/images/my/apply.png" alt="">
						<p class="color-6">报名成功</p>
					</a>
				</div>
				<div class="order-block text-center flex-1">
					<a href="#/orderList">
						<img src="../../assets/images/my/used.png" alt="">
						<p class="color-6">已使用</p>
					</a>
				</div>
				<div class="order-block text-center flex-1">
					<a href="#/orderList">
						<img src="../../assets/images/my/expire.png" alt="">
						<p class="color-6">已支付</p>
					</a>
				</div>
				<div class="order-block text-center flex-1">
					<a href="#/orderList">
						<img src="../../assets/images/my/cancel.png" alt="">
						<p class="color-6">取消</p>
					</a>
				</div>
			</div>
			<div class="m-t-ten">
				<a href="#/free" class="p-ten flex-box justify-s-b align-center bg-f">
					<p class="font-15 color-3">免费权益</p>
					<p class="font-12">
						<span class="color-9">
							剩余<span class="color-money">8</span>次
						</span>
						<span class="iconfont icon-jiantouyou font-12 color-9"></span>
					</p>
				</a>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
	@import '@/assets/style/index.scss';
	.my-title {
		height: 1.5rem;
		background: -webkit-linear-gradient(top, $mainGradientColor, $mainfontColor);
		flex-direction: column;
		.t-img-wrap {
			height: .7rem;
			width: .7rem;
			border-radius: 50%;
		}
	}
	.my-content > .order-list {
		padding: .2rem .1rem;
	}
	.order-list {
		border-top: 1px solid #eee;
	}
	.order-list .order-block img {
		height: .5rem;
		width: .5rem;
	}
	.order-list .order-block + .order-block {
		padding-left: .1rem;
	}
</style>
<script>
	export default {

	}
</script>