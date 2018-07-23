<template>
	<div class="font-15">
		<div class="">
			<mt-cell title="身份证">
			 <input v-model="nameCard" class="input_auth" oninput="if(value.length>18) value=value.slice(0,18)" type="number" placeholder="请输入本人身份证号" maxlength="18">
			</mt-cell>
			<mt-cell title="姓名">
			 <input v-model="name" class="input_auth"  type="text" placeholder="请输入本人姓名">
			</mt-cell>
			<mt-cell title="所在城市" is-link>
			  <span >深圳</span>
			</mt-cell>
		</div>
		<p style="margin-top:0.2rem;margin-left:0.1rem;color:#333;">请上传身份证照片</p>
		<div class="flex-box align-center" style="justify-content:space-around">
			<div class="img_box front"  @click.stop="addPic">
				<img src="../../assets/images/my/smrz_pic_sfzfm.png" alt="">
				<input ref="frontinput" type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" style="display:none;">
			</div>
			<div class="img_box obverse">
				<img src="../../assets/images/my/smrz_pic_sfzzm.png" alt="">
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.input_auth{
	text-align: right;
	font-size: 15px;
}
.img_box{
	width: 1.7rem;
	height: 1.1rem;
	border: 1px dashed #ccc;
	margin:0.1rem 0;
	img{
		width: 100%;
		height: 100%;
	}
}
</style>
<script>
import { Cell } from 'mint-ui';
import Vue from 'vue';
Vue.component(Cell.name, Cell);
	export default {
		data(){
			return{
				nameCard:'',
				name:''
			}
		},
		methods:{
			addPic(){
				this.$refs["frontinput"].trigger('click');
				return false;
			}
		}
	}
</script>
