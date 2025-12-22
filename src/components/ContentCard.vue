<template>
  <article class="card item">
    <div class="cover" :style="{ backgroundImage: `url(${cover})` }" />
    <div class="body">
      <div class="meta">
        <span class="tag">{{ tag }}</span>
        <span class="date">{{ date }}</span>
      </div>
      <h3 class="title" :title="title">{{ title }}</h3>
      <a v-if="url" :href="url" class="more" target="_blank" rel="noopener noreferrer">
        <span>查看详情</span>
        <span class="arrow">→</span>
      </a>
      <div v-else class="more">
        <span>查看详情</span>
        <span class="arrow">→</span>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  date: { type: String, default: "" },
  cover: { type: String, default: "" },
  tag: { type: String, default: "资讯" }
  , url: { type: String, default: "" }
});
</script>

<style scoped>
.item{
  overflow:hidden;
  transition: transform 180ms ease, box-shadow 180ms ease;
}
.item:hover{
  transform: translateY(-3px);
  box-shadow: 0 18px 34px rgba(15, 23, 42, 0.12);
}
.cover{
  height: 150px;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid var(--border);
}
.body{ padding: 14px 14px 12px; }
.meta{
  display:flex;
  justify-content: space-between;
  align-items:center;
  gap: 10px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
}
.tag{
  color: var(--brand);
  background: rgba(18,119,255,0.10);
  padding: 4px 8px;
  border-radius: 999px;
}
.title{
  margin: 10px 0 10px;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 900;
  height: 46px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.more{
  display:flex;
  align-items:center;
  justify-content: space-between;
  font-weight: 800;
  color: rgba(15,23,42,0.78);
  font-size: 13px;
}
.arrow{
  color: var(--brand);
  font-size: 16px;
}
</style>


