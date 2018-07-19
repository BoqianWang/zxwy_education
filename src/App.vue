<template>
  <div id="app">
		<transition name="transfor">
			<router-view></router-view>
		</transition>
    	<!-- <router-view/> -->
  </div>
</template>
<style scoped>
	.transfor-leave-active,
	.transfor-enter-active {
	   position: absolute;
	   left: 0;
	   top: 0;
	   width: 100%;
	   height: 100%;
	}
	.transfor-leave-active {
	   animation: fadeLeave .4s;
	}
	.transfor-enter-active {
	   animation: fadeEnter .4s;
	}
	@keyframes fadeEnter {
	    from {
	      opacity: 0;
	      transform: translateX(100%);
	    }
	    to {
	      opacity: 1;
	      transform: translateX(0);
	    }
	}
	@keyframes fadeLeave {
	   from {
	      opacity: 1;
	      transform: translateX(0%);
	   }

	   to {
	     opacity: 0;
	     transform: translateX(-100%);
	   }
	}
</style>

<script>
export default {
  name: 'App'
}
</script>

