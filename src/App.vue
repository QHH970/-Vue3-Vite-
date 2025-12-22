<template>
  <!-- template控制显示的内容 -->
  <div class="app">
    <SiteHeader />   <!-- 引入头部组件 -->
    <main class="main">  <!-- 主体部分 -->
      <router-view />      <!-- 路由视图组件，根据路由显示不同页面组件 -->            
    </main>
    <SiteFooter />
  </div>
 </template>

<script setup>
// script部分用于引入组件
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>

<style scoped>
/* 控制app的布局 */
.main{
  min-height: calc(100vh - 72px - 320px);
}
</style>


