<template>
  <div class="Menu">
    <div class="tabmenu">
      <a href="javascript:;" v-for="(item,index) in tabData" :key="index" @click="tabTn(index)">
        <img :src="item.img" alt="">
        <span :class="{active:isactive==index}">{{item.text}}</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default{
    name:'Menu',
    data(){
      return {
        tabData:[
          {'text':'首页','img':require('../../assets/menu1.png')},
          {'text':'消费币','img':require('../../assets/bi.png')},
          {'text':'我的','img':require('../../assets/my.png')}
        ],
        isactive:0
      }
    },
    methods:{
      // 底部菜单事件
      tabTn(index){
        this.isactive=index
        if(index==0){
          this.tabData=[{'text':'首页','img':require('../../assets/menu1.png')},
          {'text':'消费币','img':require('../../assets/bi.png')},
          {'text':'我的','img':require('../../assets/my.png')}],
          this.$router.push({path:'/index'})
        }else if(index==1){
          this.tabData=[{'text':'首页','img':require('../../assets/menu.png')},
          {'text':'消费币','img':require('../../assets/bi1.png')},
          {'text':'我的','img':require('../../assets/my.png')}],
          this.$router.push({path:'/consumer'})
        }else{
          this.tabData=[{'text':'首页','img':require('../../assets/menu.png')},
          {'text':'消费币','img':require('../../assets/bi.png')},
          {'text':'我的','img':require('../../assets/my1.png')}],
          this.$router.push({path:'/myhome'})
        }
      }
    }
  }
</script>

<style scoped>
  .tabmenu{
    width:100%;
    height:60px;
    position: fixed;
    left:0;
    bottom:0;
    background:#2e3049
  }
  .tabmenu a{
    width:33.3333333333%;
    height:50px;
    float: left;
    text-decoration: none;
  }
  .tabmenu a img{
    width:20px;
    height:20px;
    margin-left:42%;
    margin-top:10px;
  }
  .tabmenu a span{
    display: block;
    color:#fff;
    font-size:14px;
    text-align: center;
  }
  .tabmenu a span.active{
    color:#f5337f
  }
</style>
