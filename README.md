# 一个基于 React 18 基座的 qiankun 微前端解决方案

- 主应用：React 18（`qiankun-base`）
- 子应用：Vue 2.x（`qiankun-vue`）和 React 16（`qiankun-react`）

## 运行环境要求（含 Node 版本）

- Node.js：推荐使用 `v16.x LTS`（最低 `v14.17.0`）
- 包管理器：建议 `npm >= 7`（或 `yarn`）
- 系统：macOS / Linux，Windows 也可运行但并发命令可能不同

检查当前版本：

```
node -v
npm -v
```

使用 nvm 切换到推荐版本（可选）：

```
nvm install 16
nvm use 16
nvm alias default 16
```

## 仓库克隆

```
git clone https://github.com/jackywq/qiankun-base.git
```

## 安装与启动

首次运行可以使用新增的命令一次性安装所有依赖：

```
# 在仓库根目录执行，同时安装基座和两个子应用的依赖
npm run install:all
```

也可以分别安装：

```
# 基座（root）
npm install

# React 子应用
cd qiankun-react && npm install

# Vue 子应用
cd ../qiankun-vue && npm install
```

然后可以一次性启动三个应用：

```
# 在仓库根目录执行
npm run start
```

也可以分别启动：

```
# 基座（默认端口 8888）
npm run dev

# React 子应用（端口 20000）
cd qiankun-react
npm run start

# Vue 子应用（端口 10000）
cd qiankun-vue
npm run serve
```

访问地址与路由：

- 基座首页：`http://localhost:8888/`
- 挂载 Vue 子应用：`http://localhost:8888/vue`
- 挂载 React 子应用：`http://localhost:8888/react`

（子应用本地服务分别为 `http://localhost:10000` 与 `http://localhost:20000`，基座通过 qiankun 远程加载它们）

## 构建产物

```
# 基座构建
npm run build

# React 子应用构建
cd qiankun-react && npm run build

# Vue 子应用构建
cd qiankun-vue && npm run build
```

## 目录结构

```
qiankun-base
├── qiankun-react/         # React 子应用（webpack 5）
├── qiankun-vue/           # Vue 子应用（Vue CLI 4）
└── src/                   # React 基座代码（TypeScript + Vite）
```

## 关键配置说明

- 端口：React 子应用 `20000`，Vue 子应用 `10000`，基座默认 `8888`
- 跨域：两个子应用开发服务器均设置了 `Access-Control-Allow-Origin: *`
- 激活规则：
  - Vue 子应用：`activeRule: '/vue'`
  - React 子应用：`activeRule: '/react'`

对应注册见基座入口 `src/main.tsx`：

```js
registerMicroApps([
  { name: 'vueApp', entry: '//localhost:10000', container: '#vue', activeRule: '/vue' },
  { name: 'reactApp', entry: '//localhost:20000', container: '#react', activeRule: '/react' },
])
start()
```
