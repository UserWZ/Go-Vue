<template>
	<div id="GXFXPage" class="GXFXPage">
		<div class="layui-form-item">
		    <label class="layui-form-label">搜索结果</label>
		    <div class="layui-input-block">
		      <input name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input" type="text">
		    </div>
		</div>
		<div class="search-list">
			<ul>
				<li v-for="searchList in searchLists" @click="searchListClick($event)">{{searchList}}</li>
			</ul>
		</div>
		<!-- 表格 -->
		<div class="table-area">
			<table class="layui-table" layui-skin="line">
				<thead>
					<tr>
						<th>案件编号</th>
						<th>案件名称</th>
						<th>案件类型</th>
						<th>案件地点</th>
						<th>案件时间</th>
						<th>姓名</th>
						<th>年龄</th>
						<th>性别</th>
						<th>籍贯</th>
						<th>电话</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in items">
						<td>{{item.AJBH}}</td>
						<td>{{item.AJMC}}</td>
						<td>{{item.AJLX}}</td>
						<td>{{item.AJDD}}</td>
						<td>{{item.AJSJ}}</td>
						<td>{{item.name}}</td>
						<td>{{item.age}}</td>
						<td>{{item.gender}}</td>
						<td>{{item.JG}}</td>
						<td>{{item.phone}}</td>
						<td>
							<button class="layui-btn" @click="showDetails($event)">详情</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
import Vue from 'vue'
import Axios from 'axios'
	export default {
		name:'',
		data () {
			return {
				searchLists:["人名","案件编号","账号信息","车辆","案件信息"],
				items:''
			}
		},
		methods:{
			searchListClick:function($event){
				$(event.target).addClass('active').siblings().removeClass('active');
			}
		},
		mounted:function(){
			this.$nextTick(function(){
				var _this = this;
				Axios.get('../../../src/data/GXFX.json')
					.then(function(res){
						//console.log(res.data)
						_this.items = res.data
						//console.log(_this.items)
					})
					.catch(function(err){
						console.log(err)
					})
			})
		}
	}
</script>
<style scoped>
	.GXFXPage .layui-form-item{
		width: 500px;
		height: 50px;
		margin-top: 50px;
	}
	.GXFXPage .layui-form-item .layui-form-label{
		font-size: 16px;
		color: #40C5CC;
	} 
	.GXFXPage .search-list ul{
		padding-left: 110px;
		box-sizing: border-box;
		overflow: hidden;
	}
	.GXFXPage .search-list li{
		float: left;
		cursor: pointer;
	}
	.GXFXPage .search-list li.active{
		color: #40C5CC;
	}
	.GXFXPage .table-area{
		margin-top: 30px;
		padding: 0 110px;
		box-sizing: border-box;
	}
</style>