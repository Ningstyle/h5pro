<template>
  <div class="Embody">
    <van-nav-bar title="提现" left-arrow @click-left="onClickLeft" />
    <div class="step_box">
      <div>
        <img class="money" src="../assets/qian.png" alt="" />
        <p>消费币</p>
        <p>(可用余额)</p>
      </div>
      <div class="money_box">
        <p>金额</p>
        <img src="../assets/jiantou.png" alt="" />
      </div>
      <div>
        <div class="bank">
          <img src="../assets/ka.png" alt="" />
        </div>
        <p>银行卡</p>
      </div>
    </div>
    <div class="Embody_box">
      <div>
        <img src="../assets/qian1.png" alt="" />
        <input type="number" v-model="money" placeholder="输入提现金额" />
      </div>
      <div>
        <img src="../assets/duanx.png" alt="" />
        <input type="number" v-model="code" placeholder="验证码" />
        <span @click="sendCode()">点击获取</span>
      </div>
      <p>可用消费币: 8888</p>
      <p class="bgc_p1" @click="send()">下一步</p>
      <p class="safeguard">
        <img src="../assets/bao.png" alt="" />
        交易资金损失报销保障
      </p>
      <p class="color_p">温馨提示:</p>
      <p>提现手续费10% (如何免费提现?)</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.Embody {
  .step_box {
    padding: 15px 20px;
    display: flex;
    box-sizing: border-box;
    .bgc_p;
    div {
      flex: 1;
      text-align: center;
      .money {
        height: 40px;
        margin: 0 auto;
        display: inline-block;
      }
      p {
        font-size: 12px;
        text-align: center;
      }
      .bank {
        display: inline-block;
        margin: 0 auto;
        height: 40px;
        width: 40px;
        background-color: #fff;
        margin-bottom: 4px;
        .border_r(50%);
        text-align: center;
        img {
          display: inline-block;
          width: 22px;
          height: 22px;
          margin: 8px auto;
        }
      }
    }
    .money_box {
      p {
        font-size: 14px;
      }
      img {
        height: 10px;
        width: 100%;
      }
    }
  }
  .Embody_box {
    div {
      padding: 15px 10px;
      box-sizing: border-box;
      border-bottom: 1px solid #1f213d;
      text-align: left;
      img,
      input,
      span {
        display: inline-block;
        vertical-align: middle;
      }
      img {
        height: 30px;
      }
      input {
        .color_b;
        width: calc(100% - 140px);
        font-size: 14px;
        padding: 0 10px;
        box-sizing: border-box;
      }
      ::-webkit-input-placeholder {
        .color_b;
      }
      ::-moz-placeholder {
        .color_b;
      }
      :-ms-input-placeholder {
        .color_b;
      }
      :-moz-placeholder {
        .color_b;
      }
      span {
        padding: 8px 0px;
        width: 90px;
        text-align: center;
        .border_r(15px);
        .bgc_p;
      }
    }
    p {
      .color_b;
      .pd6;
      font-size: 14px;
      margin: 0 9px;
      text-align: left;
    }
    .bgc_p1 {
      width: calc(100% - 20px);
      margin: 10px auto;
      padding: 15px 0;
      text-align: center;
      .bgc_p;
      .border_r(10px);
    }
    .safeguard {
      img {
        display: inline-block;
        height: 20px;
        vertical-align: middle;
      }
      color: #fff;
    }
    .color_p {
    }
  }
}
.bgc_p {
  background: #d4237a;
  color: #fff;
}
.color_b {
  color: #013cb4;
}
.color_p {
  color: #d4237a !important;
}
.pd6 {
  padding: 6px;
  box-sizing: border-box;
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
  name: "Embody",
  data() {
    return {
      code:'',
      money:''
    }
  },
  methods: {
    send(){ // 下一步

    },
    sendCode() {
      // 获取验证码
    },
    onClickLeft() {
      // 返回事件
    }
  }
};
</script>
