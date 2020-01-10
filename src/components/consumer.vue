<template>
  <div class='consumer'>
    <titles titles='消费币' :isBack='false'></titles>
    <div class='conCentent'>
      <div class='Foutb'>
        <p class='Foutbp'>总资产</p>
        <p style='color:#f5317f'>{{Assets}}</p>
      </div>
      <div class='bonusB'>
        <div class='lbonus'>
          <p>分红（币）</p>
          <span>{{bonus}}</span>
        </div>
        <div class='lbonus'>
          <p>消费（币）</p>
          <span>{{consume}}</span>
        </div>
      </div>
      <h6></h6>
      <div class='listData'>
        <li v-for='(item,index) in listData' :key='index'>
          <div class='leftLi'>
            <span class='tj'>推荐奖励</span>
            <span class='time'>时间：{{item.time}}</span>
          </div>
          <div class='rightLi'>
            <span class='money'>{{item.money}}</span>
            <span class='suss'>奖励成功</span>
          </div>
        </li>
      </div>
    </div>
    <div class='Record' @click='Record'>消费记录</div>
  </div>
</template>

<script>
import titles from '@/components/routePage/title'; // 顶部文字组件
export default {
  name: 'consumer',
  data () {
    return {
      Assets: '480921.33', //总资产
      bonus: '356.2', //分红
      consume: '4321', //消费
      listData: [
        { time: '2020-09-12 13:00:00', money: '+100' },
        { time: '2020-09-12 13:00:00', money: '+100' },
        { time: '2020-09-12 13:00:00', money: '+100' },
        { time: '2020-09-12 13:00:00', money: '+100' },
        { time: '2020-09-12 13:00:00', money: '+100' },
        { time: '2020-09-12 13:00:00', money: '+100' },
        { time: '2020-09-12 13:00:00', money: '+100' },
        { time: '2020-09-12 13:00:00', money: '+100' },
        { time: '2020-09-12 13:00:00', money: '+100' }
      ] // 列表数据
    }
  },
  components: {
    titles
  },
  methods: {
    // 交易记录按钮事件
    Record () {
      this.$router.push({ path: '/Record' });
    }
  }
}
</script>

<style scoped>
p {
  color: #fff;
  margin: 0;
  font-size: 13px;
}
.conCentent {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-top: 50px;
}
.Foutb p {
  color: #fff;
  margin: 0;
  padding: 0 25px;
  box-sizing: border-box;
  line-height: 25px;
  font-size: 18px;
}
.bonusB {
  width: 100%;
  height: 40px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 20px;
}
.lbonus {
  width: 50%;
  float: left;
  padding-left: 5%;
  box-sizing: border-box;
}
.lbonus:last-child {
  padding-left: 22%;
  box-sizing: border-box;
}
.lbonus span {
  color: #f5337f;
  font-size: 13px;
}
h6 {
  width: 100%;
  height: 5px;
  background: #2e3049;
  margin: 0;
}
.listData {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.listData li {
  height: 70px;
  list-style: none;
  border: 1px solid #2e3049;
  padding: 0 20px;
  box-sizing: border-box;
}
.leftLi {
  width: 50%;
  float: left;
  text-align: left;
  height: 100%;
}
.leftLi span {
  display: block;
}
.leftLi span.tj {
  color: #0867fe;
  font-size: 15px;
  line-height: 30px;
  margin-top: 7px;
}
.leftLi span.time {
  color: #f5337f;
  font-size: 13px;
  line-height: 25px;
}
.rightLi {
  width: 50%;
  float: left;
  text-align: right;
  height: 100%;
}
.rightLi span {
  display: block;
}
.rightLi span.money {
  color: #0867fe;
  font-size: 15px;
  line-height: 30px;
  margin-top: 7px;
}
.rightLi span.suss {
  color: #fff;
  font-size: 14px;
  line-height: 25px;
}
.Record {
  font-size: 13px;
  color: #fff;
  position: fixed;
  top: 20px;
  right: 20px;
}
</style>
