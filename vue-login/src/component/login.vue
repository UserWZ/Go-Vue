<template>
  <div class="login-box">
    <!--标题-->
    <h1>{{title}}</h1>
    <el-col :span="20" :offset="2">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="80px">
        <el-form-item label="用户名" prop="name">
          <el-input v-model.trim="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model.trim="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input type="password" v-model.trim="ruleForm.checkPassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>
<script>
  export default {
      data() {
          var validatePass = (rule, value, callback) => {
              if (value === ''){
                  callback(new Error('请输入密码'));
              }else{
                  if (this.ruleForm.checkPassword !== ''){
                      this.$refs.ruleForm.validateField('checkPassword')
                  }
                  callback();
              }
          };
          var validatePass2 = (rule, value, callback) => {
              if (value === ''){
                  callback(new Error('请再次输入密码'));
              }else if (value !== this.ruleForm.password){
                  callback(new Error('两次输入密码不一致！'));
              }else{
                  callback();
              }
          };
          return {
              title:'反电信诈骗系统',
              ruleForm: {
                  name:'',
                  password:'',
                  checkPassWord:''
              },
              rules: {
                  name:[
                    {required: true,message: '请输入用户名'},
                    {min: 5,max: 10,message: '长度在5到10之间'}
                  ],
                  password:[
                    {validator: validatePass, trigger: 'blur'}
                  ],
                  checkPassword:[
                    {validator: validatePass2, trigger: 'blur'}
                  ]
              }
          }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log();
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
  }
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .login-box{
    position: absolute;
    top:50%;
    left:50%;
    margin-top: -210px;
    margin-left: 50px;
    width:371px;
    height:420px;
    box-shadow: 0 0 10px 5px rgba(90,90,90,.5);
    background-color: #fff;
  }
  .login-box h1 {
    margin: 50px 0 58px 0;
    text-align: center;
    color: #024c7c;
  }
  .login-box .input-block {
    width: 80%;
    height: 35px;
    line-height: 35px;
  }
</style>
