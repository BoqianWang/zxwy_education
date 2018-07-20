<template>
	<div class="shop-cart">
		<div class="shop-cart-title font-15">
			<div class="edit bg-f text-right" v-show="isSeletedStauts" @click="changeSeletedStauts">
				<p class="color-main p-ten">编辑</p>
			</div>
			<div class="delete-wrap text-right m-b-ten" v-show="!isSeletedStauts">
				<p class="p-ten bg-f" @click="changeSeletedStauts">
					<span class="btn color-main">完成</span>
				</p>
				<p class="p-ten flex-box justify-s-b" style="background: #F2F2F2;" @click="changeSeletedStauts">
					<span class="flex-box align-center">
						<span class="select-circle font-15 iconfont"></span>
						<span class="p-l-ten color-6">全选</span>
					</span>
					<span class="btn btn-delete color-money">删除</span>
				</p>
			</div>
		</div>
		<div class="shop-cart-content">
			<div class="shop-cart-block flex-box font-15 border-b bg-f m-b-ten">
				<div class="select-circle font-15 iconfont icon-gouxuan"></div>
				<div class="flex-1 p-l-ten">
					<p class="color-3">【2018暑假】初一英语书记爱提高班</p>
					<div class="cart-desc font-12 color-9">
						<p class="p-t-ten">机构: 新东方</p>
						<p class="p-t-five">课次: 9课次</p>
						<p class="p-t-five">时间: 2018-06-07至2018-06-13 每天09:00-11:00</p>
						<p class="p-t-five">地址: 百花旗舰校区</p>
						<p class="flex-1 p-t-five">
							<span>
								价格: 市场价<del>¥1260</del>
							</span>
							<span>
								会员价<span class="color-mian">¥999</span>
							</span>
						</p>
					</div>
				</div>
			</div>
			<div class="shop-cart-block flex-box font-15 border-b bg-f m-b-ten">
				<div class="select-circle font-15 iconfont icon-gouxuan"></div>
				<div class="flex-1 p-l-ten">
					<p class="color-3">【2018暑假】初一英语书记爱提高班</p>
					<div class="cart-desc font-12 color-9">
						<p class="p-t-ten">机构: 新东方</p>
						<p class="p-t-five">课次: 9课次</p>
						<p class="p-t-five">时间: 2018-06-07至2018-06-13 每天09:00-11:00</p>
						<p class="p-t-five">地址: 百花旗舰校区</p>
						<p class="flex-1 p-t-five">
							<span>
								价格: 市场价<del>¥1260</del>
							</span>
							<span>
								会员价<span class="color-mian">¥999</span>
							</span>
						</p>
					</div>
				</div>
			</div>
			<div class="shop-cart-block flex-box font-15 border-b bg-f m-b-ten">
				<div class="select-circle font-15 iconfont"></div>
				<div class="flex-1 p-l-ten">
					<p class="color-3">【2018暑假】初一英语书记爱提高班</p>
					<div class="cart-desc font-12 color-9">
						<p class="p-t-ten">机构: 新东方</p>
						<p class="p-t-five">课次: 9课次</p>
						<p class="p-t-five">时间: 2018-06-07至2018-06-13 每天09:00-11:00</p>
						<p class="p-t-five">地址: 百花旗舰校区</p>
						<p class="flex-1 p-t-five">
							<span>
								价格: 市场价<del>¥1260</del>
							</span>
							<span>
								会员价<span class="color-mian">¥999</span>
							</span>
						</p>
					</div>
				</div>
			</div>
			<div class="shop-cart-block flex-box font-15 border-b bg-f m-b-ten">
				<div class="select-circle font-15 iconfont"></div>
				<div class="flex-1 p-l-ten">
					<p class="color-3">【2018暑假】初一英语书记爱提高班</p>
					<div class="cart-desc font-12 color-9">
						<p class="p-t-ten">机构: 新东方</p>
						<p class="p-t-five">课次: 9课次</p>
						<p class="p-t-five">时间: 2018-06-07至2018-06-13 每天09:00-11:00</p>
						<p class="p-t-five">地址: 百花旗舰校区</p>
						<p class="flex-1 p-t-five">
							<span>
								价格: 市场价<del>¥1260</del>
							</span>
							<span>
								会员价<span class="color-mian">¥999</span>
							</span>
						</p>
					</div>
				</div>
			</div>
			<div class="shop-cart-block flex-box font-15 border-b bg-f m-b-ten">
				<div class="select-circle font-15 iconfont"></div>
				<div class="flex-1 p-l-ten">
					<p class="color-3">【2018暑假】初一英语书记爱提高班</p>
					<div class="cart-desc font-12 color-9">
						<p class="p-t-ten">机构: 新东方</p>
						<p class="p-t-five">课次: 9课次</p>
						<p class="p-t-five">时间: 2018-06-07至2018-06-13 每天09:00-11:00</p>
						<p class="p-t-five">地址: 百花旗舰校区</p>
						<p class="flex-1 p-t-five">
							<span>
								价格: 市场价<del>¥1260</del>
							</span>
							<span>
								会员价<span class="color-mian">¥999</span>
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="shop-cart-footer width-100 bg-f fixed" v-show="isSeletedStauts">
			<div class="height-100 flex-box align-center justify-s-b font-15">
				<p class="p-l-ten flex-box align-center">
					<span class="select-circle font-15 iconfont"></span>
					<span class="p-l-ten color-6">全选</span>
				</p>
				<p class="p-r-ten" @click="toPay">
					<span class="p-r-ten">
						<span class="color-6">合计:&nbsp;</span>
						<span class="color-money">999元</span>
					</span>
					<zx-button type="confirm" value="结 算"></zx-button>
				</p>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
	.border-b {
		border-bottom: 1px solid #eee;
		border-top: 1px solid #eee;
	}
	.p-t-five {
		padding-bottom: .05rem;
	}
	.delete-wrap .btn {
		padding: .02rem .2rem;
		border: 1px solid $mainBgColor;
		border-radius: 4px;
	}
	.delete-wrap .btn.btn-delete {
		border: 1px solid $money;
	}
	.text-right {
		text-align: right;
	}
	.shop-cart-content {
		padding-bottom: .7rem;
	}
	.shop-cart-content .shop-cart-block {
		padding: .2rem .1rem;
	}
	.select-circle {
		display: inline-block;
		width: .2rem;
		height: .2rem;
		border: 1px solid #908c8c;
		border-radius: 50%;
	}
	.select-circle.icon-gouxuan {
		border: 1px solid $money;
		background: $money;
		line-height: .2rem;
		text-align: center;
		color: #fff;
	}

	.shop-cart-footer {
		height: .5rem;
		border-top: .1px solid #eee;
		left: 0;
		bottom: 0;
	}
</style>
<script>
	import zxButton from '@/components/button/zxButton.vue';
	export default {
		components: {
			zxButton
		},
		data() {
			return {
				isSeletedStauts: true
			}
		},
		methods: {
			changeSeletedStauts() {
				this.isSeletedStauts = !this.isSeletedStauts;
			},
			toPay() {
				this.$router.push({
					path: '/shopCart/paySuccess'
				})
			}
		}
	}
</script>