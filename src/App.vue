<template>
  <div id="app">
    <router-view/>
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from '@/components/routePage/menu' // 底部菜单组件
export default {
  name: 'App',
  components:{
    Menu
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
  padding-bottom:80px;
}
</style>
