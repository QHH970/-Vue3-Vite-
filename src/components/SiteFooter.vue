<template>
  <footer class="footer">
    <div class="top">
      <div class="container grid">
        <div class="brand">
          <div class="row">
            <img class="logo" src="/images/logo.png" alt="太空市互联网协会" />
            <div>
              <div class="name">太空市互联网协会</div>
              <div class="en">Internet Society of Taikong</div>
            </div>
          </div>
          <p class="desc">
            面向会员、面向行业、面向政府，搭建交流协作平台，推动产业协同创新与数字化转型。
          </p>
        </div>

        <div class="col">
          <div class="h">快速入口</div>
          <router-link class="a" to="/dynamics">协会动态</router-link>
          <router-link class="a" to="/news">新闻资讯</router-link>
          <router-link class="a" to="/member">会员中心</router-link>
          <router-link class="a" to="/about">关于协会</router-link>
        </div>

        <div class="col">
          <div class="h">联系我们</div>
          <div class="t">电话：028-88888888</div>
          <div class="t">邮箱：info@taikong-isa.org</div>
          <div class="t">地址：太空市高新区创新大道 88 号</div>
        </div>

        <div class="col">
          <div class="h">公众号</div>
          <div class="qr">
            <img src="/images/twx3_1.jpg" alt="二维码" />
          </div>
          <div class="t muted">扫码关注协会动态</div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="container b">
        <span>© {{ year }} 太空市互联网协会</span>
        <span class="sep">|</span>
        <span>本项目为课程设计演示站点</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.footer{
  margin-top: 34px;
  background: linear-gradient(180deg, rgba(2,6,23,0.02), rgba(2,6,23,0.03));
}
.top{
  background: linear-gradient(135deg, #0b4bd8, #15b4ff);
  color: #fff;
  padding: 34px 0 26px;
}
.grid{
  display:grid;
  grid-template-columns: 1.4fr 1fr 1.2fr 0.9fr;
  gap: 18px;
  align-items: start;
}
.row{
  display:flex;
  gap: 12px;
  align-items:center;
}
.name{ font-weight: 950; letter-spacing: 0.2px; }
.en{ font-size: 12px; opacity: 0.9; margin-top: 2px; }
  .logo{
    width: 110px; /* 根据 logo 原图尺寸做适当放大以提高清晰度 */
    height: auto;
    max-width: none; /* 覆盖全局 img { max-width: 100% } 限制 */
    object-fit: contain;
  }
.desc{
  margin: 12px 0 0;
  opacity: 0.92;
  line-height: 1.8;
  max-width: 420px;
}
.col .h{
  font-weight: 950;
  margin-bottom: 10px;
}
.a{
  display:block;
  padding: 7px 0;
  opacity: 0.92;
  font-weight: 700;
}
.a:hover{ opacity: 1; text-decoration: underline; }
.t{
  padding: 6px 0;
  opacity: 0.92;
  font-weight: 650;
}
.muted{ opacity: 0.85; }
.qr{
  width: 110px;
  height: 110px;
  border-radius: 18px;
  background: rgba(255,255,255,0.18);
  border: 1px solid rgba(255,255,255,0.22);
  padding: 10px;
}
.qr img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
.bottom{
  border-top: 1px solid rgba(15,23,42,0.08);
  padding: 14px 0;
  color: rgba(15,23,42,0.65);
}
.b{
  display:flex;
  gap: 10px;
  align-items:center;
  justify-content:center;
  font-weight: 700;
  font-size: 13px;
}
.sep{ opacity: 0.55; }

@media (max-width: 1024px){
  .grid{ grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px){
  .grid{ grid-template-columns: 1fr; }
  .b{ flex-direction: column; }
}
</style>


