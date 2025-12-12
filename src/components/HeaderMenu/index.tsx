import { BellOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Input, Badge, Dropdown, Space, Avatar, Layout } from "antd";

const { Header } = Layout;
export default () => {
  const userMenu = {
    items: [
      { key: "profile", label: "个人中心" },
      { key: "logout", label: "退出登录" },
    ],
  };
  return (
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
            <Avatar size="small" style={{ background: "#87d068" }}>
              A
            </Avatar>
            <span className="username">Admin</span>
          </Space>
        </Dropdown>
      </div>
    </Header>
  );
};
