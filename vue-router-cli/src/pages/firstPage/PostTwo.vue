<template>
  <div>
    <h1>PostTwo</h1>
    <div>
      <div v-for="(item,index) in insurance">
        <template v-if="nowTime < item.endtime">
            <p>{{item.code}}</p>
            <p>{{item.name}}</p>
            <p>{{item.tel}}</p>
            <p>{{item.arrow}}</p>
            <hr/>
        </template>
        <template v-else-if="nowTime > item.endtime">
            <button @click="item.arrow = !item.arrow">按钮</button>
            <p>{{item.code}}</p>
            <p v-show="item.arrow == true">{{item.name}}</p>
            <p v-show="item.arrow == true">{{item.tel}}</p>
            <hr/>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                nowTime : '',
                insurance:[]
            }
        },
        created(){
            let myDate = new Date();
            let year = myDate.getFullYear();
            let month = myDate.getMonth();
            let day = myDate.getDate();
            if (day<10){
                day = '0' + day
            }
            if (month<10){
                month = '0' + month
            }
            this.nowTime = `${year}-${month}-${day}`
            var insurance = [
              {endtime :'2017-02-01',code : '111111111',name:'ziksang', tel:'1000000000',arrow:false},
              {endtime :'2017-02-03',code : '222222222',name:'ziksang2', tel:'2000000000',arrow:false},
              {endtime :'2017-09-10',code : '333333333',name:'ziksang3', tel:'3000000000',arrow:false},
              {endtime :'2999-02-01',code : '444444444',name:'ziksang4', tel:'4000000000',arrow:false}
            ]
            this.insurance = insurance
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
