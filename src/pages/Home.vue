<template>
  <div>
    <HeroCarousel :slides="heroSlides" />

    <section class="container quick">
      <div class="grid cols-4">
        <div class="card q">
          <div class="ic">📚</div>
          <div class="t">协会章程</div>
          <div class="d">制度与文件下载</div>
        </div>
        <div class="card q">
          <div class="ic">🧾</div>
          <div class="t">申请入会</div>
          <div class="d">在线提交申请材料</div>
        </div>
        <div class="card q">
          <div class="ic">🏢</div>
          <div class="t">组织架构</div>
          <div class="d">理事会与委员会</div>
        </div>
        <div class="card q">
          <div class="ic">💬</div>
          <div class="t">联系我们</div>
          <div class="d">电话/邮箱/地址</div>
        </div>
      </div>
    </section>

    <section id="dynamics" class="container section">
      <SectionTitle title="协会动态" subtitle="Association dynamics" />
      <div class="grid cols-3">
        <ContentCard
          v-for="it in dynamics"
          :key="it.id"
          tag="动态"
          :title="it.title"
          :date="it.date"
          :cover="it.cover"
          :url="it.url"
        />
      </div>
      <div class="moreWrap">
        <router-link class="btn" to="/dynamics">更多内容</router-link>
      </div>
    </section>

    <section class="container section">
      <SectionTitle title="新闻资讯" subtitle="News information" />
      <div class="grid cols-4">
        <ContentCard
          v-for="it in news"
          :key="it.id"
          tag="资讯"
          :title="it.title"
          :date="it.date"
          :cover="it.cover"
          :url="it.url"
        />
      </div>
      <div class="moreWrap">
        <router-link class="btn" to="/news">更多内容</router-link>
      </div>
    </section>

    <section class="container section">
      <SectionTitle title="合作伙伴" subtitle="Work partner" />
      <PartnerStrip :partners="partners" />
    </section>
  </div>
</template>

<script setup>
import HeroCarousel from "../components/HeroCarousel.vue";
import SectionTitle from "../components/SectionTitle.vue";
import ContentCard from "../components/ContentCard.vue";
import PartnerStrip from "../components/PartnerStrip.vue";
import { heroSlides, dynamics, news, partners } from "../data/mock";
</script>

<style scoped>
.quick{
  margin-top: -26px;
  position: relative;
  z-index: 2;
}
.q{
  padding: 16px 16px 14px;
  border-radius: 18px;
  background: rgba(255,255,255,0.92);
}
.ic{
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display:flex;
  align-items:center;
  justify-content:center;
  background: rgba(18,119,255,0.10);
  border: 1px solid rgba(18,119,255,0.18);
  font-size: 18px;
}
.t{
  margin-top: 10px;
  font-weight: 950;
}
.d{
  margin-top: 6px;
  color: var(--muted);
  font-weight: 650;
  font-size: 13px;
}
.section{ padding: 10px 0 6px; }
.moreWrap{
  margin: 16px 0 2px;
  display:flex;
  justify-content:center;
}
</style>


