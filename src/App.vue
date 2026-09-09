<script setup>
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
import { ref, provide } from "vue";
import "@/assets/main.css";
import ImMainView from "@/components/ImMainView.vue";

const themeColor = ref(localStorage.getItem("abra-theme-color") || "#64B5F6");
const themeScheme = ref(localStorage.getItem("abra-theme-scheme") || "dark");

const setThemeColor = (color) => {
  themeColor.value = color;
  localStorage.setItem("abra-theme-color", color);
};

const setThemeScheme = (scheme) => {
  themeScheme.value = scheme;
  localStorage.setItem("abra-theme-scheme", scheme);
};

provide("themeColor", themeColor);
provide("themeScheme", themeScheme);
provide("setThemeColor", setThemeColor);
provide("setThemeScheme", setThemeScheme);
</script>

<template>
  <header>
    <link rel="shortcut icon" href="./assets/favicon.ico" />
  </header>
  <m3e-theme :color="themeColor" variant="vibrant" :scheme="themeScheme" motion="expressive"
    style="min-height: 100vh; display: block; ">
    <div class="InnerUI" :class="themeScheme" style="min-height: 100vh;">
      <ImMainView />
    </div>
  </m3e-theme>
</template>
