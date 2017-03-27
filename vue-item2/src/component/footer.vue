<template>
  <div id="myFooter" class="myFooter">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg:"这是一个尾部"
        }
    }
}
</script>

<style>
  .myFooter{
    width:100%;
    height:50px;
    line-height:50px;
    background-color: darkred;
  }
</style>
