<template>
  <header class="header">
    <div class="container bar">
      <router-link to="/" class="brand" aria-label="返回首页">
        <img class="logo" src="/images/logo.png" alt="太空市互联网协会" />
        <div class="brandText">
          <div class="name">太空市互联网协会</div>
          <div class="en">Internet Society of Taikong</div>
        </div>
      </router-link>

      <nav class="nav" :data-open="open">
        <router-link to="/" class="navItem">首页</router-link>
        <router-link to="/dynamics" class="navItem">协会动态</router-link>
        <router-link to="/news" class="navItem">新闻资讯</router-link>
        <router-link to="/member" class="navItem">会员中心</router-link>
        <router-link to="/about" class="navItem">关于协会</router-link>
      </nav>

      <div class="actions">
        <!-- <a class="ghost" href="javascript:void(0)" title="模拟搜索">搜索</a> -->
        <router-link to="/member" class="btn small">登录</router-link>
        <button class="burger" @click="open = !open" :aria-expanded="open" aria-label="展开菜单">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const open = ref(false);
const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    open.value = false;
  }
);
</script>

<style scoped>
.header{
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255,255,255,0.82);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}
.bar{
  height: 72px;
  display:flex;
  align-items:center;
  gap: 16px;
}
.brand{
  display:flex;
  align-items:center;
  gap: 12px;
  min-width: 260px;
}
.logo{
  width: 220px; /* 根据 logo 原图尺寸做适当放大以提高清晰度 */
  height: 64px; /* 提升高度以提高在 header 中的清晰度 */
  max-width: none; /* 覆盖全局 img max-width */
  object-fit: contain;
}
.name{ 
  font-size: 20px;
  font-weight: 900; 
  letter-spacing: 0.2px; 
}
.en{ font-size: 12px; color: var(--muted); margin-top: 2px; }

.nav{
  display:flex;
  align-items:center;
  gap: 8px;
  flex: 1;
  justify-content: center;
}
.navItem{
  padding: 10px 12px;
  border-radius: 999px;
  color: rgba(15,23,42,0.9);
  font-weight: 700;
  font-size: 14px;
}
.navItem.router-link-active{
  background: rgba(18,119,255,0.10);
  color: var(--brand);
}
.navItem:hover{
  background: rgba(15,23,42,0.05);
}
.actions{
  display:flex;
  align-items:center;
  gap: 10px;
}
.ghost{
  color: var(--muted);
  font-weight: 700;
  font-size: 14px;
  padding: 10px 12px;
  border-radius: 999px;
}
.ghost:hover{ background: rgba(15,23,42,0.05); color: var(--text); }
.btn.small{ padding: 9px 14px; }

.burger{
  display:none;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.9);
  cursor:pointer;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  gap: 5px;
}
.burger span{
  width: 18px;
  height: 2px;
  background: rgba(15,23,42,0.85);
  border-radius: 2px;
}

@media (max-width: 960px){
  .brand{ min-width: auto; }
  .nav{
    position: fixed;
    left: 16px;
    right: 16px;
    top: 76px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 14px;
    border-radius: 18px;
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    background: rgba(255,255,255,0.96);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: 180ms ease;
  }
  .nav[data-open="true"]{
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  .navItem{ text-align:center; }
  .ghost{ display:none; }
  .burger{ display:flex; }
}
</style>


