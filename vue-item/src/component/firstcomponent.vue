<template>
  <div id="firstcomponent">
    <h1>i am a title.</h1>
    <a>write by {{author}}</a>
  </div>
</template>

<script>
export default{
    name:'firstcomponent',
    data(){
        return {
            author:"微信公众号 madness-Allen"
        }
    }
}
</script>

<style>

</style>
