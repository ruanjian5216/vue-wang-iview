/**
 * 入口文件
 */
import WangSkeleton from "../packages/WangSkeleton";
const components = [WangSkeleton];

const install = function(Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}



export default {
  install,
};
