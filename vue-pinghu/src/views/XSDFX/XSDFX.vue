<template>
	<div id="XSDFXPage" class="XSDFXPage">
		<p>hello XSDFXPage</p>
		<div id="demo4"></div>
	</div>
</template>
<script>
	export default {
		name:'',
		data () {
			return {

			}
		}
	}
	layui.use(['form','laypage','layer'],function(){
         var laypage = layui.laypage
              ,layer = layui.layer
              ,form = layui.form();

              laypage({
			    cont: 'demo4'
			    ,pages: 100
			    ,first: false
			    ,last: false
			  });
    	})
</script>
<style scoped>
	
</style>