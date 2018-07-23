<template>
     <div class="telBox">
        <button class="code_btn" v-bind:class='{code_active_btn:!start}'>{{time | change}}</button>
     </div>
</template>

<script>
    export default {
        data () {
            return {
                time : '获取验证码',
            }
        },
        props : {
            start : {
                type : Boolean
            }
        },
        watch : {
            start (value,oldvalue) {
                if(value == true){
                    this.countDown()
                }
            }
        },
        methods: {
            countDown () {
                this.time = 10;
                let time = setInterval(()=>{
                    this.time --
                    if(this.time == 0){
                        this.$emit('countDown')
                        this.time = '获取验证码'
                        clearInterval(time)
                    }
                },1000)
            }
        },
        filters : {
            change (value) {
               if(!value) return ""
               if(!isNaN(value)){
                       return `重新发送${value}S`

               }else{
                   return value
               }
            }
        }

    }
</script>

<style lang="scss" scoped>
.telBox{
  // height:0.44rem;
}
.code_btn{
  width:1.2rem;
  height:0.44rem;
  line-height: 0.44rem;
  font-size: 0.15rem;
  text-align: center;
  background-color:#ffc60b;
  color: white;
  opacity: 0.5;
  border-radius: 0.04rem;
}
.code_active_btn{
  opacity: 1.0;
}
</style>
