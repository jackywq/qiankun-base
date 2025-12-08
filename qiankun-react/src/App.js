/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import Welcome from "./pages/Welcome";
import ChartPage from "./pages/Chart";
import ListPage from "./pages/List";
import "./App.css";

const { Header, Content } = Layout;

export default function App() {
  // 在基座中运行时，设置 basename 为 /react；独立运行则为空
  const basename = "/react";
  return (
    <Router basename={basename}>
      <Layout style={{ background: "transparent" }}>
        <Header style={{ background: "#fff" }}>
          <Menu mode="horizontal" defaultSelectedKeys={["welcome"]}>
            <Menu.Item key="welcome"><Link to="/">欢迎页</Link></Menu.Item>
            <Menu.Item key="chart"><Link to="/chart">图表页</Link></Menu.Item>
            <Menu.Item key="list"><Link to="/list">列表页</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: 24 }}>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/chart" component={ChartPage} />
            <Route path="/list" component={ListPage} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}
