import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import "./styles/main.css";

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
//创建vue实例，挂载路由，挂载到id为app的元素上

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             