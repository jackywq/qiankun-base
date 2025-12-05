/* eslint-disable */
import React from "react";
import { Card, Table } from "antd";

export default function ListPage() {
  const columns = [
    { title: "名称", dataIndex: "name", key: "name" },
    { title: "状态", dataIndex: "status", key: "status" },
    { title: "更新时间", dataIndex: "updatedAt", key: "updatedAt" },
  ];
  const data = Array.from({ length: 20 }).map((_, i) => ({
    key: i + 1,
    name: `条目-${i + 1}`,
    status: i % 2 === 0 ? "online" : "offline",
    updatedAt: new Date(Date.now() - i * 3600e3).toLocaleString(),
  }));
  return (
    <Card title="列表页">
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 8 }} />
    </Card>
  );
}

