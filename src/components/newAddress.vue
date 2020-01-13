<template>
  <div class="myAddress">
    <van-nav-bar title="添加收货地址" left-arrow @click-left="onClickLeft" />
    <!-- 保存 -->
    <div class="save-btn" @click="save">保存</div>
    <div class="container">
      <div class="name">
        <span>收货人：</span>
        <input type="text" v-model="location.name">
      </div>
      <div class="phone">
        <span>联系电话：</span>
        <input type="text" v-model="location.phone">
      </div>
      <div class="location">
        <span>地区：</span>
        <input type="text" name="" id="" v-model="location.city">
        <span class="select-address">请选择 ></span>
      </div>
      <textarea class="details-address" name="" id="" cols="30" rows="10" v-model="location.details" placeholder="请填写详细地址，不少于6各自"></textarea>
      <div class="set-default">
        <span>设为默认：</span>
        <span v-bind:class="{'switch': true, 'switch-close': isSwitch}" @click="isSwitch = !isSwitch"></span>
      </div>
    </div>
  </div>
</template>

<script>
import titles from "@/components/routePage/title"; // 顶部文字组件
export default {
  data() {
    return {
      location: {},
      isSwitch: false,
    };
  },
  components: {
    titles
  },
  mounted () {
  },
  methods: {
    // 保存
    save() {
      console.log(this.location);
    },
    // 返回事件
    onClickLeft() {
      this.$router.push("/myAddress")
    },
  },
};
</script>

<style  lang="less" scoped>
  .myAddress {
    position: relative;
  }
  .save-btn {
    position: absolute;
    top: 14px;
    right: 10px;
    color: #fff;
    z-index: 99;
    font-size: 12px;
  }
  .container {
    height: calc(100vh - 120px);
    background-color: #2e3049;
    line-height: 1;
  }
  .name, .phone, .location, .details-address, .set-default {
    padding: 0 10px;
    border-top: 1px solid #2e3049;
    height: 34px;
    line-height: 34px;
    background-color: #000222;
    color: #000fff;
  }
  .name {
    input {
      width: 280px;
      height: 30px;
    }
  }
  .phone {
    input {
      width: 270px;
      height: 30px;
    }
  }
  .location {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      width: 250px;
      height: 30px;
    }
    .select-address {
      font-size: 12px;
      color: #f5337f;
    }
  }
  .set-default {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .switch {
      width: 30px;
      height: 18px;
      border: 9px;
      background: url(../assets/switch-close.png) no-repeat center;
      background-size: 100%;
    }
    .switch-close {
      background: url(../assets/switch.png) no-repeat center;
      background-size: 100%;
    }
  }
  .details-address {
    width: 355px;
    height: 84px;
    background-color: #000222;
    font-size: 12px;
    border: none;
    border-top: 1px solid #2e3049;
    outline: none;
  }
  .details-address::-webkit-input-placeholder {
    color: #f5337f;
  }
  .details-address:-moz-placeholder {/* Firefox 18- */
    color: #f5337f;
  }
  .details-address::-moz-placeholder{/* Firefox 19+ */
    color: #f5337f;
  }
  .details-address:-ms-input-placeholder {
    color: #f5337f;
  }
</style>
