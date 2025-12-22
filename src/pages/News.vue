<template>
  <div class="container page">
    <div class="hero card">
      <div class="left">
        <div class="chip">新闻资讯</div>
        <h2>行业观察与政策解读</h2>
        <p>聚焦互联网、数字经济、网络安全等方向的资讯内容（演示数据）。</p>
      </div>
      <img class="img" src="/images/txw3_4.jpg" alt="新闻资讯" />
    </div>

    <div class="filters card">
      <button class="pill active">全部</button>
      <button class="pill">政策</button>
      <button class="pill">行业</button>
      <button class="pill">技术</button>
      <button class="pill">活动</button>
    </div>

    <div class="grid cols-4 list">
      <ContentCard
        v-for="it in items"
        :key="it.id"
        tag="资讯"
        :title="it.title"
        :date="it.date"
        :cover="it.cover"
        :url="it.url"
      />
    </div>
  </div>
</template>

<script setup>
import ContentCard from "../components/ContentCard.vue";
import { news as items } from "../data/mock";
</script>

<style scoped>
.page{ padding: 18px 0 6px; }
.hero{
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(21,180,255,0.10), rgba(18,119,255,0.08));
}
.left h2{
  margin: 10px 0 6px;
  font-weight: 950;
}
.left p{
  margin: 0;
  color: var(--muted);
  font-weight: 650;
  line-height: 1.8;
}
.img{
  width: 320px;
  height: 160px;
  object-fit: cover;
  border-radius: 18px;
  border: 1px solid var(--border);
}
.filters{
  margin-top: 16px;
  padding: 12px;
  border-radius: 18px;
  display:flex;
  flex-wrap: wrap;
  gap: 10px;
  background: rgba(255,255,255,0.92);
}
.pill{
  border: 1px solid var(--border);
  background: #fff;
  padding: 10px 14px;
  border-radius: 999px;
  cursor:pointer;
  font-weight: 800;
  color: rgba(15,23,42,0.75);
}
.pill.active{
  border-color: rgba(18,119,255,0.22);
  background: rgba(18,119,255,0.10);
  color: var(--brand);
}
.list{ margin-top: 16px; }

@media (max-width: 768px){
  .hero{ flex-direction: column; align-items: flex-start; }
  .img{ width: 100%; height: 180px; }
}
</style>


