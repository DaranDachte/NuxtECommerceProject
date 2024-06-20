// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxt/image",
  ],
  devtools: { enabled: true },
});
