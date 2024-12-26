/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

if (window.__POWERED_BY_QIANKUN__) {
  // 使用qiankun, 将微应用的路径放到qiankun的全局变量下面，解决资源加载问题
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  // 独立运行微应用, 不使用qiankun
  render();
}

// 微应用协议
export async function bootstrap(props) {}

export async function mount(props) {
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.getElementById("root")
  );
}
