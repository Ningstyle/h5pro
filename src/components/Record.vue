<template>
  <div class='Record'>
    <titles titles="交易记录" :isBack="true"></titles>
    <div class="centBox">
      <div class="listData">
        <li v-for="(item,index) in listData" :key="index">
          <h6></h6>
          <p class="title">下单时间:{{item.time}}</p>
          <div class="dataBox">
              <div class="letlogo">
                <img :src="item.logimg" alt="">
                <span>{{item.name}}</span>
              </div>
              <div class="centertxt">
                <p>求购数量：{{item.want}}</p>
                <p>单价：{{item.UnitPrice}} 总价：{{item.TotalPrice}}</p>
                <p>成交量：{{item.num}}</p>
              </div>
              <div class="rightB"><span>{{item.type}}</span></div>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
  import titles from '@/components/routePage/title'  //顶部文字组件
  export default{
    name:'Record',
    data(){
      return {
        listData:[
          {
            'time':'2020-09-10 14:00:00', //时间
            'logimg':require('../assets/userlogo.png'), //用户头像
            'name':'大强', //姓名
            'want':'102', //求购数量
            'UnitPrice':'0.32B', //单价
            'TotalPrice':'3.5B', //总价
            'num':2, //成交量
            'type':'买入' //类型
          },
          {
            'time':'2020-09-10 14:00:00',
            'logimg':require('../assets/userlogo.png'),
            'name':'大强',
            'want':'102',
            'UnitPrice':'0.32B',
            'TotalPrice':'3.5B',
            'num':2,
            'type':'买入'
          },
          {
            'time':'2020-09-10 14:00:00',
            'logimg':require('../assets/userlogo.png'),
            'name':'孩子',
            'want':'102',
            'UnitPrice':'0.32B',
            'TotalPrice':'3.5B',
            'num':2,
            'type':'卖出'
          },
          {
            'time':'2020-09-10 14:00:00',
            'logimg':require('../assets/userlogo.png'),
            'name':'大强',
            'want':'102',
            'UnitPrice':'0.32B',
            'TotalPrice':'3.5B',
            'num':2,
            'type':'买入'
          }
        ]
      }
    },
    components:{
      titles
    },
  }
</script>

<style scoped>
  .centBox{
    width:100%;
    height:auto;
    overflow: hidden;
    margin-top:50px;
  }
  h6{
    width:100%;
    height:5px;
    background:#2e3049;
    margin:0;
  }
  .listData{
    width:100%;
    height:auto;
    overflow: hidden;
  }
  .listData li{
    width:100%;
    height:115px;
    list-style: none;;
  }
  .listData li p.title{
    margin:0;
    line-height: 25px;
    color:#F5337F;
    font-size:13px;
    padding:0 20px;
    box-sizing: border-box;
  }
  .dataBox{
    height:auto;
    overflow: hidden;
    padding: 5px 20px;
    box-sizing: border-box;
    background: #F5337F;
  }
  .letlogo{
    width:20%;
    height:100%;
    float: left;
    border-right:1px solid #fff;
  }
  .centertxt{
    width:67%;
    height:100%;
    float: left;
    padding-left:20px;
    box-sizing: border-box;
  }
  .centertxt p{
    margin:0;
    color:#fff;
    font-size: 14px;
    line-height: 23px
  }
  .letlogo img{
    width:50px;
    height:50px;
    display: block;
  }
  .letlogo span{
    color:#fff;
    font-size:14px;
    margin-left:10px;
  }
  .rightB{
    width:12%;
    height:100%;
    float: left;
  }
  .rightB span{
    width:100%;
    height:25px;
    font-size: 13px;
    color:#fff;
    background:#01267b;
    display: block;
    line-height: 25px;
    text-align: center;
    border-radius: 40px;
    margin-top:22px;
  }
</style>
