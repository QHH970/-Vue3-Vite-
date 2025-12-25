<template>
  <div class="container page">
    <div class="card panel">
      <div class="h">我的申请</div>
      <div class="txt" v-if="applications.length===0">暂无申请记录</div>

      <div class="apps" v-else>
        <div v-for="(app, idx) in applications" :key="idx" class="app">
          <div class="row">
            <div><strong>标题：</strong>{{ app.title || '未命名' }}</div>
            <div><strong>状态：</strong><span :class="statusClass(app.status)">{{ app.status || '待处理' }}</span></div>
          </div>
          <div class="row"><strong>提交时间：</strong>{{ formatDate(app.createdAt) }}</div>
          <div class="row"><strong>内容：</strong></div>
          <pre class="content">{{ app.content }}</pre>
          <div class="actions">
            <button class="btn" @click="viewDetail(idx)">查看</button>
            <button class="btn" @click="remove(idx)">删除</button>
          </div>
        </div>
      </div>
    </div>

    <el-dialog :visible.sync="showDialog" width="600px" title="申请详情">
      <div v-if="current">
        <p><strong>标题：</strong>{{ current.title }}</p>
        <p><strong>状态：</strong>{{ current.status }}</p>
        <p><strong>提交时间：</strong>{{ formatDate(current.createdAt) }}</p>
        <p><strong>详细内容：</strong></p>
        <pre class="content">{{ current.content }}</pre>
      </div>
      <template #footer>
        <el-button @click="showDialog=false">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const applications = ref([])
const showDialog = ref(false)
const current = ref(null)

function loadApplications(){
  try{
    const raw = localStorage.getItem('applications') || '[]'
    applications.value = JSON.parse(raw)
  }catch(e){
    applications.value = []
  }
}

function formatDate(ts){
  if(!ts) return '-'
  const d = new Date(ts)
  return d.toLocaleString()
}

function statusClass(s){
  if(!s) return 'st-pending'
  if(s.toLowerCase().includes('通过') || s.toLowerCase().includes('approved')) return 'st-ok'
  if(s.toLowerCase().includes('拒绝') || s.toLowerCase().includes('rejected')) return 'st-bad'
  return 'st-pending'
}

function viewDetail(idx){
  current.value = applications.value[idx]
  showDialog.value = true
}

function remove(idx){
  if(!confirm('确认删除该申请？')) return
  applications.value.splice(idx,1)
  localStorage.setItem('applications', JSON.stringify(applications.value))
}

onMounted(()=>{
  loadApplications()
})
</script>

<style scoped>
.page{ padding:12px; }
.h{ font-size:18px; font-weight:bold;  margin-top:12px; margin-left: 12px; }
.txt{ margin-top:12px; }
.apps{ display:flex; flex-direction:column; gap:12px; margin-top:12px; }
.app{ padding:12px; border-radius:12px; background:#fff; border:1px solid var(--border); }
.row{ margin:6px 0; }
.content{ background: #f7f7f9; padding:10px; border-radius:8px; overflow:auto; }
.actions{ margin-top:8px; display:flex; gap:8px; }
.st-pending{ color: #d97706 }
.st-ok{ color: #059669 }
.st-bad{ color: #dc2626 }
</style>
