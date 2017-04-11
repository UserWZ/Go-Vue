<template>
	<div id="firstPage" class="firstPage">
		<div class="layui-input-block">
			<input name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input" type="text">
		</div>
		<!-- 个人工作台 -->
		<div class="person-work-space"></div>
	</div>
</template>
<script>
	export default {
		name: '',
		data () {
			return {

			}
		}
	}
</script>
<style scoped>
	.firstPage .layui-input-block{
		width: 500px;
		margin: 0 auto;
		margin-top: 150px;
	}
</style>