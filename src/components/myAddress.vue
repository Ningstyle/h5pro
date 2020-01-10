<template>
  <div class="myAddress">
    <van-nav-bar title="我的收货地址" left-arrow @click-left="onClickLeft" />
    <!-- 添加新地址 -->
    <router-link to="/NewAddress" class="add-new-address">添加新地址</router-link>
    <div class="container">
      <!-- 有收货地址 -->
      <div class="content" v-if="hasAddress">
        <ul>
          <li>
            <div class="address-detail">
              <p class="location">{{ location }}</p>
              <p class="name-pheon"><span>{{ name }}</span> <span>{{ phone }}</span></p>
            </div>
            <div class="edit-container">
              <div class="default-select">
                <i v-bind:class="{ 'select': true, 'no-select': !isDefault }" @click="isDefault = !isDefault"></i>默认地址
              </div>
              <div class="edit-content">
                <span @click="edit">
                  <i class="edit"></i>编辑
                </span>
                <span @click="del">
                  <i class="delete"></i>删除
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 无收货地址 -->
      <div class="content" v-if="!hasAddress">
        <img src="../assets/no-address.png" alt="">
        <p>您还没有收货地址!</p>
        <button class="create-address">添加收货地址</button>
      </div>
    </div>
  </div>
</template>

<script>
import titles from "@/components/routePage/title"; // 顶部文字组件
export default {
  data() {
    return {
      name: '李泽鑫',
      phone: '15101517777',
      location: '北京市朝阳区朝外大街泛利大厦1602',
      hasAddress: true, // 是否有收货地址
      isDefault: true, // 默认地址
    };
  },
  components: {
    titles
  },
  methods: {
    // 返回事件
    onClickLeft() {
      this.$router.push("/myhome")
    },
    // 编辑
    edit() {

    },
    // 删除
    del() {
      alert(1)
    },
  },
  mounted () {
  }
};
</script>

<style  lang="less" scoped>
  .myAddress {
    position: relative;
  }
  .add-new-address {
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
  .content>img {
    display: block;
    margin: 208.5px auto 14px auto;
    width: 74px;
    height: 74px;
  }
  .content>p {
    margin-bottom: 15px;
    text-align: center;
    color: #f5337f;
  }
  .content .create-address {
    outline-color: none;
    border: none;
    display: block;
    margin: 0 auto;
    width: 219px;
    height: 45px;
    border-radius: 22.5px;
    background-color: #f5337f;
    font-size: 18px;
    color: #fff;
  }

  .content>ul {
    border-top: 1px solid #2e3049;
  }
  .content>ul>li {
    overflow: hidden;
    margin-bottom: 5.5px;
    height: 88.5px;
    line-height: 1;
    background-color: #000222;
    color: #0867fe;
  }
  .content li>div {
    padding: 0 10px;
  }
  .content li .address-detail {
    height: 48.5px;
    border-bottom: 1px solid #2e3049;
  }
  .content li .address-detail p {
    margin-top: 8px;
  }
  .content li .edit-container {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .edit-container i {
    margin-right: 4px;
    display: inline-block;
  }
  .default-select .select {
    width: 12px;
    height: 12px;
    background: url(../assets/select.png) no-repeat center;
    background-size: 100%;
  }
  .default-select .no-select {
    background: url(../assets/no-select.png) no-repeat center;
    background-size: 100%;
  }
  .edit-content .edit {
    width: 9px;
    height: 9px;
    background: url(../assets/edit.png) no-repeat center;
    background-size: 100%;
  }
  .edit-content .delete {
    width: 9px;
    height: 10px;
    background: url(../assets/delete.png) no-repeat center;
    background-size: 100%;
  }
  .content li .edit-content {
    color: #f5337f;
  }
  .pink-color {
    color: #f5337f;
  }
</style>
