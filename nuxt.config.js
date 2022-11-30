// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    runtimeConfig: {
        wpUrl: process.env.WP_URL || null,
        wpToken: process.env.WORDPRESS_AUTH_REFRESH_TOKEN || null
    },
    devtools: true
})
