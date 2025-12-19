<template>
  <section class="hero">
    <Swiper
      class="swiper"
      :modules="modules"
      :loop="true"
      :autoplay="{ delay: 4200, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :navigation="true"
    >
      <SwiperSlide v-for="s in slides" :key="s.title">
        <div class="slide" :style="{ backgroundImage: `url(${s.image})` }">
          <div class="overlay"></div>
          <div class="container inner">
            <div class="chip">TAIKONG · ISA</div>
            <h1 class="title">{{ s.title }}</h1>
            <p class="sub">{{ s.subtitle }}</p>
            <div class="cta">
              <a class="btn" href="javascript:void(0)">了解更多</a>
              <a class="link" href="#dynamics">查看动态</a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

defineProps({
  slides: { type: Array, required: true }
});

const modules = [Autoplay, Pagination, Navigation];
</script>

<style scoped>
.hero{
  width: 100%;
  background: #0b4bd8;
}
.swiper :deep(.swiper-pagination-bullet){
  background: rgba(255,255,255,0.65);
  opacity: 1;
}
.swiper :deep(.swiper-pagination-bullet-active){
  background: #fff;
}
.swiper :deep(.swiper-button-prev),
.swiper :deep(.swiper-button-next){
  color: rgba(255,255,255,0.92);
}
.slide{
  position: relative;
  min-height: 460px;
  background-size: cover;
  background-position: center;
  display:flex;
  align-items: center;
}
.overlay{
  position:absolute;
  inset:0;
  background:
    radial-gradient(1200px 480px at 30% 40%, rgba(21,180,255,0.65), transparent 60%),
    linear-gradient(90deg, rgba(2,6,23,0.70), rgba(2,6,23,0.10));
}
.inner{
  position: relative;
  padding: 44px 0;
}
.title{
  margin: 12px 0 8px;
  font-size: clamp(32px, 4.2vw, 52px);
  font-weight: 950;
  color: #fff;
  letter-spacing: 0.2px;
}
.sub{
  margin: 0;
  color: rgba(255,255,255,0.86);
  font-weight: 600;
  font-size: 16px;
  max-width: 560px;
  line-height: 1.7;
}
.cta{
  margin-top: 18px;
  display:flex;
  align-items:center;
  gap: 14px;
}
.link{
  color: rgba(255,255,255,0.9);
  font-weight: 800;
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.10);
  border: 1px solid rgba(255,255,255,0.18);
}
.link:hover{ background: rgba(255,255,255,0.16); }

@media (max-width: 640px){
  .slide{ min-height: 420px; }
  .cta{ flex-direction: column; align-items: flex-start; }
}
</style>


