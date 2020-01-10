<template>
  <div id="app" :style="{paddingBottom:paddingBottom}">
    <router-view/>
    <Menu v-if="ishow"></Menu>
  </div>
</template>

<script>
import Menu from '@/components/routePage/menu' // 底部菜单组件
export default {
  name: 'App',
  data(){
    return {
      ishow:false,
      paddingBottom:0
    }
  },
  components:{
    Menu
  },
  watch:{
    '$route.path':function (newVal, oldVal){
      console.log(newVal)
      if(newVal=='/'||newVal=='/Register'){
        this.ishow=false
        this.paddingBottom=0
      }else{
        this.ishow=true
        this.paddingBottom='80px'
      }
    }

  }

}
</script>

<style>
html,
  body{
    margin:0;
    padding:0;
    background:#000222
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
