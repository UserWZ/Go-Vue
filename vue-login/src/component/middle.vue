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
    position: absolute;
    top: 50%;
    margin-top: -290px;
    width: 90%;
    height: 580px;
  }
</style>
