<template>
	<div class="course-detail">
		<div class="detail-title bg-f">
			<p class="font-15 color-3 p-b-ten">【2018暑 初一英语暑假提高班】</p>
			<div class="font-14 color-9">
				<p class="flex-box justify-s-b p-b-five">
					<span>机构: 新东方</span>
					<span>课次: 9课次</span>
				</p>
				<p class="p-b-five">
					<span>时间: </span>
					<span>2018-06-07至2018-06-13 每天09:00-11:00</span>
				</p>
				<div class="flex-box p-b-five align-center">
					<p class="flex-1">
						<span>价格: </span>
						<span class="color-money font-15">¥999</span>
						<span>会员价</span>
					</p>
					<p class="flex-1">
						<span>¥1260市场价</span>
					</p>
				</div>
			</div>
		</div>
		<div class="chose-address m-t-ten m-b-ten p-ten bg-f flex-box justify-s-b align-center">
			<p class="font-15">网点选择</p>
			<p class="font-12 color-9">
				<span>百花旗舰店</span>
				<span class="iconfont icon-jiantouyou font-12"></span>
			</p>
		</div>
		<div class="detail-content p-ten bg-f">
			<div class="font-15 font-b p-b-ten d-cont-title">课程说明</div>
			<div class="p-t-ten">
				<div class="course-detail-wrap m-t-ten">
					<p class="d-w-title p-l-ten font-14 color-3">课程介绍</p>
					<div class="p-ten font-12 color-6">
						以初一上学期的英语基本知识为载体，利用新东方独特的教
						学法，通过深入浅出的讲解帮助学员在初中开始阶段占得学
						习先机，快速完成学习转型。享受独到的优能中学课程服务
						体系。严格的考勤管理，以学员为中心的课堂管理机制，针
						对性的课后训练。更多的增值服务等待学员家长来亲身体验。
					</div>
				</div>
				<div class="course-detail-wrap m-t-ten">
					<p class="d-w-title p-l-ten font-14 color-3">适用学员</p>
					<div class="p-ten font-12 color-6">
						<p>1、新初一学员</p>
						<p>2、想学习初一上学期课程的学生</p>
						<p>3、需要查缺补漏、复习初一知识的初二学生</p>
						<p>4、新初一学员</p>
						<p>5、想学习初一上学期课程的学生</p>
						<p>6、需要查缺补漏、复习初一知识的初二学生</p>
					</div>
				</div>
				<div class="course-detail-wrap m-t-ten">
					<p class="d-w-title p-l-ten font-14 color-3">教学目标</p>
					<div class="p-ten font-12 color-6">
						<p>1、快速掌握初一上学期英语基本知识</p>
						<p>2、能够正确解答初一上学期的基本题目</p>
						<p>3、完成学习习惯的转型。</p>
						<p>4、快速掌握初一上学期英语基本知识</p>
						<p>5、能够正确解答初一上学期的基本题目</p>
						<p>6、完成学习习惯的转型。</p>
					</div>
				</div>
			</div>
		</div>
		<div class="footer fixed width-100 font-15 bg-f">
			<div class="flex-box height-100 align-center justify-s-b p-l-ten p-r-ten">
				<div class="p-l-ten">
					<span class="iconfont icon-cart color-9"></span>
				</div>
				<div>
					<zx-button class="p-r-ten" value="加入购物车" type="default"></zx-button>
					<zx-button @click.native="toPay" value="立即报名" type="confirm"></zx-button>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
	/*@import '@/assets/style/index.scss';*/
	.detail-title {
		padding: .2rem .1rem;
		border-bottom: 1px solid #eee;
	}
	.p-b-five {
		padding-bottom: .05rem;
	}
	.font-14 {
		font-size: .14rem;
	}
	.course-detail {
		padding-bottom: .7rem;
	}
	.detail-content > .d-cont-title {
		border-bottom: 1px solid #eee;
	}
	.course-detail-wrap {
		line-height: .2rem;
	}
	.course-detail-wrap .d-w-title {
		border-left: 2px solid $mainBgColor;
	}
	.footer {
		border-top: 1px solid #eee;
		height: .5rem;
		left: 0;
		bottom: 0;
		z-index: 1;
		.icon-cart {
			font-size: .28rem;
		}
	}
</style>
<script>
	import zxButton from '@/components/button/zxButton.vue';
	export default {
		components: {
			zxButton
		},
		methods: {
			toPay() {
				this.$router.push({
					path: '/shopCart'
				})
			}
		}
	}
</script>