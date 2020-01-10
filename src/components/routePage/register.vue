<template>
  <div class="login">
    <div class="loginBox">
      <div class="Embody_box">
        <div>
          <img src="../../assets/tel.png" alt="" />
          <input type="tel" v-model="tel" placeholder="请输入手机号" />
        </div>
        <div>
          <img src="../../assets/xiaox.png" alt="" />
          <input type="number" v-model="code" placeholder="请输入验证码" />
          <span @click="sendCode()">获取验证码</span>
        </div>
        <div>
          <img src="../../assets/xiaox.png" alt="" />
          <input type="password" v-model="password" placeholder="请输入密码" />
        </div>
        <div>
          <img class="code_img"  src="../../assets/erwema.png" alt="" />
          <input type="text" v-model="invite" placeholder="邀请码(非必填)" />
        </div>
      </div>
      <p class="protocol">
        <van-checkbox v-model="checked" shape="square" checked-color="#333"
          >确认注册表示您已阅读同意 &lt;&lt; 注册协议 &gt;&gt; 
        </van-checkbox>
      </p>
      <p class="bgc_p1" @click="register()">注册</p>
      <p class="login_g">
        已有账号, <router-link to="/"><u>去登陆</u></router-link>
      </p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.login {
  width: 100%;
  height: calc(100vh - 120px);
  overflow: hidden;
  background: url("../../assets/re.png") no-repeat;
  background-size: 100% 93%;
  position: relative;
  .loginBox {
    width: 100%;
    height: auto;
    // height: calc(100vh - 120px);
    overflow: hidden;
    position: absolute;
    padding: 0 30px;
    box-sizing: border-box;
    top: 40%;
  }
  .Embody_box {
    div {
      padding: 15px 0px;
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
        height: 20px;
      }
      .code_img {
        margin-right: 4px;
        height: 16px;
      }
      input {
        color: #fff;
        width: calc(100% - 120px);
        font-size: 14px;
        padding: 0 10px;
        box-sizing: border-box;
      }
      ::-webkit-input-placeholder {
        .color_g;
      }
      ::-moz-placeholder {
        .color_g;
      }
      :-ms-input-placeholder {
        .color_g;
      }
      :-moz-placeholder {
        .color_g;
      }
      span {
        padding: 8px 0px;
        width: 90px;
        color: #fff;
        text-align: center;
        border: 1px solid #d4237a;
        .border_r(20px);
      }
    }
  }
  .bgc_p1 {
    margin: 10px auto;
    padding: 15px 0;
    text-align: center;
    font-size: 16px;
    .bgc_p;
    .border_r(5px);
  }
  .protocol {
    padding: 15px 0;
    /deep/.van-checkbox__icon {
      width: 16px;
      height: 16px;
      background-color: #fff;
      .van-icon {
        width: 16px;
        height: 16px;
        font-size: 12px;
        line-height: 16px;
      }
    }
    /deep/.van-checkbox__label {
      color: #fff;
    }
  }
  .login_g {
    padding: 15px 10px;
    text-align: center;
    color: #fff;
    u {
      color: #fff;
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
.color_g {
  color: #989898;
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
  name: "Register",
  data() {
    return {
      tel: "",
      code:'',
      password:'',
      invite:'',
      checked:false
    }
  },
  methods: {
    sendCode() {
      // 获取验证码
    },
    // 注册事件
    register() {}
  }
};
</script>
