<template>
	<div id="ph-header" class="ph-header">
		<ul class="layui-nav">
			<li class="layui-nav-item">
				<img src="../assets/images/logo.jpg" height="69" width="67" alt="">
			</li>
			<li class="layui-nav-item ph-title">
				<a href="">平湖人案智能系统</a>
			</li>
			<li class="layui-nav-item">
				<a href="">首页</a>
			</li>
			<li class="layui-nav-item">
				<a href="">案件管理</a>
			</li>
			<li class="layui-nav-item">
				<a href="">相似度分析页面</a>
			</li>
			<li class="layui-nav-item">
				<a href="">关系分析</a>
			</li>
			<li class="layui-nav-item">
				<a href="">可视化深度分析</a>
			</li>
			<li class="layui-nav-item">
				<a href="">统计分析</a>
			</li>
			<li class="layui-nav-item">
				<a href="">预警</a>
			</li>
			<li class="layui-nav-item">
				<a href="">文本案件结构化</a>
			</li>
			<li class="layui-nav-item">
				<a href="">系统管理</a>
			</li>
			<li class="layui-nav-item">
				<img src="../assets/images/system-person.gif" height="29" width="26" alt="">
			</li>
			<li class="layui-nav-item ph-user">
				<a href="">用户名</a>
			</li>
		</ul>
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
</style>