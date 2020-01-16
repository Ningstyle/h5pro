<template>
  <div class="index">
    <titles titles="XFB数字资产联盟" :isBack="false"></titles>
    <div class="imgBox">
      <div>
        <img v-bind:class="{'active-img': nowI === 0}" src="../assets/indexbg1.png" alt />
        <img v-bind:class="{'active-img': nowI === 1}" src="../assets/indexbg1.png" alt />
        <img v-bind:class="{'active-img': nowI === 2}" src="../assets/indexbg1.png" alt />
      </div>
      <div class="dot">
        <span v-bind:class="{'active-span': nowI === 0}"></span>
        <span v-bind:class="{'active-span': nowI === 1}"></span>
        <span v-bind:class="{'active-span': nowI === 2}"></span>
      </div>
    </div>
    <div class="centent">
      <div class="leftB">
        <span class="Price">当前价格</span>
        <p>
          {{Price}}
          <span>B</span>
        </p>
      </div>
      <div class="rightB">
        <p>最高：{{maxnum}}</p>
        <p>最低：{{minnum}}</p>
        <p>幅：{{fu}}</p>
        <p>当前求购订单量：{{qred}}</p>
        <p>当前出售订单量：{{cred}}</p>
      </div>
    </div>
    <div id="myChart" :style="{width: '100%', height: '250px'}"></div>
    <h6></h6>
    <div class="zoushi">
      <ul>
        <li>
          <span :class="{active:isTclass}" @click="tabsel(1)">买入XF币</span>
        </li>
        <li>
          <span :class="{active:!isTclass}" @click="tabsel(2)">买出XF币</span>
        </li>
      </ul>
      <div class="inputTet">
        <p>
          持有
          <span>{{hold}}</span>XF币
        </p>
        <input type="text" class="inpL" :placeholder="placeholder" v-model="buy" />
        <span class="spanC">—</span>
        <input type="text" class="inpR" v-model="buy2" />
      </div>
      <a href="javascript:;" class="sendRe" @click="sendRe">发布订单</a>
    </div>
  </div>
</template>

<script>
import titles from "@/components/routePage/title"; // 顶部文字组件
export default {
  name: "HelloWorld",
  data() {
    return {
      Price: "0.3213", // 当前价格
      maxnum: "0.32B", // 最高
      minnum: "0.1B", // 最低
      fu: "3%", // 幅
      qred: "232321", // 当前求购订单量
      cred: "0", // 当前出售订单量
      hold: "78521", // 持有币
      placeholder: "请输入购买数量",
      isTclass: true,
      buy: "", // 买入、卖出输入框值
      buy2: "", // 买入、卖出第二个输入框值
      nowI: 0
    };
  },
  components: {
    titles
  },
  methods: {
    //  图表函数
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        legend: {
          orient: 'vertical',
          show: true,
          x: 'right',
          y: 'top',
          padding: [10, 20, 0, 0],
          data: ['单位(元)'],
          textStyle: {
            //图例文字的样式
            color: '#e63079'
          }
        },
        grid: {
          top: '20%',
          left: '2%',
          right: '5%',
          bottom: '4%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#e63079'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#015afe'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#e63079'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#015afe'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#015afe'],
              width: 1,
              type: 'solid'
            }
          }
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            name: '单位(元)',
            itemStyle: {
              normal: {
                color: '#f5337f', //折点颜色
                lineStyle: {
                  color: '#f5337f' //折线颜色
                }
              }
            }
          }
        ]
      })
    },
    // 买入卖出切换事件
    tabsel (i) {
      this.isTclass = !this.isTclass
      i == 1
        ? (this.placeholder = '请输入购买数量')
        : (this.placeholder = '请输入卖出数量');
    },
    // 发布订单事件
    sendRe () {
      // this.isTclass为true时是买入,否则卖出
      if (this.isTclass) {
        console.log(this.buy, this.buy2)
      } else {
        console.log(this.buy, this.buy2)
      }
    },
    // 定时器
    setTime() {
      let that = this;
      setInterval(function () {
        that.nowI ++;
        if (that.nowI > 2) {
          that.nowI = 0;
        }
      }, 2000)
    }
  },
  mounted () {
    this.setTime();
    this.drawLine();
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.index {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.imgBox {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 140px;
  display: block;
  margin-top: 50px;
}
.imgBox>div:first-child {
  width: 100%;
  height: 100%;
}
.imgBox>div:last-child {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 6px;
  left: 50%;
  z-index: 3;
  margin-left: -25px;
  width: 50px;
  height: 10px;
}
.imgBox>div:last-child span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, .5);
}
.imgBox>div:last-child .active-span {
  background-color: #fff;
}
.imgBox img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.imgBox .active-img {
  z-index: 2;
}
.centent {
  width: 100%;
  height: 120px;
  padding: 0 20px;
  background: #f5337f;
  box-sizing: border-box;
  padding-top: 10px;
}
.leftB {
  width: 40%;
  height: 100%;
  float: left;
}
.leftB span.Price {
  color: #fff;
  font-size: 13px;
  display: block;
}
.leftB p {
  font-size: 30px;
  color: #fff;
  margin: 0;
  margin-top: 10px;
}
.leftB p span {
  font-size: 15px;
}
.rightB {
  width: 60%;
  height: 100%;
  float: right;
}
.rightB p {
  margin: 0;
  height: 20px;
  color: #fff;
}
h6 {
  width: 100%;
  height: 5px;
  background: #2e3049;
  margin: 0;
}
.zoushi {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.zoushi ul {
  width: 100%;
  height: 45px;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #2e3049;
}
.zoushi ul li {
  list-style: none;
  width: 50%;
  float: left;
  height: 45px;
}
.zoushi ul li span {
  width: 35%;
  display: block;
  color: #f5337f;
  font-size: 15px;
  text-align: center;
  margin: 0 auto;
  line-height: 43px;
  border-bottom: 3px solid #000222;
  cursor: pointer;
}
.zoushi ul li span.active {
  border-bottom: 3px solid #f5337f;
}
.inputTet {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.inputTet p {
  width: 100%;
  height: 45px;
  color: #fff;
  font-size: 16px;
  margin: 0;
  padding: 0 20px;
  box-sizing: border-box;
  line-height: 45px;
}
.inputTet p span {
  color: #f5337f;
}
.inpL {
  width: 39%;
  height: 35px;
  line-height: 35px;
  outline: none;
  border: none;
  margin-left: 20px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid #bf286b;
  border-radius: 5px;
  padding: 0 5px;
  color: #fff;
}
.spanC {
  line-height: 35px;
  color: #fff;
}
.inpR {
  width: 39%;
  height: 35px;
  line-height: 35px;
  outline: none;
  border: none;
  right: 20px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid #bf286b;
  border-radius: 5px;
  padding: 0 5px;
  color: #fff;
}
.sendRe {
  width: 40%;
  height: 35px;
  color: #fff;
  background: #f5337f;
  line-height: 35px;
  text-align: center;
  font-size: 14px;
  border-radius: 40px;
  display: block;
  margin: 0 auto;
  text-decoration: none;
  margin-top: 20px;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #ffffff;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #ffffff;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #ffffff;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #ffffff;
}
</style>
