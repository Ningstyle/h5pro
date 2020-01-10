<template>
  <div class="allorder">
    <titles titles='我的订单' :isBack='true'></titles>
    <div class="allordreBox">
      <ul>
        <li v-for="(item,index) in tab" :key="index" :class="{active:isactive==index}" @click="tabSelClick(index)">{{item}}</li>
      </ul>
      <h6></h6>
      <div class="orderlistV" v-for="(item,index) in orderList" :key="index">
        <div class="orderList">
          <p class="pTitle">
            <img src="../assets/oder1.png" alt="">
            <span class="Oname">{{item.name}}&nbsp;&nbsp;＞</span>
            <span class="Otype">{{item.type}}</span>
          </p>
          <div class="omallBox">
            <img :src="item.oimg" alt="">
            <span class="imgR">{{item.redion}}</span>
            <div>
              <span>¥ {{item.Price}}</span>
              <span>x {{item.num}}</span>
            </div>
          </div>
        </div>
         <p class="pJg">共{{item.num}}件商品，合计{{item.Price}}元</p>
         <div class="BtnLisy">
           <a href="javascript:;" v-if="isactive==2||isactive==3" @click="Confirm">确认收货</a>
           <a href="javascript:;" v-if="isactive==1" @click="gofk">去付款</a>
           <a href="javascript:;" v-if="isactive==0||isactive==4" @click="delOrder">删除订单</a>
           <a href="javascript:;" v-if="isactive==1||isactive==4" @click="closeOrder">关闭订单</a>
           <a href="javascript:;" v-if="isactive==0" @click="goBuy">立即购买</a>
           <a href="javascript:;" v-if="isactive==2||isactive==3" @click="ageBuy">再次购买</a>
         </div>
         <h6></h6>
      </div>
    </div>
  </div>
</template>

<script>
  import titles from '@/components/routePage/title'; // 顶部文字组件
  export default{
    name:'allorder',
    data(){
     return {
        tab:['全部','待付款','待发货','待收货','待评价'],
        isactive:0,
        orderList:[
          {'name':'商品名称','type':'交易成功','oimg':require('../assets/yf.png'),'redion':'商品描述','Price':'399.9','num':'1'},
          {'name':'商品名称','type':'交易成功','oimg':require('../assets/yf.png'),'redion':'商品描述','Price':'399.9','num':'1'},
          {'name':'商品名称','type':'交易成功','oimg':require('../assets/yf.png'),'redion':'商品描述','Price':'399.9','num':'1'},
          {'name':'商品名称','type':'交易成功','oimg':require('../assets/yf.png'),'redion':'商品描述','Price':'399.9','num':'1'},
          {'name':'商品名称','type':'交易成功','oimg':require('../assets/yf.png'),'redion':'商品描述','Price':'399.9','num':'1'},
          {'name':'商品名称','type':'交易成功','oimg':require('../assets/yf.png'),'redion':'商品描述','Price':'399.9','num':'1'},
          {'name':'商品名称','type':'交易成功','oimg':require('../assets/yf.png'),'redion':'商品描述','Price':'399.9','num':'1'},
          {'name':'商品名称','type':'交易成功','oimg':require('../assets/yf.png'),'redion':'商品描述','Price':'399.9','num':'1'},
          {'name':'商品名称','type':'交易成功','oimg':require('../assets/yf.png'),'redion':'商品描述','Price':'399.9','num':'1'},
          {'name':'商品名称','type':'交易成功','oimg':require('../assets/yf.png'),'redion':'商品描述','Price':'399.9','num':'1'},
        ]
     }
    },
    components: {
      titles
    },
    methods:{
      // tab点击事件
      tabSelClick(index){
        this.isactive=index
        if(index==0){
          //全部
        }else if(index==1){
          //代付款
        }else if(index==2){
          //待发货
        }else if(index==3){
          //待收货
        }else if(index==4){
          //待评价
        }
      },
      //确认收货事件
      Confirm(){

      },
      //去付款事件
      gofk(){

      },
      //删除订单事件
      delOrder(){

      },
      //关闭订单事件
      closeOrder(){

      },
      //立即购买事件
      goBuy(){

      },
      //再次购买事件
      ageBuy(){

      },
    },
    mounted(){
      // 定位菜单位置
      this.isactive=this.$route.query.typeI
      console.log(this.$route.query.typeI)
    }
  }
</script>

<style lang="less" scoped>
  .allordreBox{
    width:100%;
    height:auto;
    overflow: hidden;
    margin-top:50px;
    ul{
      width:100%;
      height:40px;
      margin:0;
      padding:0 20px;
      box-sizing: border-box;
      border-top:1px solid #2e3049;
      li{
        width:20%;
        list-style: none;
        margin:0;
        color:#013cb2;
        float:left;
        line-height:40px;
        text-align: center;
        cursor: pointer;
      }
      li.active{
        color:#f5337f;
        border-bottom:2px solid #f5337f
      }
    }
    .orderlistV{
      width:100%;
      height:auto;
      overflow: hidden;
      .orderList{
        width:100%;
        height:auto;
        overflow: hidden;
        padding:0 20px;
        box-sizing: border-box;
        p.pTitle{
          width:100%;
          height:30px;
          line-height: 30px;
          margin:0;
          img{
            width:20px;
            height:18x;
            float: left;
            margin-top:4px;
            margin-right:8px;
          }
          span.Oname{
            color:#013cb2;
            font-size:14px;
            float:left;
          }
          span.Otype{
            color:#f5337f;
            font-size:14px;
            float:right;
          }
        }
        .omallBox{
          width:100%;
          height:100px;
          overflow: hidden;
          img{
            width:100px;
            height:100px;
            float: left;
            margin-right:10px;
          }
          span.imgR{
            color:#f5337f;
            width:40%;
            line-height:25px;
            font-size:14px;
            float: left;
          }
          div{
            float: right;
            span{
              color:#013cb2;
              display: block;
              line-height: 30px;
              text-align: right;
            }
          }
        }
      }
      p.pJg{
        width:100%;
        line-height: 30px;
        color:#013cb2;
        padding-right:20px;
        box-sizing: border-box;
        text-align: right;
        border-bottom:1px solid #f5337f
      }
      .BtnLisy{
        width:100%;
        height:40px;
        padding:0 20px;
        box-sizing: border-box;
        line-height: 40px;
        text-align: right;
        a{
          padding:4px 8px;
          color:#fff;
          font-size:13px;
          margin-left:10px;
          border-radius: 40px;
          background: #F5337F;
        }
      }
    }
  }
  h6 {
    width: 100%;
    height: 5px;
    background: #2e3049;
    margin: 0;
  }
</style>
