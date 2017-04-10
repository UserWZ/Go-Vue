<template>
  <div id="app">
    <phHeader></phHeader>
    <ZASD-Page></ZASD-Page>  
  </div>
</template>

<script>
import phHeader from './components/PH-Header.vue'
import ZASDPage from './views/ZASD/ZASD.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    phHeader,
    ZASDPage
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
  overflow: hidden;
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
