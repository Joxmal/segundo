// https://nuxt.com/docs/api/configuration/nuxt-config
// 'https://nuxt.pockethost.io'


export default defineNuxtConfig({
  runtimeConfig:{
    public:{
      URL_POCKETBASE: 'http://127.0.0.1:8090'
    }
  },
  modules:[
    '@invictus.codes/nuxt-vuetify',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' }
  },
  vuetify:{

    vuetifyOptions: {
      theme:{
        defaultTheme:'dark'
      },
      icons:{
        defaultSet: 'mdi',
      },
      ssr:false
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,
      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
      useVuetifyLabs:false, 
    }
  },

  devtools: { enabled: true }
})
