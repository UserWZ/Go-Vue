<template>
  <div id="myHeader" class="myHeader">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default{
      data() {
          return {
              msg : '这是一个头部'
          }
      }
  }
</script>

<style lang="">
  .myHeader{
    width:100%;
    height:50px;
    line-height:50px;
    background-color: green;
  }
</style>
