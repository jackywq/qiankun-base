<template>
  <a-layout id="app-layout" style="min-height: 100vh">
    <a-layout-sider
      :collapsed="collapsed"
      collapsible
      @collapse="collapsed = $event"
    >
      <div class="logo">微前端基座</div>
      <a-menu
        theme="dark"
        mode="inline"
        :selectedKeys="[selectedKey]"
        @click="handleMenuClick"
      >
        <a-menu-item key="home">
          <span>Home</span>
        </a-menu-item>
        <a-menu-item key="vue">
          <span>vue应用</span>
        </a-menu-item>
        <a-menu-item key="react">
          <span>react应用</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header class="header">
        <div class="header-right">
          <a-dropdown>
            <div class="user ant-dropdown-link">
              <a-avatar size="small" style="background: #87d068">A</a-avatar>
              <span class="username">Admin</span>
            </div>
            <a-menu slot="overlay">
              <a-menu-item key="profile">个人中心</a-menu-item>
              <a-menu-item key="logout">退出登录</a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </a-layout-header>

      <a-layout-content class="content">
        <router-view />
        <div id="vue"></div>
        <div id="react"></div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    selectedKey() {
      const path = this.$route.path || "/";
      if (path.startsWith("/vue")) return "vue";
      if (path.startsWith("/react")) return "react";
      return "home";
    },
  },
  methods: {
    handleMenuClick({ key }) {
      const map = {
        home: "/",
        vue: "/vue",
        react: "/react",
      };
      const to = map[key] || "/";
      if (to !== this.$route.path) this.$router.push(to);
    },
  },
};
</script>

<style>
#app-layout .logo {
  height: 64px;
  margin: 16px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
}
.header {
  background: #fff;
  padding: 0 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.header-right .user {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.content {
  margin: 24px;
  background: #fff;
  padding: 24px;
  min-height: 360px;
}
.username {
  color: rgba(0, 0, 0, 0.85);
}
</style>
