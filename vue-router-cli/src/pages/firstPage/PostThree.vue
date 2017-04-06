<template>
  <div>
    <table>
      <tr v-for="(item,index) in memberList" @click="memberDetail(index)">
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.joinTime}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                memberList:[],
            }
        },
        created (){
            //当成ajax在初始化进入时从后台获取用户列表数据
            this.memberList = [
              {name:'allen',age:'19',joinTime:'2017-1-1',custId:'1'},
              {name:'curry',age:'20',joinTime:'2017-2-1',custId:'2'},
              {name:'mark',age:'21',joinTime:'2017-3-1',custId:'3'},
              {name:'node',age:'22',joinTime:'2017-4-1',custId:'4'}
            ]
        },
        methods:{
            memberDetail (index){
                sessionStorage.custId = this.memberList[index].custId;
            }
        },
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    td{
      border:1px solid #000;
    }
</style>
