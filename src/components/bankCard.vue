<template>
  <div class="bankCard">
    <van-nav-bar title="银行卡" left-arrow @click-left="onClickLeft" />
    <div class="bankCard_box">
      <div class="Card_box bgc_b_l">
        <div class="bank_logo">
          <div>
            <img src="../assets/jians.png" alt="" />
          </div>
        </div>
        <div class="bank_content">
          <p class="title">建设银行<span>存管专享</span></p>
          <p class="Card">
            <span></span>
            <span></span>
            <span></span>
            <span style="margin-right:10px;"></span>
            <span></span>
            <span></span>
            <span></span>
            <span style="margin-right:10px;"></span>
            <span></span>
            <span></span>
            <span></span>
            <span style="margin-right:10px;"></span>
            8256
          </p>
        </div>
      </div>
      <div class="Card_box bgc_b_p">
        <div class="bank_logo">
          <div>
            <img src="../assets/gongs.png" alt="" />
          </div>
        </div>
        <div class="bank_content">
          <p class="title">工商银行</p>
          <p class="Card">
            <span></span>
            <span></span>
            <span></span>
            <span style="margin-right:10px;"></span>
            <span></span>
            <span></span>
            <span></span>
            <span style="margin-right:10px;"></span>
            <span></span>
            <span></span>
            <span></span>
            <span style="margin-right:10px;"></span>
            8256
          </p>
        </div>
      </div>
      <router-link class="color_b" to="/AddBank">
      <p class="bgc_p1">添加银行卡</p>
      </router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bankCard {
  width: 100%;
  height: calc(100vh - 120px);
  background-color: #000222;

  .bankCard_box {
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    .Card_box {
      display: flex;
      margin-bottom: 15px;
      .pd20;
      .border_r(8px);
      .bank_logo {
        width: 50px;
        div {
          width: 40px;
          height: 40px;
          text-align: center;
          background-color: #fff;
          .border_r(50%);
          img {
            display: inline-block;
            height: 25px;
            margin-top: 7px;
          }
        }
      }
      .bank_content {
        .title {
          font-size: 14px;
          padding: 10px 0;
          span {
            display: inline-block;
            font-size: 12px;
            padding: 0 5px;
            margin: 0 10px;
            border: 1px solid #fff;
            .border_r(3px);
          }
        }
        .Card {
          font-size: 16px;
          padding: 20px 0;
          span {
            display: inline-block;
            width: 6px;
            height: 6px;
            background-color: #fff;
            vertical-align: middle;
            .border_r(50%);
          }
        }
      }
    }
    .bgc_p1 {
      padding: 15px 0;
      text-align: center;
      font-size: 16px;
      .bgc_p;
      .border_r(5px);
    }
  }
}
.bgc_p {
  background: #d4237a;
  color: #fff;
}
.bgc_b_p {
  background: #4c7acc;
  background: linear-gradient(left, #4c7acd, #3065c2);
  background: -ms-linear-gradient(left, #4c7acd, #3065c2);
  background: -webkit-linear-gradient(left, #4c7acd, #3065c2);
  background: -moz-linear-gradient(left, #4c7acd, #3065c2);
  color: #fff;
}
.bgc_b_l {
  background: linear-gradient(left, #f16161, #ec4a4d);
  background: -ms-linear-gradient(left, #f16161, #ec4a4d);
  background: -webkit-linear-gradient(left, #f16161, #ec4a4d);
  background: -moz-linear-gradient(left, #f16161, #ec4a4d);
  color: #fff;
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
  name: "BankCard",
  data() {
    return {
    }
  },
  methods: {
    onClickLeft() {
      // 返回事件
      this.$router.push("/myhome")
    }
  }
};
</script>
