<template>
  <div class="page">
    <a-page-header title="Vue 子应用" sub-title="仪表盘" />
    <a-row :gutter="16" style="margin-top: 16px">
      <a-col :span="8">
        <a-card>
          <a-statistic title="PV" :value="stats.pv" suffix="次" />
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card>
          <a-statistic title="转化率" :value="stats.cr" suffix="%" />
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card>
          <a-statistic title="活跃用户" :value="stats.active" suffix="人" />
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="16" style="margin-top: 16px">
      <a-col :span="12">
        <a-card title="趋势概览">这里可以接入图表组件。</a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="最近更新">这里展示最近动态或消息。</a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      stats: { pv: 12345, cr: 12.3, active: 987 }
    }
  }
}
</script>

<style scoped>
.page {
  padding: 16px;
}
</style>
