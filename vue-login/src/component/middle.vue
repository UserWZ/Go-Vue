<template>
  <div class="middle-box" id="middleBox">
    <img src="../assets/img/数据组.png" alt="">
    <!--登录框-->
    <loginComponent></loginComponent>
  </div>
</template>
<script>
  import loginComponent from './login.vue'
    export default {
        name: '',
        data () {
            return {}
        },
        components:{
          loginComponent
        }
    }
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .middle-box {
    position: relative;
    top: 50%;
    -webkit-transform:translateY(-50%) ;
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
</style>
