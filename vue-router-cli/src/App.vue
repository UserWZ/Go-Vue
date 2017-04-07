<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0 auto;
    margin-top: 60px;
    width:30%;
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
  .nav-list{
    margin-top:100px;
    padding-bottom: 20px;
  }
  .router-link-active { color: red }
</style>
<template>
  <div id="app">
    <my-article :logo="logoMsg"></my-article>
    <img src="./assets/logo.png" v-on:click="get()">
    <div class="nav-list animated bounceInLeft" ref="one">
      <router-link class="nav-item" to="/" exact v-show="true">首页</router-link>
      <router-link class="nav-item" to="/first">页面一</router-link>
      <router-link class="nav-item" to="/second">页面二</router-link>
      <ThirdPage></ThirdPage>
    </div>
    <div>
      <router-view class="animated fadeIn nav-item"></router-view>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import myArticle from './component/myArticle.vue'
export default {
  name: 'app',
  data () {
    return {
      a:1,
      msg:'',
      logoMsg:'sublime fans!'
    }
  },
  mounted (){
    console.log(this.$children[0].$el)
  },
  methods: {
        get:function () {
          this.$http.get('../src/data/a.txt').then(function(res){
              alert(res.data);
          },function(){
              alert('false')
          });
        }
  },
  components:{
    myArticle
  }
}
//新组件
Vue.component('ThirdPage',{
    template:'<a class="nav-item" href="#/third">页面三</a>'
})
</script>


