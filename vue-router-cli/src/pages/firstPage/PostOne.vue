<template>
  <div id="mount-file">
    <h1>PostOne</h1>
    <p>{{msg}}</p>
    <p>{{number}}</p>
    <input type="button" name="btnGetNumber" value="增加" @click="getNumber()">
    <input v-model="message">
    <p>{{message | reverseString}}</p>
  </div>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios'
    export default {
        name: '',
        data () {
            return {
              msg:'',
              number:0,
              message:''
            }
        },
         computed: {
            //仅读取，值只需为函数
           aDouble:function(){
               return this.number * 2
           },
           //读取和设置
           aPlus:{
               get:function(){
                   return this.number + 1;
               },
                set:function(v){
                   return this.number = v - 1;
                }
           }
         },
         methods: {
           //事件响应方法的逻辑代码
           getNumber:function(e){
              this.number++;
              this.aDouble;
           }
         },
         watch: {
           //监控msg的变化，并执行下面的函数
           number: function(val,oldVal){
              console.log('val:' + val + '-oldVal:' + oldVal)
           }
         },
         mounted: function() {
           this.$nextTick(function () {
             //先定义一个全局_this
              var _this=this;
              axios.get('../../src/data/a.txt')
                .then(function(res){
                  _this.msg=res.data;
                  console.log(_this.msg)
                })
                .catch(function(err){
                  alert(err);
                })
           });
         },
        filters: {
            reverseString (value){
                if(!value){
                    return ''
                }
                value = value.split('').reverse().join('')
                return value
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
</style>
