<template>
  <div class="page">
    <a-page-header title="Vue 子应用" sub-title="列表页" />
    <a-card style="margin-top:16px">
      <a-table :columns="columns" :data-source="data" :pagination="{ pageSize: 5 }" row-key="id" />
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      columns: [
        { title: '名称', dataIndex: 'name', key: 'name' },
        { title: '状态', dataIndex: 'status', key: 'status' },
        { title: '更新时间', dataIndex: 'updatedAt', key: 'updatedAt' }
      ],
      data: Array.from({ length: 15 }).map((_, i) => ({
        id: i + 1,
        name: `示例-${i + 1}`,
        status: i % 2 === 0 ? 'online' : 'offline',
        updatedAt: new Date(Date.now() - i * 3600e3).toLocaleString()
      }))
    }
  }
}
</script>

<style scoped>
.page { padding: 16px; }
</style>
