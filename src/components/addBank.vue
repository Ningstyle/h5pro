<template>
  <div class="AddBank">
    <van-nav-bar title="添加银行卡" left-arrow @click-left="onClickLeft" />
    <div class="AddBankBox">
      <p class="hint"></p>
      <!-- <div class="head">
        <van-dropdown-menu>
          <van-dropdown-item disabled title="开户银行" />
          <van-dropdown-item
            v-model="bank1"
            title="请选择您的开户银行"
            :options="option1"
          />
        </van-dropdown-menu>
        <van-dropdown-menu>
          <van-dropdown-item disabled title="开户地点" />
          <van-dropdown-item
            v-model="bank2"
            title="请选择您的开户地点"
            :options="option2"
          />
        </van-dropdown-menu>
      </div> -->
      <div class="content">
        <div>
          <span>开户银行</span>
          <div class="input_box">
            <input
              type="text"
              v-model="BankName"
              placeholder="请输入您的开户银行"
            />
          </div>
        </div>
        <div>
          <span>开户地点</span>
          <div class="input_box">
            <input
              type="text"
              v-model="BankAddress"
              placeholder="请输入您的开户地点"
            />
          </div>
        </div>
      </div>
      <p class="hint"></p>
      <div class="content">
        <div>
          <span>开户行全称</span>
          <div class="input_box">
            <input
              type="text"
              v-model="FullName"
              placeholder="请输入开户行的全称"
            />
          </div>
        </div>
        <div>
          <span>银行卡号</span>
          <div class="input_box">
            <input
              type="number"
              v-model="card"
              placeholder="请输入银行卡的卡号"
            />
          </div>
        </div>
        <div>
          <span>持卡人姓名</span>
          <div class="input_box">
            <input
              type="text"
              v-model="name"
              placeholder="请输入持卡人的姓名"
            />
          </div>
        </div>
        <div>
          <span>身份证号</span>
          <div class="input_box">
            <input
              type="number"
              v-model="IdCode"
              placeholder="请输入您的身份证号"
            />
          </div>
        </div>
      </div>
      <p class="hint"></p>
      <p class="bgc_p1" @click="bind()">提交绑定</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.AddBank {
  height: calc(100vh - 120px);
  background-color: #000222;
  .hint{
    background-color: #232540;
    height: 15px;
  }
  .AddBankBox {
    .bgc_p1 {
      margin: 15px;
      padding: 15px 0;
      text-align: center;
      font-size: 16px;
      .bgc_p;
      .border_r(5px);
    }
    .content,
    .head {
      margin-top: 15px;
      .pd15;
      background-color: #000222;
    }
    .content {
      div {
        line-height: 30px;
        padding: 5px 0;
        display: flex;
        span {
          display: inline-block;
          padding: 0 8px;
          font-size: 14px;
          line-height: 40px;
          .color_b;
          width: 25%;
          vertical-align: middle;
        }
        .input_box {
          display: inline-block;
          width: calc(100% - 25%);
          box-sizing: border-box;
          input {
            width: 100%;
            text-align: center;
            line-height: 30px;
            vertical-align: middle;
            color: #fff;
          }
          input::-webkit-input-placeholder {
            // text-align: center;
            // line-height: normal;
            .color_p;
          }
        }
      }
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

.pd15 {
  padding: 15px;
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
  name: "AddBank",
  data() {
    return {
      bank1: 0, // 开户行
      bank2: 0, // 开户地
      option1: [
        // 银行列表
        { text: "招商银行", value: 1 },
        { text: "农业银行", value: 2 },
        { text: "建设银行", value: 3 }
      ],
      option2: [
        // 地点列表
        { text: "东湖支行", value: 1 }
      ],
      BankName: "",
      BankAddress: "",
      FullName: "",
      card: "",
      name: "",
      IdCode: ""
    };
  },
  methods: {
    onClickLeft() {
      // 返回事件
      this.$router.push("/BankCard")
    },
    bind() {
      // 绑定
    }
  }
};
</script>
