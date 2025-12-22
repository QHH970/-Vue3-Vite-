<template>
  <div class="container page">
    <div class="hero card">
      <div class="left">
        <div class="chip">协会动态</div>
        <h2>最新活动与通知</h2>
        <p>展示协会近期活动、会议与走访内容（演示数据，可后续对接后端）。</p>
      </div>
      <img class="img" src="/images/t3_3.jpg" alt="协会动态" />
    </div>

    <div class="grid cols-3 list">
      <ContentCard
        v-for="it in items"
        :key="it.id"
        tag="动态"
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
import { dynamics as items } from "../data/mock";
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
  background: linear-gradient(135deg, rgba(18,119,255,0.10), rgba(21,180,255,0.08));
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
.list{ margin-top: 18px; }

@media (max-width: 768px){
  .hero{ flex-direction: column; align-items: flex-start; }
  .img{ width: 100%; height: 180px; }
}
</style>


