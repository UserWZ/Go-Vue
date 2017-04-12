<template>
	<div id="YJPage" class="YJPage">
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
			<div id="demo4"></div>
		</div>
	</div>
</template>
<script>
import Axios from 'axios'
	export default {
		name:'',
		data () {
			return {
				items:''
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
						laypage({
						     cont: 'demo4', //容器
						     //pages: res.TotalPage, //通过后台拿到的总页数
						     pages: Math.ceil(res.data/pageSize), //通过后台拿到的总页数
					         curr: curr || 1,
					         first: 1, //若不显示，设置false即可
					         last: res.TotalPage, //若不显示，设置false即可
					         prev: '<', //若不显示，设置false即可
					         next: '>', //若不显示，设置false即可
					         skip:true,
					         groups:4,
					         skin:'#5BC0DE',
						     jump: function (obj,first) { //触发分页后的回调
						       if(!first){ //点击跳页触发函数自身，并传递当前页：obj.curr
						         page(obj.curr);
						       }
						     }
						   });
					})
					.catch(function(err){
						console.log(err)
					})
			})
		}
	}
</script>
<style scoped>
	.YJPage .table-area{
		width: 90%;
		margin: 30px auto;
	}
</style>