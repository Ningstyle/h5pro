<template>
  <div class="approve">
    <van-nav-bar title="实名认证" left-arrow @click-left="onClickLeft" />
    <div class="step_box">
      <img class="money" src="../assets/shimrz.png" alt />
    </div>
    <p class="title">为了您的账户安全, 请完成实名认证!</p>
    <div class="approve_box">
      <div>
        <span>真实姓名</span>
        <input type="text" v-model="name" placeholder="请输入真实姓名" />
      </div>
      <div>
        <span>身份证号</span>
        <input type="number" v-model="code" placeholder="请输入身份证号" />
      </div>
      <p class="hint"></p>
      <p class="bgc_p1" @click="send()">提交</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.approve {
  background-color: #000222;
  height: calc(100vh - 60px);
  .hint {
    background-color: #232540;
    height: 15px;
  }
  .step_box {
    padding: 25px 0;
    text-align: center;
    box-sizing: border-box;
    .bgc_p;
    .money {
      height: 100px;
      margin: 0 auto;
      display: inline-block;
    }
  }
  .title {
    .pd6_20;
    background-color: #363757;
    font-size: 12px;
    color: #9f356a;
  }
  .approve_box {
    div {
      padding: 15px 10px;
      box-sizing: border-box;
      border-top: 1px solid #2e3049;
      text-align: left;
      background-color: #000222;
      input,
      span {
        display: inline-block;
        vertical-align: middle;
      }
      span {
        padding: 8px 0px;
        width: 90px;
        text-align: center;
        .color_b;
      }
      input {
        color: #8e8e8e;
        width: calc(100% - 140px);
        font-size: 14px;
        padding: 0 10px;
        box-sizing: border-box;
      }
      ::-webkit-input-placeholder {
        color: #8e8e8e;
      }
      ::-moz-placeholder {
        color: #8e8e8e;
      }
      :-ms-input-placeholder {
        color: #8e8e8e;
      }
      :-moz-placeholder {
        color: #8e8e8e;
      }
    }
    .bgc_p1 {
      width: calc(100% - 20px);
      margin: 15px auto;
      padding: 15px 0;
      text-align: center;
      .bgc_p;
      .border_r(30px);
    }
  }
}
.bgc_p {
  color: #fff;
  background: #d4237a;
}
.color_b {
  color: #013cb4;
}
.color_p {
  color: #d4237a !important;
}
.pd6_20 {
  padding: 6px 20px;
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
  name: "Approve",
  data() {
    return {
      code: "",
      name: ""
    };
  },
  methods: {
    send() {
      // 提交
    },
    onClickLeft() {
      // 返回事件
      this.$router.push("/myhome");
    }
  }
};
</script>
