<template>
  <div class="container page">
    <div class="hero card">
      <div class="left">
        <div class="chip">关于协会</div>
        <h2>连接资源 · 促进协同 · 服务发展</h2>
        <p>
          太空市互联网协会致力于搭建行业交流平台，服务会员与社会，推动互联网产业高质量发展。
        </p>
      </div>
      <img class="img" src="/images/t3_2.png" alt="关于协会" />
    </div>

    <div class="grid cols-3 blocks">
      <div class="card b">
        <div class="h">协会宗旨</div>
        <div class="t">遵循“服务、协作、创新”的理念，促进产业协同与技术交流。</div>
      </div>
      <div class="card b">
        <div class="h">主要职责</div>
        <div class="t">行业研究、政策宣贯、标准推广、人才培养、交流合作与资源对接。</div>
      </div>
      <div class="card b">
        <div class="h">加入我们</div>
        <div class="t">欢迎企业、院校、科研机构加入，共建互联生态与创新网络。</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
  object-fit: contain;
  border-radius: 18px;
}
.blocks{ margin-top: 16px; }
.b{ padding: 16px; border-radius: 18px; background: rgba(255,255,255,0.92); }
.h{ font-weight: 950; }
.t{ margin-top: 10px; color: var(--muted); font-weight: 650; line-height: 1.8; }

@media (max-width: 768px){
  .hero{ flex-direction: column; align-items: flex-start; }
  .img{ width: 100%; height: 180px; }
}
</style>


