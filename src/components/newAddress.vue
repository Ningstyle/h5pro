<template>
  <div class="myAddress">
    <van-nav-bar title="添加收货地址" left-arrow @click-left="onClickLeft" />
    <!-- 保存 -->
    <div class="save-btn">保存</div>
    <div class="container">
      <div class="name">
        <input type="text">
      </div>
      <div class="phoen">
        <input type="text">
      </div>
      <div class="location">
        <span>地区：</span>
        <input type="text" name="" id="">
        <span>请选择 ></span>
      </div>
      <textarea class="details-address" name="" id="" cols="30" rows="10" placeholder="请填写详细地址，不少于6各自"></textarea>
      <div class="set-default">
        <span>设为默认：</span>
        <span class="switch"></span>
      </div>
    </div>
  </div>
</template>

<script>
import titles from "@/components/routePage/title"; // 顶部文字组件
export default {
  data() {
    return {
    };
  },
  components: {
    titles
  },
  methods: {
    // 返回事件
    onClickLeft() {
      this.$router.push("/myAddress")
    }
  },
  mounted () {
  }
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
  }
  .content {
    overflow: hidden;
  }
</style>
