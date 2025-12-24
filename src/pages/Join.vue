<template>
  <div class="container page">
    <div class="card form">
      <div class="chip">入会申请</div>
      <h2>填写入会申请表</h2>
      <p class="muted">请填写下列信息，我们会尽快与您联系（演示页面）。</p>

      <form @submit.prevent="onSubmit">
        <label class="label">姓名</label>
        <input v-model="form.name" class="input" placeholder="请输入您的姓名" required />

        <label class="label">单位/组织</label>
        <input v-model="form.organization" class="input" placeholder="请输入单位或组织名称" />

        <label class="label">邮箱</label>
        <input v-model="form.email" class="input" type="email" placeholder="请输入联系邮箱" required />

        <label class="label">电话</label>
        <input v-model="form.phone" class="input" placeholder="请输入联系电话" />

        <label class="label">申请说明</label>
        <textarea v-model="form.note" class="input" rows="4" placeholder="可选：补充说明"></textarea>

        <button class="btn full" type="submit">提交申请</button>
      </form>

      <div v-if="submitted" class="tip">已提交（演示），我们会在 3 个工作日内与您联系。</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({ name: "", organization: "", email: "", phone: "", note: "" });
const submitted = ref(false);

function saveApplication(data){
  try{
    const raw = localStorage.getItem('applications') || '[]'
    const arr = JSON.parse(raw)
    arr.unshift(data)
    localStorage.setItem('applications', JSON.stringify(arr))
  }catch(e){
    console.error('saveApplication error', e)
  }
}

function onSubmit() {
  // 演示：将表单保存到 localStorage，以供 Myapplication.vue 显示
  const payload = {
    title: `入会申请 - ${form.value.name || form.value.organization || '匿名'}`,
    name: form.value.name,
    organization: form.value.organization,
    email: form.value.email,
    phone: form.value.phone,
    content: form.value.note,
    status: '待处理',
    createdAt: Date.now()
  }
  saveApplication(payload)
  submitted.value = true
  // 重置表单
  form.value = { name: "", organization: "", email: "", phone: "", note: "" }
  // 跳转到我的申请页面以查看提交内容（演示）
  router.push({ name: 'myapplication' })
}
</script>

<style scoped>
.page{ padding: 18px 0 6px; }
.form{ padding: 18px; border-radius: 20px; background: rgba(255,255,255,0.96); }
.chip{ font-weight: 900; color: var(--brand); }
h2{ margin: 10px 0 6px; font-weight: 950; }
.muted{ color: var(--muted); font-weight: 650; margin: 0 0 12px; }
.label{ display:block; margin: 10px 0 6px; font-weight: 850; font-size: 13px; }
.input{ width: 100%; min-height: 44px; border-radius: 12px; border: 1px solid var(--border); padding: 8px 12px; outline: none; background: #fff; font-weight: 700; }
textarea.input{ resize: vertical; }
.input:focus{ border-color: rgba(18,119,255,0.35); box-shadow: 0 0 0 4px rgba(18,119,255,0.08); }
.full{ width: 100%; margin-top: 14px; }
.tip{ margin-top: 12px; color: rgba(15,23,42,0.55); font-weight: 700; font-size: 13px; }
</style>
