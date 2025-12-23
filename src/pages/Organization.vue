<template>
  <div class="container page">
    <h1 class="title">组织架构</h1>

    <div class="grid cols-2 layout">
      <!-- 左侧：组织结构图 -->
      <div class="panel diagram">
        <div class="chip">组织结构图</div>
        <div class="diagram-img-wrap">
          <!-- 将静态组织结构图放到 public/images/organization-structure.png -->
          <img src="/images/organization-structure.png" alt="组织结构图" />
        </div>
      </div>

      <!-- 右侧：部门说明 -->
      <div class="panel">
        <div class="dept-desc">
          <div class="grid cols-2 deptList">
            <div>
              <h3>部门介绍</h3>
              <ul>
                <li>会员大会：审议章程、重大事项、选举产生理事/监事等</li>
                <li>理事会：协会核心决策机构（对应网站“协会章程/协会动态/重大会议发布”）</li>
                <li>监事会：监督财务与规范运作（增强公信力）</li>
                <li>会长/副会长/秘书长：会长对外代表，秘书长主抓执行</li>
                <li>秘书处：负责网站内容的日常运行：</li>
              </ul>
            </div>

            <div>
              <h3>专业委员会</h3>
              <ul>
                <li>技术创新与产业发展委员会:负责AI、云、大数据相关技术的研究与推广</li>
                <li>网络安全与可信治理委员会：负责网络安全、数据隐私、可信计算等方面的研究与规范</li>
                <li>标准与评价委员会：负责制定行业标准、评价会员活动、规范会员行为</li>
                <li>数字经济与企业服务委员会：负责数字化转型、供需对接、企业服务等方面的研究与推广</li>
                <li>科普教育与人才发展委员会：负责培训、竞赛、产学研合作等方面的活动</li>
                <li>青年与创业委员会：负责青年会员的培育、孵化项目的管理与路演活动</li>
                <li>公共服务与对外交流委员会：负责协会与外部合作、交流合作、联盟等方面的活动</li>
              </ul>
            </div>
            <div>
              <h3>秘书处</h3>
              <ul>
                <li><strong>综合办公室：</strong>负责行政、人事、档案、会议组织等日常事务。</li>
                <li><strong>会员服务部：</strong>负责入会审核、会员管理与权益维护。</li>
                <li><strong>宣传与媒体中心：</strong>负责网站、公众号、新闻发布与品牌传播。</li>
                <li><strong>活动与会务部：</strong>负责论坛、培训、沙龙与接待工作。</li>
                <li><strong>项目与合作部：</strong>负责政企合作、合作伙伴对接与招商事宜。</li>
                <li><strong>政策研究与智库部：</strong>承担行业研究、白皮书撰写与政策建议。</li>
                <li><strong>财务与资产部：</strong>负责预算编制、审计对接与资产管理。</li>
                <li><strong>信息化与数据中心：</strong>负责网站平台、会员系统与信息安全。</li>
              </ul>
            </div>
          
          <div>
            <h3>分支机构（可选）</h3>
            <ul>
              <li>区县 / 园区工作站</li>
              <li>行业分会（如：软件分会、AI分会等）</li>
            </ul>
          </div>
            
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 静态页面，无需脚本
</script>

<style scoped>
/* 原有样式保持不变（将你原文件中的 style 内容全部保留） */
.page {
  padding: 18px 0 6px;
}

.title {
  margin-bottom: 12px;
  font-weight: 950;
}

.layout {
  gap: 18px;
}

.panel {
  padding: 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.96);
}

.tree .top {
  font-weight: 950;
  font-size: 18px;
  text-align: center;
  margin-bottom: 12px
}

.level {
  display: flex;
  gap: 12px;
  justify-content: space-between;
  margin-bottom: 12px
}

.level.small {
  gap: 10px;
  margin-bottom: 12px
}

.node {
  padding: 10px;
  border-radius: 12px;
  background: linear-gradient(180deg, #fff, #f6f9ff);
  border: 1px solid var(--border);
  text-align: center;
  font-weight: 800
}

.muted {
  display: block;
  font-weight: 600;
  font-size: 12px;
  color: var(--muted);
}

.deptList ul {
  margin: 8px 0 0;
  padding-left: 16px;
}

.deptList li {
  margin: 6px 0;
  font-weight: 700;
  color: rgba(15, 23, 42, 0.88)
}

.diagram-img-wrap {
  display: flex;
  justify-content: center;
  padding: 12px;
}

.diagram-img-wrap img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: #fff
}

.dept-desc {
  margin-top: 12px
}

.dept-desc h3 {
  margin: 0 0
}

.dept-desc ul {
  padding-left: 16px;
}

.dept-desc li {
  margin: 6px 0;
  line-height: 1.6
}

.small {
  font-size: 12px
}

@media (max-width: 960px) {
  .grid.cols-2 {
    grid-template-columns: 1fr
  }
}
</style>