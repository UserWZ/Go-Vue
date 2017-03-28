<template>
  <div id="app">
    <!--中间区域-->
    <middleComponent></middleComponent>
  </div>
</template>

<script>
  import middleComponent from './component/middle.vue'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
    middleComponent,
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  padding: 0 10%;
  background:url("./assets/img/登录界面2-拷贝.gif");
  min-width: 1200px;
}


</style>
