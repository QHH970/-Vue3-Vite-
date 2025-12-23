<template>
  <div class="container page">
    <h1 class="title">联系我们</h1>

    <div class="grid cols-2 layout">
      <div class="panel">
        <h3>太空市互联网协会</h3>
        <p>地址：甘肃省兰州市营门村一号学生九号公寓409</p>
        <hr />
        <h4>联系方式</h4>
        <ul>
          <li>邮编：73000</li>
          <li>邮箱：1371045387@qq.com</li>
          <li>电话：18298321181 </li>
        </ul>
      </div>

    <div class="panel">
      <h3>在线联系</h3>
      <div class="image-container" >
          <p>如需加入或咨询，请使用邮箱或电话联系，或关注我们的公众号获取更多信息</p> 
          <img src="/images/xiaohui.jpg" alt="校徽" style="max-width:200px;" />
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
// 静态展示页，无脚本逻辑
</script>

<style scoped>
.title { margin-bottom: 12px; font-weight: 950; }
.panel { padding: 16px; border-radius: 18px; background: rgba(255,255,255,0.96); }
.layout { gap: 18px; }
.image-container {
  display: flex;
  gap: 380px; /* 图片文字间距 */
  /* margin-top: 20px; */
}

/* .image-container img {
  max-width: 200px;
} */
</style>