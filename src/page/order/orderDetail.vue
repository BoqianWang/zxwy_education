<template>
	<div class="order-detail">
		<div class="order-d-title flex-box align-center">
			<div class="color-f">
				<p class="font-15 p-b-ten">订单状态</p>
				<p class="font-12 p-b-ten">订单编号: 1212365546456</p>
				<p class="font-12 p-b-ten">下单时间: 2018-12-12 22:23:04</p>
			</div>
		</div>
		<div class="order-content">
			<a href="##">
				<div class="bg-f m-t-ten o-detial-block">
					<p class="font-15 color-3 p-b-ten">【2018暑假】初一英语暑假提高班</p>
					<div class="font-12 color-9">
						<p class="p-t-five">时间: 2018-06-07至2018-06-13 每天09:00-11:00</p>
						<p class="p-t-five">地址: 百花旗舰校区</p>
						<p class="p-t-five flex-box align-center">
							<span class="flex-1">
								价格: 市场价 <del>¥1260</del>
							</span>
							<span class="flex-1">
								会员价: <span class="font-15">¥999</span>
							</span>
						</p>
						<p class="color-money">
							<span>听课证号: 1234156</span>
						</p>
					</div>
				</div>
			</a>
			<div class="sure-pay-wrap p-ten color-3 flex-box justify-s-b font-15 bg-f m-t-ten">
				<span>实付金额</span>
				<span>999元</span>
			</div>
		</div>
		<div class="detail-footer fixed width-100 bg-f font-15">
			<zx-button class="p-r-ten" value="取消订单" type="default"></zx-button>
			<zx-button class="p-r-ten" value="去支付" type="confirm"></zx-button>
		</div>
	</div>
</template>
<style scoped lang="scss">
	@import '@/assets/style/index.scss';
	.p-t-five {
		padding-bottom: .05rem;
	}
	.order-d-title {
		height: 1.2rem;
		padding-left: .5rem;
		background: -webkit-linear-gradient(top, $mainGradientColor, $mainBgColor);
	}
	.o-detial-block {
		padding: .2rem .1rem;
	}

	.detail-footer {
		height: .5rem;
		line-height: .5rem;
		left: 0;
		bottom: 0;
		text-align: right;
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