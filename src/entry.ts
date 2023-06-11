import { App } from "vue";
import ViButton from "./button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

//单独导出组件
export { ViButton, SFCButton, JSXButton };

//编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(ViButton.name, ViButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
