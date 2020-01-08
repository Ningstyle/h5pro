<template>
  <div class="login">
    <div class="loginBox">
      <input type="text" placeholder="手机号登录" v-model="phone">
      <input type="password" placeholder="密码" style="margin-bottom:5px;" v-model="password">
      <p><span style="float:left" @click='forgetPwd'>忘记密码?</span><span style="float:right" @click="register">注册新账户</span></p>
      <a href="javascript:;" class="lbtn" @click="loginBtn">登录</a>
    </div>
  </div>
</template>

<script>
  // 例如
  import {getArticlePage} from '@/api/index'
  export default{
    name:'login',
    data(){
      return {
        phone:'',//手机号
        password:'',//密码
      }
    },
    methods:{
      // 举例接口请求,根据实际情况替换删除   id/pageindex/pagesize对应接口的请求参数
      getArticlePage(id,pageindex,pagesize){
        getArticlePage(id,pageindex,pagesize).then(res=>{
          // 请求成功处理
          console.log(res.data)
          alert('登录成功了')
          this.$router.push({path:'/index'})  //登录成功跳转到首页
        }).catch(res=>{
          //请求失败处理
          console.log('请求失败')
        })
      },
      // 登录事件
      loginBtn(){
        // this.phone 获取手机号方法    this.$md5(this.password) 获取密码方法
        // 判断账号密码是否为空
        if(this.phone==''){
          this.$message({
            message: '请输入正确的登录手机号',
            type: 'warning',
            center:true,
          });
        }else if(this.password==''){
          this.$message({
            message: '请输入密码',
            type: 'warning',
            center:true,
          });
        }else{
          // 请求接口在api/index.js下配置   本页面引入: import {定义的接口名} from '@/api/index'
          // 满足条件处理区
          console.log(this.phone,this.$md5(this.password))
          // 调用methods方法 this.getArticlePage()
          this.getArticlePage(2588863,1,20)
        }
      },
      // 忘记密码事件
      forgetPwd(){

      },
      // 注册事件
      register(){

      }
    }
  }
</script>

<style scoped>
  .login{
    width:100%;
    height:100vh;
    overflow: hidden;
    background: url('../../assets/bg.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .loginBox{
    width:100%;
    height:auto;
    overflow: hidden;
    position: absolute;
    padding:0 58px;
    box-sizing: border-box;
    bottom:20%;
  }
  input{
    width:100%;
    height:35px;
    border:0;
    outline: none;
    background: rgba(0,0,0,0);
    color:#fff;
    border-bottom:1px solid #f5337f;
    margin-bottom:18px;
    font-size:15px;
    padding:0 5px;
  }
  p{
    width:100%;
    height:30px;
    color:#8a8a8a;
    font-size:14px;
    margin:0;
    line-height: 30px;
    cursor: pointer;
    padding:0 5px;
  }
  .lbtn{
    width:100%;
    height:40px;
    border-radius: 40px;
    line-height: 40px;
    text-align: center;
    color:#fff;
    font-size:15px;
    background: #f5337f;
    display: block;
    margin-top:15px;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
      color:    #FFFFFF;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color:    #FFFFFF;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color:    #FFFFFF;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
      color:    #FFFFFF;
  }
</style>