<template>
	<div class="index">
		<transition name="fade">
			<router-view></router-view>
		</transition>
		<tab-bar></tab-bar>
	</div>
</template>
<style scoped>
	.index {
		padding-bottom: .7rem;
	}	
	.fade-leave-active {
	   transform-origin: 0% 0%;
	   position: absolute;
	   width: 100%;
	   left: 0;
	   right: 0;
	   animation: fadeLeave .5s;
	}
	.fade-enter-active {
	   position: absolute;
	   width: 100%;
	   left: 0;
	   right: 0;
	   animation: fadeEnter .5s;
	}
	@keyframes fadeEnter {
	    from {
	      opacity: 0;
	    }
	    to {
	      opacity: 1;
	    }
	}
	@keyframes fadeLeave {
	   from {
	      opacity: 1;
	      /*transform: rotate(0deg);*/
	   }
/*	   40% {
	      transform: rotate(10deg);
	   }*/
	   to {
	     opacity: 0;
	     /*transform: translate3d(0, 2000px, 0);*/
	   }
	}
</style>
<script>
	import tabBar from '@/components/tabBar/tabBar.vue';
	export default {
		components: {
			tabBar
		},
		data() {
			return {
				
			}
		},
		methods: {

		}
	}
</script>