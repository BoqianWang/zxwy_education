<template>
	<div class="order-list">
		<div class="fixed width-100 order-list-title bg-f">
			<div class="height-100 flex-box color-6 font-12 text-center">
				<span class="flex-1 rel active">待支付</span>
				<span class="flex-1 rel">已支付</span>
				<span class="flex-1 rel">报名成功</span>
				<span class="flex-1 rel">已使用</span>
				<span class="flex-1 rel">已过期</span>
				<span class="flex-1 rel">取消</span>
			</div>
		</div>
		<div class="order-content">
			<ul>
				<li class="bg-f m-b-ten">
					<p class="p-ten flex-box eduction-name align-center justify-s-b">
						<span class="font-15 color-3">新东方</span>
						<span class="font-12 color-9">待支付</span>
					</p>
					<a href="#/orderList/orderDetail">
						<div class="order-desc">
							<p class="color-3 font-15 p-b-five">【2018暑】托福直通车初级起点班</p>
							<div class="font-13 color-9">
								<p class="p-b-five">时间: 2018-07-16至2018-08-22 每天08:00-11:00</p>
								<p class="p-b-five">新田厦国际VIP中心</p>
								<p>
									价格: 市场价¥30800 会员价
									<span class="color-main font-15">¥27999</span>
								</p>
							</div>
						</div>
					</a>
					<div class="flex-box justify-s-b align-center font-15 to-pay">
						<p>
							<span class="color-6">实付款: </span>
							<span class="color-money">27999元</span>
						</p>
						<p>
							<zx-button value="去支付" type="confirm"></zx-button>
						</p>
					</div>
				</li>
			
				<li class="bg-f m-b-ten">
					<p class="p-ten flex-box eduction-name align-center justify-s-b">
						<span class="font-15 color-3">机构名称</span>
						<span class="font-12 color-9">审核中</span>
					</p>
					<a href="#/orderList/orderDetail">
						<div class="order-desc">
							<p class="color-3 font-15 p-b-five">【2018暑】托福直通车初级起点班</p>
							<div class="font-13 color-9">
								<p class="p-b-five">时间: 2018-07-16至2018-08-22 每天08:00-11:00</p>
								<p class="p-b-five">新田厦国际VIP中心</p>
								<p>
									价格: 市场价¥30800 会员价
									<span class="color-main font-15">¥27999</span>
								</p>
							</div>
						</div>
					</a>
					<div class="flex-box justify-s-b align-center font-15 to-pay">
						<p>
							<span class="color-6">实付款: </span>
							<span class="color-money">27999元</span>
						</p>
						<p>
							<zx-button value="取消订单" type="default"></zx-button>
						</p>
					</div>
				</li>
				<li class="bg-f m-b-ten">
					<p class="p-ten flex-box eduction-name align-center justify-s-b">
						<span class="font-15 color-3">新东方</span>
						<span class="font-12 color-9">待支付</span>
					</p>
					<a href="#/orderList/orderDetail">
						<div class="order-desc">
							<p class="color-3 font-15 p-b-five">【2018暑】托福直通车初级起点班</p>
							<div class="font-13 color-9">
								<p class="p-b-five">时间: 2018-07-16至2018-08-22 每天08:00-11:00</p>
								<p class="p-b-five">新田厦国际VIP中心</p>
								<p>
									价格: 市场价¥30800 会员价
									<span class="color-main font-15">¥27999</span>
								</p>
							</div>
						</div>
					</a>
					<div class="flex-box justify-s-b align-center font-15 to-pay">
						<p>
							<span class="color-6">实付款: </span>
							<span class="color-money">27999元</span>
						</p>
						<p>
							<zx-button value="去支付" type="confirm"></zx-button>
						</p>
					</div>
				</li>
			
				<li class="bg-f m-b-ten">
					<p class="p-ten flex-box eduction-name align-center justify-s-b">
						<span class="font-15 color-3">机构名称</span>
						<span class="font-12 color-9">审核中</span>
					</p>
					<a href="#/orderList/orderDetail">
						<div class="order-desc">
							<p class="color-3 font-15 p-b-five">【2018暑】托福直通车初级起点班</p>
							<div class="font-13 color-9">
								<p class="p-b-five">时间: 2018-07-16至2018-08-22 每天08:00-11:00</p>
								<p class="p-b-five">新田厦国际VIP中心</p>
								<p>
									价格: 市场价¥30800 会员价
									<span class="color-main font-15">¥27999</span>
								</p>
							</div>
						</div>
					</a>
					<div class="flex-box justify-s-b align-center font-15 to-pay">
						<p>
							<span class="color-6">实付款: </span>
							<span class="color-money">27999元</span>
						</p>
						<p>
							<zx-button value="取消订单" type="default"></zx-button>
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<style scoped lang="scss">
	/*@import '@/assets/style/index.scss';*/
	.p-b-five {
		padding-bottom: .05rem;
	}
	.font-13 {
		font-size: .13rem;
	}
	.order-list-title {
		height: .4rem;
		line-height: .4rem;
		left: 0;
		top: 0;
		z-index: 1;
	}
	.order-list-title .active:after {
		content: "";
		position: absolute;
		left: 50%;
		bottom: 0;
		width: 60%;
		height: 2px;
		background: $mainBgColor;
		transform: translate3d(-50%, 0, 0);
	}
	.order-content {
		padding-top: .5rem;
	}
	.order-content .eduction-name,
	.order-content .order-desc,
	.order-list-title {
		border-bottom: 1px solid #eee;
	}
	.order-content .order-desc {
		padding: .2rem .1rem;
	}

	.to-pay {
		padding: .05rem .1rem;
	}
</style>
<script>
	import zxButton from '@/components/button/zxButton.vue';
	export default {
		components: {
			zxButton
		}
	}
</script>