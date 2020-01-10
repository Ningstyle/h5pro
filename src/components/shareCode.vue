<template>
  <div class="ShareCode">
    <div class="head_img">
      <img src="../assets/zi.png" alt />
    </div>
    <div class="content_box_s">
      <div class="top">
        <img src="../assets/code.png" alt />
        <p class="invite">邀请码 : ZYTJK</p>
        <P class="url_box">二维码邀请</P>
        <p lass="url_box">
          也可以直接访问网址
          <span class="color_w">www.xxxx.com</span>
        </p>
      </div>
    </div>
    <p class="hint">推荐好友, 获取更多消费币</p>
    <div class="botton_box_s">
      <div @click="save()">
        <img src="../assets/xiaz.png" alt />
        <p>保存至相册</p>
      </div>
      <div @click="share()">
        <img src="../assets/fenx.png" alt />
        <p>分享给好友</p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.ShareCode {
  .pd30;
  .head_img {
    text-align: center;
    img {
      // width: 100%;
      height: 100px;
      margin: 0 auto;
    }
  }
  .content_box_s {
    .bgc_p;
    .pd30_60;
    .border_r(10px);
    .mg_10;
    .top {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .invite {
      margin: 5px 0;
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      color: #fff;
    }
    .url_box {
      text-align: center;
      .color_o;
      span {
        .color_w;
      }
    }
  }
  .hint {
    text-align: center;
    .mg_10;
    .color_w;
  }
  .botton_box_s {
    .mg_10;
    display: flex;
    div {
      flex: 1;
      padding: 15px 30px;
      box-sizing: border;
      text-align: center;
      img {
        height: 30px;
        margin: 0 auto;
      }
      p {
        text-align: center;
        .color_w;
      }
    }
  }
}
.bgc_p {
  background: #d4237a;
}
.mg_10 {
  margin: 10px 0;
}
.color_o {
  color: #000222;
}
.color_w {
  color: #fff;
}
.pd6 {
  padding: 6px;
  box-sizing: border-box;
}
.pd30_60 {
  padding: 30px 60px;
  box-sizing: border-box;
}
.pd30 {
  padding: 30px;
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
  name: "Embody",
  data() {
    return {}
  },
  methods: {
    save() {
      // 保存
    },
    share() {
      // 分享
    }
  }
};
</script>
