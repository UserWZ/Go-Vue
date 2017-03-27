<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <input v-model="msg">
    <!--组件title-->
    <firstcomponent></firstcomponent>
  </div>
</template>

<script>
//组件引入的位置
import firstcomponent from './component/firstcomponent.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'this is vue'
    }
  },
  components:{
    firstcomponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
</style>
