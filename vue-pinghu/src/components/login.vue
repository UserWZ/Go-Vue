<template>
<div class="dialog">
	<div class="loginPage">
		<h1>登录</h1>
		<el-form>
			<el-form-item label="user">
				<el-input type="text" id="user" v-model="formName.user" @blur="inputBlur(formName.user)"></el-input>
				<p v-model="formName.userError"></p>
			</el-form-item>
			<el-form-item label="password">
				<el-input type="password" id="password" v-model="formName.password" @blur="inputBlur(formName.password)"></el-input>
				<p v-model="formName.passwordError"></p>
			</el-form-item>
			<el-button type="primary" @click="submitForm('formName')">提交</el-button>
			<el-button @click="resetForm">重置</el-button>
		</el-form>				
	</div>
</div>
</template>
<script>
	export default {
		name: '',
		data () {
			return {
				formName: {
					user: '',
					userError: '',
					password: '',
					passwordError: ''
				},
			}
		},
		methods: {
			resetForm:function(){
				this.formName.user = '';
				this.formName.password = '';
			},
			submitForm:function(formName){

			},
			inputBlur:function(inputContent){
				if (inputContent === '') {
					
				}
			}
		}
	}
</script>
<style scoped>
	html,body{
		margin: 0;
		padding: 0;
		position: relative;
	}
	.dialog{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.8);
	}
	.loginPage{
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -150px;
		margin-left: -175px;
		width: 350px;
		height: 300px;
		padding: 30px 20px 0;
		border-radius: 8px;
		box-sizing: border-box;
		background-color: #fff;
	}
	.loginPage el-form{

	}
</style>