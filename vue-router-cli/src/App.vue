<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="nav-list">
      <router-link class="nav-item" to="/" exact>首页</router-link>
      <router-link class="nav-item" to="/first">页面一</router-link>
      <router-link class="nav-item" to="/second">页面二</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
}
</script>

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
