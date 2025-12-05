<template>
  <div class="page">
    <a-page-header title="Vue 子应用" sub-title="关于" />
    <a-card style="margin-top:16px">
      <p>版本：v0.1.0</p>
      <p>构建时间：{{ buildTime }}</p>
      <p>维护者：Example Team</p>
      <p>与基座通信：通过 qiankun `props` 传递只读配置，也可通过事件总线广播通知。</p>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return { buildTime: new Date().toLocaleString() }
  }
}
</script>

<style scoped>
.page { padding: 16px; }
</style>
