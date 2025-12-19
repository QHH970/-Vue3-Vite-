<template>
  <div class="app">
    <SiteHeader />
    <main class="main">
      <router-view />
    </main>
    <SiteFooter />
  </div>
 </template>

<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>

<style scoped>
.main{
  min-height: calc(100vh - 72px - 320px);
}
</style>


