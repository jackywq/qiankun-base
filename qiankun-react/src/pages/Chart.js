/* eslint-disable */
import React from "react";
import { Card } from "antd";
import { Area } from "@ant-design/charts";

export default function ChartPage() {
  const data = Array.from({ length: 24 }).map((_, i) => ({
    time: `${i}:00`,
    value: Math.round(50 + 30 * Math.sin(i / 3) + Math.random() * 10),
  }));
  const config = {
    data,
    xField: "time",
    yField: "value",
    smooth: true,
    height: 300,
    meta: { value: { alias: "访问量" } },
  };
  return (
    <Card title="图表页">
      <Area {...config} />
    </Card>
  );
}

