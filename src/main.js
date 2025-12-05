import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { registerMicroApps, start } from "qiankun";

Vue.config.productionTip = false;
Vue.use(Antd);

const apps = [
  {
    name: "vueApp", // 应用的名字
    entry: "//localhost:10000", // 默认会加载这个html 解析里面的js 动态的执行 (子应用必须支持跨域) fetch
    container: "#vue", // 容器名
    activeRule: "/vue", // 激活的路径
    props: {
      // 父应用传递属性给子应用
      a: 1,
    },
  },
  {
    name: "reactApp",
    entry: "//localhost:20000",
    container: "#react",
    activeRule: "/react",
  },
];
registerMicroApps(apps); // 注册应用
start(); // 开启

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
