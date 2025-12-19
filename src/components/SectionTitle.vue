<template>
  <div class="wrap">
    <div class="line"></div>
    <div class="title">
      <div class="cn">{{ title }}</div>
      <div v-if="subtitle" class="en">{{ subtitle }}</div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: "" }
});
</script>

<style scoped>
.wrap{
  display:flex;
  align-items:center;
  gap: 14px;
  margin: 24px 0 14px;
}
.line{
  height: 1px;
  flex: 1;
  background: linear-gradient(90deg, transparent, rgba(15,23,42,0.18), transparent);
}
.title{
  text-align:center;
}
.cn{
  font-weight: 950;
  letter-spacing: 0.2px;
}
.en{
  margin-top: 4px;
  font-size: 12px;
  color: var(--muted);
}
</style>


