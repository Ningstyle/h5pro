<template>
  <div class="confirm-order">
    <van-nav-bar title="确认订单" left-arrow @click-left="onClickLeft" />
    <div class="container">
      <!-- 地址 -->
      <div class="address-container">
        <p>
          <span class="name">流沙包</span>
          <span class="phone">12345678910</span>
        </p>
        <p class="address-details">
          安徽省合肥市瑶海区xxxx
        </p>
        <i class="right-btn">></i>
      </div>
      <!-- 商品列表 -->
      <div class="goods-list">
        <h3>订单商品</h3>
        <ul>
          <li>
            <img src="" alt="">
            <div>
              <h5>Chinaldz圣纸抽纸（20包/箱）</h5>
              <div class="price-container">
                <span class="price">￥123.00</span>
                <div class="number-edit">
                  <span class="reduce">-</span>
                  <input type="text">
                  <span class="increase">+</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <img src="" alt="">
            <div>
              <h5>Chinaldz圣纸抽纸（20包/箱）</h5>
              <div class="price-container">
                <span class="price">￥123.00</span>
                <div class="number-edit">
                  <span class="reduce">-</span>
                  <input type="text">
                  <span class="increase">+</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <img src="" alt="">
            <div>
              <h5>Chinaldz圣纸抽纸（20包/箱）</h5>
              <div class="price-container">
                <span class="price">￥123.00</span>
                <div class="number-edit">
                  <span class="reduce">-</span>
                  <input type="text">
                  <span class="increase">+</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 订单详情 -->
      <ul class="order-detals">
        <li>
          <div>商品金额</div>
          <span>￥123.00</span>
        </li>
        <li>
          <div>折扣券</div>
          <span>-￥0.00</span>
        </li>
        <li>
          <div>运费</div>
          <span>包邮</span>
        </li>
      </ul>
      <!-- 支付方式 -->
      <div class="pay-way">
        <h1>支付方式</h1>
        <div>
          <ul>
            <li>
              <div>
                <i class="icon-wx"></i>
                微信支付
              </div>
              <i class="select"></i>
            </li>
          </ul>
          <p>
            提示：公司随机发货，不能指定快递，少数偏远地区以及快递不到的镇、村、组的快件需自提，公司不承担额外的快递费用，快递物流时效为一个月，请在发货后7天内查询物流信息，新老包装随机发货，不能制定包装，如有疑问请联系客服。
          </p>
        </div>
      </div>
      <!-- 总计 -->
      <div class="total">
        <div>
          应付：<span>￥123.00</span>
        </div>
        <button class="submit" @click="getPay">
          提交订单
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import titles from "@/components/routePage/title"; // 顶部文字组件
import { getConfig, notify } from "@/api/index";
export default {
  data() {
    return {};
  },
  components: {
    titles
  },
  methods: {
    // 返回事件
    onClickLeft() {
      this.$router.push("/myhome");
    },
    getPay() {
      let params = {
        id: 1,
        num: 1
      };
      getConfig(params)
        .then(res => {
          alert(res);
          // 请求成功处理
          let data = res.data;
          wx.config({
            debug: true,
            appId: "wxfe2a249fe1e4c7e6",
            timestamp: data.timeStamp,
            nonceStr: data.nonceStr,
            signature: data.paySign,
            jsApiList: ["chooseWXPay"]
          });
          wx.ready(function() {
            alert('支付成功');
            this.chooseWXPay(data);
          });
          wx.error(function(res) {
            alert('支付失败')
            console.log(res);
          });
        })
        .catch(res => {
          //请求失败处理
          console.log("请求失败");
        });
    },
    chooseWXPay(data) {
      wx.chooseWXPay({
        timestamp: data.timeStamp,
        nonceStr: data.nonceStr,
        package: data.package,
        signType: data.signType,
        paySign: data.paySign,
        success: function(res) {
          // 支付成功后的回调函数
          console.log(res);
          notify(data).then(res => {
            console.log(res);
          });
        }
      });
    }
  },
  mounted() {}
};
</script>

<style  lang="less" scoped>
.container {
  height: calc(100vh - 96px);
  background-color: #2e3049;
  .address-container {
    position: relative;
    display: flex;
    margin-bottom: 10px;
    padding: 0 10px;
    flex-direction: column;
    justify-content: center;
    height: 72px;
    background-color: #000222;
    color: #ec2a76;
    border-bottom: 1px solid #ec2a76;
    .right-btn {
      position: absolute;
      top: 25px;
      right: 10px;
    }
  }
  .goods-list {
    background-color: #000222;
    padding: 15px 10px 0 10px;
    > h3 {
      color: #000fff;
      margin: 0;
    }
    ul {
      padding-bottom: 15px;
      li {
        display: flex;
        height: 80px;
        margin-top: 10px;
        > img {
          margin-right: 10px;
          width: 80px;
          height: 80px;
          background-color: #fff;
        }
        > div {
          flex-grow: 1;
          h5 {
            color: #000fff;
          }
          .price-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #ec2a76;
            .number-edit {
              display: flex;
              width: 90px;
              height: 27.5px;
              border: 1px solid #ec2a76;
              span {
                flex-grow: 0;
                width: 27px;
                height: 100%;
                line-height: 27.5px;
                text-align: center;
              }
              input {
                flex-grow: 1;
                padding: 0 2px;
                width: 32px;
                border-left: 1px solid #ec2a76;
                border-right: 1px solid #ec2a76;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
  .order-detals {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    margin-top: 10px;
    height: 100px;
    background-color: #000222;
    li {
      margin: 3px 0;
      display: flex;
      justify-content: space-between;
      div {
        color: #000fff;
      }
      span {
        color: #ec2a76;
      }
    }
  }
  .pay-way {
    margin-top: 10px;
    padding: 15px 10px;
    background-color: #000222;
    margin-bottom: 59px;
    h1 {
      font-size: 13px;
      color: #ec2a76;
      margin: 0;
    }
    ul {
      margin-top: 20px;
      li {
        display: flex;
        justify-content: space-between;
        color: #ec2a76;
        .icon-wx {
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
          width: 20px;
          height: 18.5px;
          background: url(../assets/icon-wx.png) no-repeat center;
          background-size: 100%;
        }
        .select {
          width: 18.5px;
          height: 18.5px;
          background: url(../assets/select.png) no-repeat center;
          background-size: 100%;
        }
      }
    }
    p {
      margin-top: 15px;
      font-size: 10px;
      color: #bbb;
    }
  }
  .total {
    position: fixed;
    bottom: 49px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 49px;
    background-color: #2e3049;
    div {
      flex-grow: 1;
      text-align: right;
      line-height: 49px;
      margin-right: 10px;
      color: #ec2a76;
    }
    .submit {
      width: 121px;
      background-color: #f5317f;
      color: #fff;
      font-size: 14px;
      text-align: center;
      border: none;
    }
  }
}
</style>
