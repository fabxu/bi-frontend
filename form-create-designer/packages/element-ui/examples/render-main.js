import { createApp } from "vue";
import ELEMENT from "element-plus";
import "element-plus/dist/index.css";
import formCreate from "@form-create/element-ui";
import App from "./App.vue";
import FcDesigner from "../src/index";

const app = createApp(App);

app.use(ELEMENT);
app.use(formCreate);
app.use(FcDesigner);

/**
 * 渲染util, 方便外部渲染
 *
 * @param {String} selector dom selector
 */
export default function render(selector) {
  app.mount(selector);
}
