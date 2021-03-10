import { createApp } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App.vue";
import "./styles/index.scss";
AOS.init();

createApp(App).mount("#app");
