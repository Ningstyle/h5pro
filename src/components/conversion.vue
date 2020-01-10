<template>
  <div class="Commodity">
    <van-nav-bar title="兑换" left-arrow @click-left="onClickLeft" />
    <div class="tab_box">
      <p class="color_p">消费币: 808080</p>
    </div>
    <div class="content_box">
      <div class="rool">
        <div class="Commodity_box" v-for="m in 12" :key="m">
          <div class="left">
            <img src="../assets/yaoq.png" alt="" />
          </div>
          <div class="right">
            <p class="color_p">2件组合装 | Nutrilon 牛栏婴儿最接近母乳益生元</p>
            <p class="color_b">消费币: 98080</p>
            <p class="color_g">
              <span @click="commodity()">兑换</span>
            </p>
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
    .color_p{
      line-height: 44px;
      padding:0 10px;
      background-color: #2e3049;
    }
  }
  .content_box {
    height: calc(100vh - 150px);
    // height: calc(100vh - 90px); // 没有底部tabbar 用这个行
    .rool {
      height: 100%;
      overflow-y: auto;
      .Commodity_box {
        display: flex;
        .pd10;
        border-bottom: 8px solid #fff;
        .left {
          text-align: left;
          width: 150px;
          img {
            display: inline-block;
            height: 90px;
          }
        }
        .right {
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
            line-height: 30px;
            text-align: left;
          }
          .color_g {
            text-align: right;
            span{
              display: inline-block;
              padding:5px 20px;
              background-color: #013cb4;
              color:#fff;
              .border_r(20px);
            }
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
    }
  },
  methods: {
    commodity() {
      // 兑换
    },
    onClickLeft() {
      // 返回事件
    }
  }
};
</script>
