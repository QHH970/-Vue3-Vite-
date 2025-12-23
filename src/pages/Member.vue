<template>
  <div class="container page">
    <div class="grid cols-3">
            <div class="card login">
              <div class="chip">会员中心</div>
              <h2>登录</h2>

              <label class="label">账号</label>
              <input v-model="username" class="input" placeholder="请输入账号" />

              <label class="label">密码</label>
              <input v-model="password" class="input" type="password" placeholder="请输入密码" />

              <button v-if="!loginSuccess" @click="gotoLogin" class="btn full" type="button">登录</button>

              <div v-if="!loginSuccess && msg" class="tip">{{ msg }}</div>

              <div v-else-if="loginSuccess">
                <el-row>
                  <el-col :sm="24" :lg="12" :xl="8">
                    <el-result
                      icon="success"
                      title="登录成功"
                      :sub-title="`欢迎，${username}`"
                    >
                      <template #extra>
                        <el-button type="primary" @click="onBack">返回首页</el-button>
                      </template>
                    </el-result>
                  </el-col>
                </el-row>
              </div>
            </div>

      <div class="card panel">
        <div class="h">常用入口</div>
        <div class="links">
          <a class="lk" href="javascript:void(0)">会员名录</a>
          <a class="lk" href="/association-charter.pdf" download>资料下载</a>
          <router-link class="lk" to="/Notice">通知公告</router-link>
          <a class="lk" href="javascript:void(0)">我的申请</a>
        </div>
      </div>

      <div class="card panel">
        <div class="h">服务说明</div>
        <div class="txt">
          我们为会员提供活动报名、信息发布、资源对接、培训学习等服务能力。后续可补充
          CRUD 与后台管理。
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const msg = ref('')
// 暂时默认登录为true，测试显示登录成功组件
const loginSuccess = ref(false)

function gotoLogin(){
  router.push({ name: 'login', query: { username: username.value } })
}

async function login(){
  msg.value = ''
  try{
    const res = await fetch('http://localhost:8081/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value })
    })
    const data = await res.json()
    if (!res.ok) {
      msg.value = data.msg || '登录失败'
      return
    }
    // 存储 token 和用户信息
    if (data.token) localStorage.setItem('auth_token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user || {}))
    // 显示 Element Plus 登录成功组件
    loginSuccess.value = true
  }catch(e){
    msg.value = '无法连接到后端（请确认 server 已启动）'
  }
}

function onBack(){
  // 重置并跳转回首页
  username.value = ''
  password.value = ''
  msg.value = ''
  loginSuccess.value = false
  router.push({ name: 'home' })
}
</script>

<style scoped>
.page{ padding: 18px 0 6px; }
.login{
  padding: 16px;
  border-radius: 20px;
  background: rgba(255,255,255,0.92);
}
h2{
  margin: 10px 0 6px;
  font-weight: 950;
}
.muted{ color: var(--muted); font-weight: 650; margin: 0 0 12px; }
.label{ display:block; margin: 10px 0 6px; font-weight: 850; font-size: 13px; }
.input{
  width: 100%;
  height: 44px;
  border-radius: 14px;
  border: 1px solid var(--border);
  padding: 0 12px;
  outline: none;
  background: #fff;
  font-weight: 700;
}
.input:focus{ border-color: rgba(18,119,255,0.35); box-shadow: 0 0 0 4px rgba(18,119,255,0.10); }
.full{ width: 100%; margin-top: 14px; }
.tip{ margin-top: 10px; color: rgba(15,23,42,0.55); font-weight: 700; font-size: 12px; }

.panel{
  padding: 16px;
  border-radius: 20px;
  background: rgba(255,255,255,0.92);
}
.h{ font-weight: 950; }
.links{ margin-top: 10px; display:flex; flex-direction: column; gap: 10px; }
.lk{
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: #fff;
  font-weight: 850;
  color: rgba(15,23,42,0.78);
}
.lk:hover{ border-color: rgba(18,119,255,0.24); background: rgba(18,119,255,0.06); color: var(--brand); }
.txt{ margin-top: 10px; color: var(--muted); font-weight: 650; line-height: 1.8; }
</style>


