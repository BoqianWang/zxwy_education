<template>
	<div class="login font-15">
		<div class="flex-box align-center justify-s-b">
			<div class="phoneBox flex-box align-center">
				<span class="iconfont icon-shouji icon_login"></span>
				<input v-model="phone" class="input_login" oninput="if(value.length>11) value=value.slice(0,11)" type="number" placeholder="请输入手机号" maxlength="11">
			</div>
			<codeButton :start='start' @countDown='start=false' @click.native='sendCode'> </codeButton>
		</div>

		<div class="flex-box align-center codeBox">
			<span class="iconfont icon-yuechi icon_login"></span>
			<input v-model="code" class="input_login" oninput="if(value.length>6) value=value.slice(0,6)" type="number" placeholder="请输入短信验证码" maxlength="6">
		</div>

		<div class="flex-box align-center" style="justify-content:flex-end;">
			<a href="#/register" style="color:#676355;">新用户登录</a>
		</div>

		<div class="flex-box align-center justify-center login_btn" @click="loginClick">
			登录
		</div>
	</div>
</template>
<style lang="scss" scoped>
.login{
	padding: .3rem .2rem;
}
.flex-box{
	height: 0.44rem;
}
.phoneBox{
	width: 1.96rem;
	height: 100%;
	border-radius: 0.04rem;
	border: 1px solid;
	border-color: #ccc;
}
.codeBox{
	margin-top: 0.2rem;
	width: 100%;
	border-radius: 0.04rem;
	border: 1px solid;
	border-color: #ccc;
}
.icon_login{
	padding: 0 0.1rem;
	font-size: 0.2rem;
	border-right: 1px solid #ccc;
}
.input_login{
	height: 100%;
	background-color: inherit;
	font-size: 0.15rem;
	margin-left: 0.1rem;
}
.login_btn{
	width: 100%;
	background-color: $mainBgColor;
	color: white;
	border-radius: 0.04rem;
	font-size: 0.17rem;
	margin-top: 0.2rem;
}
</style>
<script>
import { Toast} from 'mint-ui';
import Vue from 'vue';
Vue.component(Toast);
	import codeButton from '../../components/button/CodeButton.vue'
	export default {
		components:{
			codeButton
		},
		data(){
			return{
				start:false,
				phone:'',
				code:''
			}
		},
		methods:{
			sendCode(){
				if(this.start) return;
				this.start = true;
			},
			loginClick(){
				if(this.phone.length!=11){
					Toast("填输入正确的手机号");
					return;
				}
				if(this.code.length<1){
					Toast("填输入短信验证码");
					return;
				}

			}
		}
	}
</script>
