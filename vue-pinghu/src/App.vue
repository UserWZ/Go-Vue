<template>
  <div id="app">
    <phHeader></phHeader>
    <!-- <ZASD-Page></ZASD-Page>  --> 
    <!-- <div id="ph-header" class="ph-header">
      <ul class="layui-nav">
        <li class="layui-nav-item">
          <img src="./assets/images/logo.jpg" height="69" width="67" alt="">
        </li>
        <li class="layui-nav-item ph-title">
          <a href="">平湖人案智能系统</a>
        </li>
        <li class="layui-nav-item link-page-title">
          <router-link to="/">首页</router-link>
        </li>
        <li class="layui-nav-item link-page-title">
          <a href="">案件管理</a>
        </li>
        <li class="layui-nav-item link-page-title">
          <a href="">相似度分析页面</a>
        </li> 
        <li class="layui-nav-item link-page-title">
          <a href="">关系分析</a>
        </li>
        <li class="layui-nav-item link-page-title">
          <a href="">可视化深度分析</a>
        </li>
        <li class="layui-nav-item link-page-title">
          <router-link to="/ZASD">统计分析</router-link>
        </li>
        <li class="layui-nav-item link-page-title">
          <a href="">预警</a>
        </li>
        <li class="layui-nav-item link-page-title">
          <a href="">文本案件结构化</a>
        </li>
        <li class="layui-nav-item link-page-title">
          <a href="">系统管理</a>
        </li>
        <li class="layui-nav-item">
          <img src="./assets/images/system-person.gif" height="29" width="26" alt="">
        </li>
        <li class="layui-nav-item ph-user">
          <a href="">用户名</a>
        </li>
      </ul>
    </div> -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import phHeader from './components/PH-Header.vue'
/*import ZASDPage from './views/ZASD/ZASD.vue'*/
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    phHeader,
    /*ZASDPage*/
  }
}
</script>

<style>
#app {
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
