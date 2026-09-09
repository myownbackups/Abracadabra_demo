/*
 * Copyright (C) 2025-2026 SheepChef (a.k.a. Haruka Hokuto)
 *
 * 这是一个源代码公开的软件。
 * 在遵守AIPL-1.2许可证的前提下，
 * 你可以自由复制，修改，分发，使用它。
 *
 * 查阅 Academic Innovation Protection License(AIPL) 来了解更多 .
 * 本作品应随附一份完整的 AIPL-1.2 许可证全文。
 *
 */
import "@fontsource/roboto/latin-300.css";
import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-500.css";
import "@fontsource/roboto/latin-700.css";
import "@material-symbols/font-400/outlined.css";
import "./assets/main.css";
if (__IS_EXTENSION__) {
  import("./assets/crx.css");
}
if (__IS_ANDROID_APP__) {
  const script = document.createElement("script");
  script.src = "cordova.js";
  document.head.appendChild(script);
}
import { createApp } from "vue";
import App from "./App.vue";
import Card from "./components/MdCard.vue";
import "@m3e/web/all";

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  window.deferredPrompt = e;
});

const app = createApp(App);
app.component("Card", Card);
app.mount("body");
