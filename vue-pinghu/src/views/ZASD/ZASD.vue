<template>
	<div id="ZASDPage" class="ZASDPage">
		<div class="content-nav">
			<el-breadcrumb separator="|" class="el-breadcrumb-first lf">
			  <el-breadcrumb-item :to="{ path: '/' }" class="bread-item">平湖</el-breadcrumb-item>
			  <el-breadcrumb-item class="bread-item">浙江</el-breadcrumb-item>
			  <el-breadcrumb-item class="bread-item">全国</el-breadcrumb-item> 
			</el-breadcrumb>
			<el-breadcrumb separator="|" class="el-breadcrumb-second lf">
			 <el-breadcrumb-item :to="{ path: '/' }" class="bread-item">最近一周</el-breadcrumb-item>
			  <el-breadcrumb-item class="bread-item">月</el-breadcrumb-item>
			  <el-breadcrumb-item class="bread-item">年</el-breadcrumb-item>
			</el-breadcrumb>
			<el-breadcrumb separator="》" class="el-breadcrumb-third rf">
			  <el-breadcrumb-item :to="{ path: '/' }" class="bread-item">最近一周</el-breadcrumb-item>
			  <el-breadcrumb-item class="bread-item">月</el-breadcrumb-item>
			  <el-breadcrumb-item class="bread-item">年</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--图表区-->
		<div class="echart-area">
			<Bar-Content></Bar-Content>
			<Pie-Content></Pie-Content>
		</div>
		<!--表格区-->
		<table class="layui-table" layui-skin="line">
			<thead>
				<tr>
					<th>案件类型</th>
					<th>案件起因</th>
					<th>案件手段</th>
					<th>案件数目</th>
					<th>案件占比</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in items">
					<td>{{item.AJLX}}</td>
					<td>{{item.AJQY}}</td>
					<td>{{item.AJSD}}</td>
					<td>{{item.AJSM}}</td>
					<td>{{item.AJZB}}</td>
					<td>
						<button class="layui-btn">详情</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
import Vue from 'vue'
import Axios from 'axios'
import BarContent from '../../components/Echart/bar.vue'
import PieContent from '../../components/Echart/pie.vue'
	export default {
		name: '',
		data () {
			return {
				items: ''
			}
		},
		components: {
			BarContent,
			PieContent,
		},
		mounted: function(){
			this.$nextTick(function(){
				//定义全局this
				var  _this = this;
				Axios.get("../../../src/data/AJSD.json")
					.then(function(res){
						console.log(res.data)
						_this.items = res.data;
						console.log(_this.items)
					})
					.catch(function(err){
						alert(arr)
					})
			})
		}
	}
</script>
<style scoped>
	.lf{
		float: left;
	}
	.rf{
		float: right;
	}
	.content-nav{
		width: 100%;
		height: 50px;
		padding: 0 50px;
		line-height: 50px;
		box-sizing: border-box;
	}
	.el-breadcrumb{
		width: auto;
		height: 50px;
		line-height: 50px;
	}
	.el-breadcrumb-first{
		margin-right: 30px;
	}
	.bread-item{
		font-size: 16px;
	}

	.echart-area{
		width: 100%;
		height: auto;
		margin: 30px 0 30px;
		overflow: hidden;
		box-sizing: border-box;
	}
</style>