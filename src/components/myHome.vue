<template>
  <div class="myHome">
    <van-nav-bar title="我" />
    <div class="header">
      <img src="../assets/head.png" alt="" />
      <p @click="goLogin">登录</p>
      <van-icon name="arrow" />
    </div>
    <div class="shortcut_box">
      <div @click="Receivable">
        <img src="../assets/daifk.png" alt="" />
        <span>待收款</span>
      </div>
      <div @click="fororders">
        <img src="../assets/fuz.png" alt="" />
        <span>待接单</span>
      </div>
      <div @click="beshipped">
        <img src="../assets/daifh.png" alt="" />
        <span>待发货</span>
      </div>
      <div @click="bereceived">
        <img src="../assets/daish.png" alt="" />
        <span>待收货</span>
      </div>
      <div @click="Completed">
        <img src="../assets/wanc.png" alt="" />
        <span>已完成</span>
      </div>
    </div>
    <div class="skip_box">
      <div>
        <router-link to="/allorder">
          <img src="../assets/dingd.png" alt="" />
          <p>全部订单</p>
          <van-icon name="arrow" />
        </router-link>
      </div>
      <div>
        <router-link to="/MyAddress">
          <img src="../assets/di.png" alt="" />
          <p>地址管理</p>
          <van-icon name="arrow" />
        </router-link>
      </div>
      <div>
        <router-link to="/BankCard">
          <img src="../assets/ka1.png" alt="" />
          <p>银行卡</p>
          <van-icon name="arrow" />
        </router-link>
      </div>
      <div>
        <router-link to="/ShareCode">
          <img src="../assets/yaoq.png" alt="" />
          <p>邀请码</p>
          <van-icon name="arrow" />
        </router-link>
      </div>
      <div>
        <router-link to="/Approve">
          <img src="../assets/renz.png" alt="" />
          <p>实名认证</p>
          <van-icon name="arrow" />
        </router-link>
      </div>
       <div>
         <router-link to="/">
            <img src="../assets/out.png" alt="" />
            <p>退出</p>
            <van-icon name="arrow" />
          </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.myHome {
  .header {
    .pd20;
    img {
      vertical-align: middle;
      height: 70px;
      width: 70px;
      .border_r(50%);
      border: none;
    }
    p {
      display: inline-block;
      width: 40px;
      margin: 0 10px;
      vertical-align: middle;
      font-size: 18px;
      .color_p;
    }
    .van-icon {
      .color_p;
      font-size: 22px;
      vertical-align: middle;
    }
  }
  .shortcut_box {
    display: flex;
    div {
      flex: 1;
      text-align: center;
      padding-bottom: 20px;
      img {
        display: block;
        margin: 10px auto;
        height: 32px;
      }
      span {
        font-size: 12px;
        .color_p;
      }
    }
  }
  .skip_box {
    div {
      padding: 15px 15px 15px 20px;
      border-bottom: 1px solid #d4237a;
      img {
        vertical-align: middle;
        display: inline-block;
        height: 26px;
      }
      p {
        display: inline-block;
        width: calc(100% - 80px);
        margin: 0 10px;
        vertical-align: middle;
        font-size: 18px;
        .color_p;
      }
      .van-icon {
        .color_p;
        font-size: 22px;
        vertical-align: middle;
      }
    }
  }
}
.color_p {
  color: #d4237a;
}
.pd20 {
  padding: 20px;
  box-sizing: border-box;
}
.border_r (@radius) {
  border-radius: @radius;
  -moz-border-radius: @radius;
  -webkit-border-radius: @radius;
}
</style>

<script>
export default {
  name: "myHome",
  data() {
    return {};
  },
  methods:{
    // 去登录事件
    goLogin(){
      this.$router.push({path:'/?typeI=0'})
    },
    //待收款事件
    Receivable(){
       this.$router.push({path:'/allorder?typeI=0'})
    },
    //待接单事件
    fororders(){
       this.$router.push({path:'/allorder?typeI=0'})
    },//待发货事件
    beshipped(){
       this.$router.push({path:'/allorder?typeI=2'})
    },//待收货事件
    bereceived(){
       this.$router.push({path:'/allorder?typeI=3'})
    },//已完成事件
    Completed(){
       this.$router.push({path:'/allorder?typeI=0'})
    },
  }
};
</script>
