<template>
	<div class="zx-button">
		<button class="font-15" :class="className">{{ value }}</button>
	</div>
</template>
<style lang="scss">
	/*@import '@/assets/style/index.scss';*/
	.zx-button {
		display: inline-block;
	}
	.zx-button > button {
		padding: .06rem .15rem;
		background: none;
		border-radius: 4px;
		border-width: 1px;
		border-style: solid;;
	}
	.zx-button > .default {
		border-color: #ccc;
		color: #666;
	}
	.zx-button > .confirm {
		background: $mainBgColor;
		border-color: $mainBgColor;
		color: #fff;
	}
</style>
<script>
	/**
	 * 按钮组件使用方法
	 * <zx-button vlaue="取消订单" type="confirm"></zx-button>
	 *
	 * value: 按钮文字	  默认"按钮"
	 * type:  按钮的类型  有default, confirm 默认"default"
	 * 
	 */
	export default {
		props: {
			value: {
				default: () => {
					return '按钮'
				}
			},
			type: {
				default: () => {
					return 'default'
				}
			}
		},
		data() {
			return {
				className: 'default'
			}
		},
		mounted() {
			this.choseType();
		},
		methods: {
			choseType() {
				if(this.type == 'confirm') {
					this.className = 'confirm'
				} else {
					this.className = 'default';
				}
			}
		}
	}
</script>