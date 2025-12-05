import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

/* eslint-disable */
Vue.use(Antd)
// Vue.config.productionTip = false

let instance = null;
function render(props = {}) {
    const { container } = props;
    instance = new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount(container ? container.querySelector('#app') : '#app') // 这里是挂载到自己的html中 基座会拿到这个挂载后的html将其插入进去
}

if (window.__POWERED_BY_QIANKUN__) {
    // 使用qiankun, 将微应用的路径放到qiankun的全局变量下面，解决资源加载问题
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
    // 独立运行微应用, 不使用qiankun
    render();
}

// 微应用协议
export async function bootstrap(props) {
    
}

export async function mount(props) {
    console.log('mount :>> ', props);
    render(props);
}

export async function unmount(props) {
    instance.$destroy();
}
