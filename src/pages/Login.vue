<template>
  <div class="container page">
    <div class="grid cols-3">
      <div class="card login">
        <div class="chip">会员登录</div>

        <!-- 显示登录成功 -->
          <el-row justify="center" align="middle" class="result-row">
            <el-col :sm="24" :lg="12" :xl="8">
              <div class="result-inner">
                <el-result
                  icon="success"
                  title="登录成功"
                  :sub-title="`欢迎，${form.username}`"
                >
                  <template #extra>
                    <el-button type="primary" @click="onBack">返回首页</el-button>
                  </template>
                </el-result>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 本地模拟登录：如果通过 query 提供 username，则默认显示成功
const form = ref({ username: route.query.username || '', password: '' })
const msg = ref('')
const loading = ref(false)
const loginSuccess = ref(!!route.query.username)

function onSubmit() {
  msg.value = ''
  // 简单验证：用户名和密码不能为空
  if (!form.value.username || !form.value.password) {
    msg.value = '请输入用户名和密码'
    return
  }
  // 模拟登录成功（不调用后端）
  loading.value = false
  loginSuccess.value = true
  // 保持 username 在 query，方便刷新仍显示成功
  router.replace({ name: 'login', query: { username: form.value.username } })
}

function onCancel() {
  router.back()
}

function onBack(){
  router.push({ name: 'home' })
}
</script>

<style scoped>
.login{ padding: 16px; border-radius: 20px; margin: 100px auto 100px auto; background: rgba(255,255,255,0.92); width: 1180px;height:auto; }
.login-form{ max-width: 420px; }
.tip{ margin-top: 10px; color: rgba(220,38,38,0.8); font-weight: 700; }

@media (max-width: 900px){
  .result-row{ min-height: 50vh; }
  .result-inner{ transform: scale(1); }
  .result-inner .el-result{ max-width: 520px; }
  .result-inner .el-result__icon{ font-size: 72px; height:72px; width:72px; }
}
</style>