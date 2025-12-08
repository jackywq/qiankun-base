import React, { useMemo, useState, useEffect } from 'react';
import { Layout, Menu, Avatar, Badge, Dropdown, Input, Space } from 'antd';
import {
  DashboardOutlined,
  AppstoreOutlined,
  ExperimentOutlined,
  QuestionCircleOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './views/Home';
import { registerMicroApps, start } from 'qiankun';
import logoImage from './assets/logo.png';
import './index.less';

const { Header, Sider, Content } = Layout;

type MicroApp = {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
  props?: unknown;
};

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isProd = import.meta.env.PROD;
    const vueEntry = isProd ? 'http://pangu-sub.zerocmf.com/vue/' : '//localhost:10000';
    const reactEntry = isProd ? 'http://pangu-sub.zerocmf.com/react/' : '//localhost:20000';
    const apps: MicroApp[] = [
      {
        name: 'vueApp',
        entry: vueEntry,
        container: '#vue',
        activeRule: '/vue',
        props: { a: 1 },
      },
      {
        name: 'reactApp',
        entry: reactEntry,
        container: '#react',
        activeRule: '/react',
      },
    ];
    registerMicroApps(apps as any);
    // 开启严格的样式隔离
    start({
      sandbox: {
        strictStyleIsolation: true,
      },
    });
  }, []);

  const selectedKey = useMemo(() => {
    const path = location.pathname || '/';
    if (path.startsWith('/vue')) return 'vue';
    if (path.startsWith('/react')) return 'react';
    return 'home';
  }, [location.pathname]);

  const menuItems = [
    { key: 'home', icon: <DashboardOutlined />, label: '分析页' },
    { key: 'vue', icon: <AppstoreOutlined />, label: 'Vue 应用' },
    { key: 'react', icon: <ExperimentOutlined />, label: 'React 应用' },
  ];

  const onMenuClick = ({ key }: { key: string }) => {
    const map: Record<string, string> = { home: '/', vue: '/vue', react: '/react' };
    const to = map[key] || '/';
    if (to !== location.pathname) navigate(to);
  };

  const userMenu = {
    items: [
      { key: 'profile', label: '个人中心' },
      { key: 'logout', label: '退出登录' },
    ],
  };

  return (
    <Layout id="app-layout">
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo">
          <img src={logoImage} alt="" />
          {!collapsed && <span className="logo-text">盘古</span>}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={menuItems}
          onClick={onMenuClick}
        />
      </Sider>

      <Layout>
        <Header className="app-header">
          <div className="header-left">
            <Input.Search className="search-input" placeholder="搜索" />
          </div>
          <div className="header-right">
            <QuestionCircleOutlined className="header-icon" />
            <Badge count={3}>
              <BellOutlined className="header-icon" />
            </Badge>
            <Dropdown menu={userMenu}>
              <Space className="user">
                <Avatar size="small" style={{ background: '#87d068' }}>A</Avatar>
                <span className="username">Admin</span>
              </Space>
            </Dropdown>
          </div>
        </Header>

        <Content className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vue" element={<div id="vue" />} />
            <Route path="/react" element={<div id="react" />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}


export default App;
