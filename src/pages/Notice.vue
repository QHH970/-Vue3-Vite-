<template>
  <div class="container page">
    <div class="hero card">
      <div class="left">
        <div class="chip">通知公告</div>
        <h2>最新通知与重要公告</h2>
        <p>展示站内与协会发布的重要通知，支持按类别筛选与查看详情。</p>
      </div>
      <img class="img" src="/images/notice.jpg" alt="通知公告" />
    </div>

    <div class="filters card">
      <button
        v-for="cat in categories"
        :key="cat"
        class="pill"
        :class="{ active: cat === activeCategory }"
        @click="setFilter(cat)"
      >
        {{ cat }}
      </button>
    </div>

    <div class="grid cols-3 list">
      <ContentCard
        v-for="it in filteredItems"
        :key="it.id"
        tag="公告"
        :title="it.title"
        :date="it.date"
        :cover="it.cover"
        :url="it.url"
        @click="preview(it.url, $event)"
      />
    </div>

    <div v-if="selected" class="preview card">
      <div class="h">预览</div>
      <iframe :src="selected" class="iframe-preview"></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ContentCard from '../components/ContentCard.vue'

// 使用 public 目录下的本地文件作为公告数据（开发环境）
const announcements = [
  { id: 1, title: '关于召开“2026（第十六届）中国互联网产业年会”的通知', date: '2025-12-01', cover: '/images/notice_title.jpg', url: '/association-charter.pdf', category: '通知' },
  { id: 2, title: '关于举办2025算力互联网大会的会议通知', date: '2025-11-27', cover: '/images/notice_title.jpg', url: '/association-charter.pdf', category: '活动' },
  { id: 3, title: '关于召开智创“新”北京暨2025（第二十二届）北京互联网大会的通知', date: '2025-11-20', cover: '/images/notice_title.jpg', url: '/association-charter.pdf', category: '系统' }
]

const categories = ['全部', '通知', '活动', '系统']
const activeCategory = ref('全部')
const selected = ref(null)

function setFilter(cat) {
  activeCategory.value = cat
}

const filteredItems = computed(() => {
  if (activeCategory.value === '全部') return announcements
  return announcements.filter((i) => i.category === activeCategory.value)
})

// function preview(url, ev) {
//   // 阻止 ContentCard 内部链接直接打开新窗口时也触发预览
//   if (ev) ev.stopPropagation()
//   selected.value = url
// }
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
  background: linear-gradient(135deg, rgba(255,200,100,0.06), rgba(255,150,50,0.04));
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

.preview{ margin-top: 18px; padding: 14px; }
.iframe-preview{ width: 100%; height: 720px; border: none; }

@media (max-width: 768px){
  .hero{ flex-direction: column; align-items: flex-start; }
  .img{ width: 100%; height: 180px; }
}
</style>
