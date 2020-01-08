<template>
  <div class='titles'>
    <p>{{titles}}
     <a href="javascript:;" class="el-icon-arrow-left" v-if="isBack" @click="back"></a>
    </p>
  </div>
</template>

<script>
  export default{
    name:'titles',
    data(){
      return {

      }
    },
    props:{
      titles:{
        type:String,
        default:''
      },
      isBack:{
        type:Boolean,
        default:true
      }
    },
    methods:{
      back(){
        window.history.go(-1)
      }
    }
  }
</script>

<style scoped>
  .titles{
    width:100%;
    height:auto;
    overflow: hidden;
    position: fixed;
    top:0;
    left:0;
    background: #000222;
  }
  p{
    width:100%;
    height:50px;
    color:#fff;
    font-weight: 550;
    font-size:16px;
    padding:0;
    margin:0;
    line-height: 50px;
    text-align: center;
    position: relative;
  }
  p a{
    color:#fff;
    position: absolute;
    top:14px;
    left:14px;
    font-size:24px;
    text-decoration: none;;
  }
</style>
