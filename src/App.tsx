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
import './styles/ant-overrides.css';

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
    const apps: MicroApp[] = [
      {
        name: 'vueApp',
        entry: '//localhost:10000',
        container: '#vue',
        activeRule: '/vue',
        props: { a: 1 },
      },
      {
        name: 'reactApp',
        entry: '//localhost:20000',
        container: '#react',
        activeRule: '/react',
      },
    ];
    registerMicroApps(apps as any);
    start();
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
    <Layout id="app-layout" style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" style={{ height: 64, color: '#fff', fontWeight: 600, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={logoImage} alt="" style={{width: 40, height: 40, marginRight: 8}} />
          {!collapsed && <span className="logo-text">盘古</span>}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          className="app-sider-menu"
          selectedKeys={[selectedKey]}
          items={menuItems}
          onClick={onMenuClick}
        />
      </Sider>

      <Layout>
        <Header style={{ background: '#fff', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,.06)' }}>
          <div className="header-left" style={{ display: 'flex', alignItems: 'center' }}>
            <Input.Search placeholder="搜索" style={{ width: 200 }} />
          </div>
          <div className="header-right" style={{ display: 'flex', alignItems: 'center' }}>
            <QuestionCircleOutlined style={{ fontSize: 16, marginRight: 16, color: 'rgba(0,0,0,.65)' }} />
            <Badge count={3}>
              <BellOutlined style={{ fontSize: 16, marginRight: 16, color: 'rgba(0,0,0,.65)' }} />
            </Badge>
            <Dropdown menu={userMenu}>
              <Space style={{ cursor: 'pointer' }}>
                <Avatar size="small" style={{ background: '#87d068' }}>A</Avatar>
                <span className="username" style={{ color: 'rgba(0,0,0,.85)' }}>Admin</span>
              </Space>
            </Dropdown>
          </div>
        </Header>

        <Content style={{ margin: 24, background: '#f0f2f5', padding: 24, minHeight: 360 }}>
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
