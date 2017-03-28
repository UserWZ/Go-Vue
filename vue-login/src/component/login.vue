<template>
  <div class="login-box">
    <!--标题-->
    <h1>{{title}}</h1>
    <form action="">

    </form>
  </div>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                title:'反电诈大数据系统'
            }
        }
    }
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .login-box{
    position: absolute;
    top:50%;
    left:50%;
    margin-top: -210px;
    margin-left: 50px;
    width:371px;
    height:420px;
    box-shadow: 0 0 10px 5px rgba(90,90,90,.5);
    background-color: #fff;
  }
  .login-box h1 {
    margin: 50px 0 58px 0;
    text-align: center;
    color: #024c7c;
  }
</style>
