<template>
  <div class="myAddress">
    <van-nav-bar title="我的收货地址" left-arrow @click-left="onClickLeft" />
    <!-- 添加新地址 -->
    <router-link to="/NewAddress" class="add-new-address">添加新地址</router-link>
    <div class="container">
      <!-- 有收货地址 -->
      <div class="content" v-if="hasAddress">
        <ul>
          <!-- 循环体开始 -->
          <li v-for="(item, index) in locations" v-bind:key="index">
            <div class="address-detail">
              <p class="location">{{ item.location }}</p>
              <p class="name-pheon"><span>{{ item.name }}</span> <span>{{ item.phone }}</span></p>
            </div>
            <div class="edit-container">
              <div class="default-select">
                <i
                  v-bind:class="{ 'no-select': true, 'select': item.isDefault && index === nowI }"
                  @click="setDefault(item, index)"
                ></i>默认地址
              </div>
              <div class="edit-content">
                <span @click="edit(item, index)">
                  <router-link to="/newAddress"><i class="edit"></i>编辑</router-link>
                </span>
                <span @click="del(item, index)">
                  <i class="delete"></i>删除
                </span>
              </div>
            </div>
          </li>
          <!-- 循环体结束 -->
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
  data() { // 这是页面数据来源
    return {
      locations: [], // 收货地址列表
      hasAddress: true, // 是否有收货地址
      nowI: 0, // 默认收货地址索引
    };
  },
  components: {
    titles
  },
  mounted () {
    // 初始化页面调用后取数据方法
    this.getData();
  },
  methods: {
    // 获取数据
    getData() {
      // ajax
      // ...
      // 这是接口获取到的数据
      let results = [
        {name: '小明', phone: '14141414141', location: '山东省青岛市xxxx', isDefault: true},
        {name: '小红', phone: '15151515151', location: '北京市xxxxxxx', isDefault: false},
        {name: '小白', phone: '16161616161', location: '厦门市xxxxxxx', isDefault: false},
      ]
      // 将数据赋值给页面数据源data
      this.locations = results;
    },
    // 设置默认地址
    setDefault(item, index) {
      this.nowI = index; // 设置当前索引
      for (let i = 0; i < this.locations.length; i++) {
        this.locations[i].isDefault = false; // 清空其他默认地址
      }
      item.isDefault = true; // 当前选择的设置为默认地址
    },
    // 返回事件
    onClickLeft() {
      this.$router.push("/myhome")
    },
    // 编辑
    edit(item) {
      console.log(item);
      sessionStorage.setItem('editLocation', JSON.stringify(item));
    },
    // 删除
    del(item, index) {
      this.locations.splice(index, 1);
    },
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
  .default-select .no-select {
    width: 12px;
    height: 12px;
    background: url(../assets/no-select.png) no-repeat center;
    background-size: 100%;
  }
  .default-select .select {
    background: url(../assets/select.png) no-repeat center;
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
    a {
      color: #f5337f;
    }
  }
  .pink-color {
    color: #f5337f;
  }
</style>
