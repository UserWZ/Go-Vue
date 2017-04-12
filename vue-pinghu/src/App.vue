<template>
  <div id="app">
    <phHeader></phHeader>
    <div>
      <router-view></router-view>
    </div>
    <phFooter></phFooter>
  </div>
</template>
<script>
import phHeader from './components/PH-Header.vue'
import phFooter from './components/PH-Footer.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    phHeader,
    phFooter
  }
}
</script>

<style>
#app {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 1520px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: auto;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.ph-header{
    width: 100%;
    height: 70px;
  }
  .ph-header .layui-nav{
    background-color: #40C5CC;
  }
  .ph-header .layui-nav a{
    color: #fff;
  }
  .ph-header .layui-nav .ph-title,.ph-header .layui-nav .ph-user{
    margin-left: 0!important;
  }
  .ph-header .layui-nav .ph-title a{
    padding-left: 0!important;
    font-size: 16px!important;
  }
  .ph-header .layui-nav .ph-user a{
    padding-left: 0!important;
  } 
  .ph-header .layui-nav .link-page-title:hover{
    background-color: #16979E;
  }
</style>
