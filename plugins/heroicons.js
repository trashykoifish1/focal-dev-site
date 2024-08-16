import { defineNuxtPlugin } from "#app";
import * as heroicons from "@heroicons/vue/24/solid";

export default defineNuxtPlugin((nuxtApp) => {
  Object.entries(heroicons).forEach(([name, icon]) => {
    nuxtApp.vueApp.component(name, icon);
  });
});
