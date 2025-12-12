import { useEffect } from "react";
import { Layout } from "antd";
import { registerMicroApps, start } from "qiankun";
import RouterConfig from "./router";
import SiderMenu from "./components/SiderMenu";
import HeaderMenu from "./components/HeaderMenu";
import "./index.less";

const { Content } = Layout;

type MicroApp = {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
  props?: unknown;
};

const App = () => {
  useEffect(() => {
    const isProd = import.meta.env.PROD;
    const vueEntry = isProd
      ? "http://pangu-sub.zerocmf.com/vue/"
      : "//localhost:10000";
    const reactEntry = isProd
      ? "http://pangu-sub.zerocmf.com/react/"
      : "//localhost:20000";
    const apps: MicroApp[] = [
      {
        name: "vueApp",
        entry: vueEntry,
        container: "#vue",
        activeRule: "/vue",
        props: { a: 1 },
      },
      {
        name: "reactApp",
        entry: reactEntry,
        container: "#react",
        activeRule: "/react",
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

  return (
    <Layout id="app-layout">
      <SiderMenu />

      <Layout>
        <HeaderMenu />

        <Content className="content">
          <RouterConfig />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
