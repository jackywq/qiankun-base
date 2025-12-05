<template>
  <div class="page">
    <a-page-header title="首页" sub-title="微前端基座仪表盘" />

    <a-row :gutter="16" style="margin-top: 16px">
      <a-col :span="6">
        <a-card>
          <a-statistic title="微应用数量" :value="2" />
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <a-statistic title="今日 PV" :value="23567" suffix="次" />
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <a-statistic title="加载成功率" :value="99.2" suffix="%" />
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <a-statistic title="错误数" :value="1" />
        </a-card>
      </a-col>
    </a-row>

    <a-row :gutter="16" style="margin-top: 16px">
      <a-col :span="12">
        <a-card title="快速入口">
          <div class="btns">
            <a-button type="primary" @click="$router.push('/vue')"
              >进入 Vue 子应用</a-button
            >
            <a-button type="primary" @click="$router.push('/react')"
              >进入 React 子应用</a-button
            >
            <a-button @click="$router.push('/')">返回首页</a-button>
          </div>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="近期事件">
          <a-timeline>
            <a-timeline-item>Vue 子应用部署成功</a-timeline-item>
            <a-timeline-item>React 子应用发布 v0.1.0</a-timeline-item>
            <a-timeline-item>基座切换至 Ant Design Pro 风格</a-timeline-item>
          </a-timeline>
        </a-card>
      </a-col>
    </a-row>

    <a-card style="margin-top: 16px" title="环境信息">
      <a-descriptions :column="3">
        <a-descriptions-item label="基座框架">Vue 2</a-descriptions-item>
        <a-descriptions-item label="样式库"
          >ant-design-vue 1.x</a-descriptions-item
        >
        <a-descriptions-item label="微前端">qiankun 2.x</a-descriptions-item>
        <a-descriptions-item label="Vue 子应用">/vue</a-descriptions-item>
        <a-descriptions-item label="React 子应用">/react</a-descriptions-item>
        <a-descriptions-item label="更新时间">{{ now }}</a-descriptions-item>
      </a-descriptions>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return { now: new Date().toLocaleString() }
  }
}
</script>

<style scoped>
.page {
  padding: 16px;
}
.btns > .ant-btn {
  margin-right: 8px;
}
</style>
