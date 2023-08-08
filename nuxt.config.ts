// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/node_modules/bulma-timeline/dist/css/bulma-timeline.min.css',
    '~/node_modules/@mdi/font/css/materialdesignicons.min.css',
    '~/assets/css/bulma.scss',
    '~/assets/css/global.css',
  ],
  app: {
    head: {
      title: 'Eduardo Lago Lima',
      htmlAttrs: {
        lang: 'pt-br',
      },
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        },
        {
          name: 'theme-color',
          content: '#7957d5',
        },
      ],
    }
  }
})
