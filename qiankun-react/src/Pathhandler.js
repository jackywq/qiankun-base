import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function PathHandler() {
  const path = window.location.pathname.replace(/^\/react/, "");
  const [selectedKey, setSelectedKey] = useState(
    path === "/" ? "welcome" : path.slice(1)
  );
  return (
    <Menu mode="horizontal" selectedKeys={[selectedKey]}>
      <Menu.Item key="welcome">
        <Link to="/" onClick={() => setSelectedKey("welcome")}>
          欢迎页
        </Link>
      </Menu.Item>
      <Menu.Item key="chart">
        <Link to="/chart" onClick={() => setSelectedKey("chart")}>
          图表页
        </Link>
      </Menu.Item>
      <Menu.Item key="list">
        <Link to="/list" onClick={() => setSelectedKey("list")}>
          列表页
        </Link>
      </Menu.Item>
    </Menu>
  );
}
