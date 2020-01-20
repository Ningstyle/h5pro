<template>
  <div class="Commodity">
    <van-nav-bar title="商品列表页" left-arrow @click-left="onClickLeft" />
    <!-- <van-nav-bar
    title="体现"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  /> -->
    <div class="tab_box">
      <van-tabs v-model="active" @click="tabClick()">
        <van-tab name="1"><div slot="title">综合</div></van-tab>
        <van-tab name="2"><div slot="title">销量</div></van-tab>
        <van-tab name="3"
          ><div slot="title"><van-icon name="apps-o" /></div
        ></van-tab>
        <van-tab name="4"
          ><div slot="title">筛选<van-icon name="filter-o" /></div
        ></van-tab>
      </van-tabs>
    </div>
    <div class="content_box">
      <div class="rool">
        <div class="Commodity_box" v-for="m in 12" :key="m">
          <div class="left">
            <img src="../assets/yaoq.png" alt="" />
          </div>
          <div class="right">
            <p class="color_p">2件组合装 | Nutrilon 牛栏婴儿最接近母乳益生元</p>
            <p class="color_b">￥269</p>
            <p class="color_g">69人购买</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.Commodity {
  /deep/.van-icon-apps-o {
    font-size: 18px !important;
    vertical-align: middle;
  }
  /deep/.van-icon-filter-o {
    vertical-align: middle;
  }
  .tab_box {
    width: 100%;
    height: 44px;
  }
  .content_box {
    height: calc(100vh - 150px);
    // height: calc(100vh - 90px); // 没有底部tabbar 用这个行
    .rool {
      height: 100%;
      overflow-y: auto;
      .Commodity_box {
        display: flex;
        justify-content: flex-start;
        .pd10;
        border-bottom: 8px solid #fff;
        .left {
          text-align: left;
          margin-right: 10px;
          img {
            display: inline-block;
            height: 90px;
          }
        }
        .right {
          flex-grow: 1;
          .color_p {
            font-size: 14px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-align: left;
          }
          .color_b {
            font-size: 18px;
            line-height: 35px;
            text-align: left;
          }
          .color_g {
            text-align: right;
          }
        }
      }
    }
  }
}
.color_b {
  color: #013cb4;
}
.color_p {
  color: #d4237a !important;
}
.pd10 {
  padding: 10px;
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
  name: "Commodity",
  data() {
    return {
      active: 1
    };
  },
  methods: {
    tabClick() {
      // 点击tab
      console.log("点击");
    },
    onClickLeft() {
      // 返回事件
      this.$router.push("/index");
    }
  }
};
</script>
