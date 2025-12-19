# 太空市互联网协会网站（Vue3 + Vite）说明文档

本项目基于你提供的原型图（参考成都市互联网协会风格）实现一个课程设计演示站点，重点完成：首页大Banner、协会动态、新闻资讯、合作伙伴、页脚与基础路由框架，并尽量做得美观、响应式。

---

## 1. 如何运行

在项目根目录（`D:\project\web02`）执行：

```bash
npm install
npm run dev
```

打开终端提示的地址（一般为 `http://localhost:5173/`）。

打包与预览（可选）：

```bash
npm run build
npm run preview
```

---

## 2. 项目结构（你应该从哪里看起）

核心目录与文件：

- **`index.html`**：Vite 入口 HTML，挂载点 `#app`，标题与 favicon。
- **`src/main.js`**：Vue 应用入口，创建 app、挂载路由、引入全局样式。
- **`src/App.vue`**：应用壳（布局骨架），包含公共头部/页脚与 `router-view`。
- **`src/router/index.js`**：路由定义（首页/协会动态/新闻资讯/会员中心/关于协会），hash 模式。
- **`src/styles/main.css`**：全局基础样式（配色变量、容器、卡片、网格、按钮等）。
- **`src/data/mock.js`**：演示数据（轮播、动态列表、新闻列表、合作伙伴列表）。
- **`src/components/*`**：可复用组件（头部、轮播、卡片、分区标题、合作伙伴条、页脚）。
- **`src/pages/*`**：页面组件（Home、Dynamics、News、Member、About）。
- **`public/images/*`**：静态资源（从你原来的 `images/` 复制而来）。

---

## 3. 页面与模块功能说明（每个部分做什么）

### 3.1 顶部导航（Header）

- **功能/作用**
  - 展示站点品牌（Logo + 中文名 + 英文名）
  - 提供核心导航入口：首页、协会动态、新闻资讯、会员中心、关于协会
  - 移动端自适应：按钮展开/收起导航

- **对应文件**
  - `src/components/SiteHeader.vue`

- **具体如何实现**
  - 使用 `router-link` 实现单页应用导航（不刷新页面）
  - 使用 `useRoute()` + `watch()`：当路由变化时自动关闭移动端菜单
  - CSS 使用 `position: sticky` + `backdrop-filter` 做玻璃拟态效果，提升美观与现代感
  - 通过 `@media (max-width: 960px)` 将导航从横向菜单切换为弹出式网格菜单

---

### 3.2 首页大 Banner 轮播（Hero Carousel）

- **功能/作用**
  - 呈现主视觉与核心标语（类似原型的顶部大图与宣传语）
  - 自动轮播 + 可点分页 + 可手动切换

- **对应文件**
  - `src/components/HeroCarousel.vue`
  - `src/data/mock.js`（`heroSlides`）

- **具体如何实现**
  - 使用 `swiper`（现代轮播库）+ Vue 组件 `Swiper/SwiperSlide`
  - 开启 `Autoplay/Pagination/Navigation` 模块
  - 每一张 slide 用 `background-image` 做大图背景，并叠加渐变遮罩提升文字可读性
  - CTA（按钮/锚点）用于模拟“了解更多/查看动态”入口

---

### 3.3 首页快捷入口（四宫格）

- **功能/作用**
  - 对应原型中常见的“章程/入会/组织/联系”等快捷入口
  - 让首页信息架构更清晰，用户更快到达目标

- **对应文件**
  - `src/pages/Home.vue`（`quick` 区块）

- **具体如何实现**
  - 使用全局 `.grid.cols-4` 网格能力
  - `card` 组件化视觉（圆角、阴影、轻背景）提升质感
  - 目前为静态展示，后续可改为真实链接或弹窗/下载

---

### 3.4 协会动态（首页列表 + 列表页）

- **功能/作用**
  - 首页展示 6 条动态卡片，提供“更多内容”进入列表页
  - 列表页集中展示动态内容

- **对应文件**
  - 首页区块：`src/pages/Home.vue`
  - 列表页：`src/pages/Dynamics.vue`
  - 卡片组件：`src/components/ContentCard.vue`
  - 数据：`src/data/mock.js`（`dynamics`）

- **具体如何实现**
  - 首页用 `.grid.cols-3` 形成 3 列卡片网格（移动端自动降列）
  - `ContentCard` 内部包含：封面、标签、日期、标题与“查看详情”提示
  - 目前点击未进入详情页（演示站），后续可新增 `/dynamics/:id` 详情路由

---

### 3.5 新闻资讯（首页列表 + 列表页）

- **功能/作用**
  - 首页展示 8 条资讯卡片，提供“更多内容”
  - 列表页提供“分类按钮（模拟）” + 卡片列表

- **对应文件**
  - 首页区块：`src/pages/Home.vue`
  - 列表页：`src/pages/News.vue`
  - 卡片组件：`src/components/ContentCard.vue`
  - 数据：`src/data/mock.js`（`news`）

- **具体如何实现**
  - 列表页分类按钮目前仅做 UI（`pill`），后续可加状态与筛选逻辑
  - 卡片布局同“协会动态”，便于统一视觉与复用

---

### 3.6 合作伙伴（Partner Strip）

- **功能/作用**
  - 对应原型底部合作伙伴 Logo 展示区
  - 用左右按钮滚动（演示）

- **对应文件**
  - `src/components/PartnerStrip.vue`
  - `src/data/mock.js`（`partners`）

- **具体如何实现**
  - 简化实现：用 `translateX` 偏移实现横向移动
  - `computed(looped)` 把列表复制三份，避免太短时空白（演示用）
  - 后续可升级为真正的无限循环（回弹/重置 offset）或直接使用 Swiper 做 logo carousel

---

### 3.7 页脚（Footer）

- **功能/作用**
  - 展示协会简介、快速入口、联系方式、二维码
  - 底部版权信息

- **对应文件**
  - `src/components/SiteFooter.vue`

- **具体如何实现**
  - 渐变背景 + 四列布局（响应式降为 2 列/1 列）
  - 联系方式与二维码为演示内容，可替换为真实数据

---

### 3.8 其他页面（关于协会、会员中心）

- **关于协会**
  - **文件**：`src/pages/About.vue`
  - **作用**：展示协会宗旨/职责/入会信息的说明页（演示文案）

- **会员中心**
  - **文件**：`src/pages/Member.vue`
  - **作用**：演示登录卡片 + 常用入口（目前无真实登录）

---

## 4. 路由与导航是怎么工作的

- **文件**：`src/router/index.js`
- **核心点**
  - 采用 `createWebHashHistory()`（hash 路由），好处是部署到静态服务器更省事
  - `scrollBehavior()` 每次切换路由自动回到页面顶部
  - 路由表：
    - `/` 首页
    - `/dynamics` 协会动态
    - `/news` 新闻资讯
    - `/member` 会员中心
    - `/about` 关于协会

---

## 5. 样式与美观策略（为什么看起来更“现代”）

主要策略：

- **设计 Token（全局变量）**：在 `src/styles/main.css` 用 CSS 变量统一颜色、圆角、阴影、容器宽度。
- **统一组件风格**：所有内容块尽量使用 `card`（圆角+阴影+轻边框）保证一致性。
- **响应式网格**：`.grid.cols-3/.cols-4` 在不同宽度自动降列。
- **高可读性 Banner**：大图叠加渐变遮罩，确保文字清晰。
- **玻璃拟态导航**：sticky + blur 增强质感（注意旧浏览器可能不支持 blur，但不影响使用）。

---

## 6. 后续应该做什么（推荐迭代路线）

按课程设计常见要求，从易到难建议如下：

1) **补齐“详情页”能力**
- 动态详情：`/dynamics/:id`
- 新闻详情：`/news/:id`
- 列表页点击卡片进入详情页（路由参数 + 根据 id 查数据）

2) **把 mock 数据换成真实数据**
- 方式 A：先做本地 JSON（`public/data/*.json`）用 `fetch` 拉取
- 方式 B：对接后端 API（建议：Node/Express 或 Java/SpringBoot）
- 增加加载态、空态、错误提示

3) **完善新闻分类/搜索**
- 分类按钮加状态、筛选与分页
- Header 加搜索框（关键字过滤/请求后端）

4) **会员中心做成真正的登录**
- 登录表单校验、token 存储（建议 httpOnly cookie 或 localStorage/Pinia）
- 登录态显示“我的信息/退出”
- 会员资料、入会申请表单、资料下载权限控制

5) **后台管理（加分项）**
- 管理端：发布新闻/动态、上传图片、管理合作伙伴、管理会员申请
- 权限控制（管理员/普通用户）

6) **部署上线**
- 使用 `npm run build` 产物 `dist/`
- 部署到 Nginx/宝塔/静态托管（Gitee Pages、GitHub Pages 等）

---

## 7. 技术方法学习清单（详细）

下面给你一份“从必学到加分”的清单。建议按顺序学习与练习，每一项都尽量做一个小 demo 或把它融入本项目。

### 7.1 Vue 3 基础（必学）

- **单文件组件 SFC**
  - `<template>/<script setup>/<style scoped>` 的组织方式
  - 组件 props、事件、slot（后续详情页/列表过滤会用到）
- **响应式系统**
  - `ref`、`reactive`、`computed`、`watch`
  - 生命周期：`onMounted`（数据请求常用）
- **模板语法**
  - `v-for`、`v-if`、`:class`、`:style`、事件 `@click`
- **组合式 API（Composition API）**
  - `script setup`、可复用逻辑抽成 composable（如 `useFetch`）

学习目标：
- 能独立写一个“列表页 + 详情页 + 搜索过滤”的小应用。

### 7.2 Vue Router（必学）

- **路由模式**
  - hash vs history 的区别、部署注意事项
- **动态路由**
  - `/news/:id`，在组件内通过 `useRoute()` 取参数
- **导航守卫**
  - 登录拦截（会员中心/后台管理）
- **滚动行为**
  - `scrollBehavior`、锚点滚动

学习目标：
- 能实现“列表点击进入详情，刷新不丢失”的完整体验。

### 7.3 Vite 与工程化（必学）

- **Vite 工作流**
  - dev/build/preview
  - 静态资源：`public/` 与 `src/assets/` 的区别
- **环境变量**
  - `.env`、`.env.production`（API 地址、开关等）
- **构建产物部署**
  - `dist/` 放到 Nginx 或静态服务器

学习目标：
- 能独立部署到一台服务器或静态托管并正常访问。

### 7.4 CSS 与页面美化（必学 + 高频）

- **布局**
  - Flex、Grid、响应式断点、容器宽度设计
- **视觉**
  - 圆角、阴影、渐变、遮罩、玻璃拟态（backdrop-filter）
  - 字体层级、间距体系（8px/4px 体系）
- **可维护性**
  - CSS 变量（design tokens）
  - BEM/模块化思路、`scoped` 的利弊

学习目标：
- 能把任何“图文列表原型”快速做成统一风格的组件库（卡片/按钮/标题）。

### 7.5 轮播/交互组件（本项目用到）

- **Swiper**
  - 模块化：Autoplay/Pagination/Navigation
  - 自定义样式（分页点、箭头）
  - 响应式配置、性能注意事项

学习目标：
- 能实现“Banner + Logo 轮播 + 多行卡片滑动”的常见官网需求。

### 7.6 数据请求与状态管理（后续必学）

- **HTTP 请求**
  - `fetch`/`axios`（建议 axios）
  - 拦截器、错误处理、超时、重试
- **状态管理（推荐）**
  - Pinia：登录态、用户信息、全局配置
- **表单与校验**
  - 基础校验（必填、长度、格式）
  - 表单库（可选）：Element Plus/Naive UI 自带规则

学习目标：
- 能完成“登录 + 列表分页 + 详情 + 发布/编辑”的闭环。

### 7.7 UI 框架/组件库（加速开发，可选但推荐）

二选一即可：

- **Element Plus（Vue3）**
  - 表格、表单、分页、对话框、上传（做后台管理很快）
- **Naive UI**
  - 颜值高、主题能力强

学习目标：
- 用组件库快速搭后台 CRUD（新闻发布、动态发布、合作伙伴管理）。

### 7.8 后端与数据库（加分项）

任选技术栈：

- **Node.js + Express/Koa**
- **Java + Spring Boot**
- **Python + FastAPI**

配套：
- MySQL/PostgreSQL
- 文件上传（图片）
- JWT / Session / RBAC 权限

学习目标：
- 提供 API：新闻/动态 CRUD、登录、文件上传、分页查询。

### 7.9 测试与质量（加分项）

- ESLint/Prettier（代码风格统一）
- 单元测试：Vitest
- E2E：Playwright
- Lighthouse：性能与可访问性

学习目标：
- 至少做到：lint + 格式化 + 基础的构建检查。

---

## 8. 你可以直接改哪些地方来“贴合你的原型”

最常改的点：

- **轮播图与标语**：`src/data/mock.js` 的 `heroSlides`
- **动态/新闻内容**：`src/data/mock.js` 的 `dynamics/news`
- **Logo 与页脚信息**：`public/images/logo.png`、`src/components/SiteFooter.vue`
- **导航菜单项**：`src/components/SiteHeader.vue`
- **整体配色与圆角/阴影**：`src/styles/main.css` 的 CSS 变量

---

## 9. 说明

当前版本以“课程设计演示可运行 + 页面美观”为主：

- 已实现：Vue3 单页站点、路由、首页核心模块与两类列表页、响应式布局、轮播。
- 未实现：真实详情页、真实数据接口、登录鉴权、后台管理。

如果你把“课程要求/评分点”发我（比如必须要数据库、必须要登录、必须要新闻发布等），我可以按评分点继续把后续功能补齐并给出数据库表结构与接口设计。


