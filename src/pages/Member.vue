<template>
  <div class="container page">
    <div class="grid cols-3">
      <div class="card login">
        <div class="chip">会员中心</div>
        <h2>登录</h2>
        <p class="muted">演示页面：可后续对接真实账号体系。</p>

        <label class="label">账号</label>
        <input class="input" placeholder="请输入账号" />

        <label class="label">密码</label>
        <input class="input" type="password" placeholder="请输入密码" />

        <button class="btn full" type="button">登录</button>
        <div class="tip">提示：本页仅用于课程设计演示。</div>
      </div>

      <div class="card panel">
        <div class="h">常用入口</div>
        <div class="links">
          <a class="lk" href="javascript:void(0)">会员名录</a>
          <a class="lk" href="javascript:void(0)">资料下载</a>
          <a class="lk" href="javascript:void(0)">通知公告</a>
          <a class="lk" href="javascript:void(0)">我的申请</a>
        </div>
      </div>

      <div class="card panel">
        <div class="h">服务说明</div>
        <div class="txt">
          我们为会员提供活动报名、信息发布、资源对接、培训学习等服务能力。后续可按课程要求补充
          CRUD 与后台管理。
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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


