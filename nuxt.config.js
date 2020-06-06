
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Retyp - Easy Pastes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Retyp is a modern and user-friendly paste tool. Retyp is a website where you can store text or code online for a set period of time.' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'Retyp' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: 'Retyp' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Retyp - Easy Pastes' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Retyp is a modern and user-friendly paste tool. Retyp is a website where you can store text or code online for a set period of time.' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Retyp' },
      { hid: 'og:title', name: 'og:title', content: 'Retyp' },
      { hid: 'og:description', name: 'og:description', content: 'Retyp is a modern and user-friendly paste tool. Retyp is a website where you can store text or code online for a set period of time.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#5a67d8' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css',
    '~/assets/css/prism.css',
    '~/assets/css/toasted.css',
    '~/assets/css/transitions.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/axios.js', ssr: true },
    { src: '~/plugins/global-toasts', ssr: false },
    { src: '~/plugins/global-components.js', ssr: true },
    { src: '~/plugins/global-directives.js', ssr: true },
    { src: '~/plugins/prism-editor.js', ssr: false },
    { src: '~/plugins/vue-shortkey.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment',
    // Doc: https://github.com/nuxt-community/pwa-module
    '@nuxtjs/pwa'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/toast
    '@nuxtjs/toast',
    // Doc: https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
    // Doc: https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Moment module configuration
  ** See https://github.com/nuxt-community/moment-module
  */
  moment: {
  },
  /*
  ** PWA module configuration
  */
  pwa: {
    manifest: {
      name: 'Retyp',
      lang: 'en'
    }
  },
  /*
  ** Sitemap module configuration
  ** See https://www.npmjs.com/package/@nuxtjs/sitemap
  */
  sitemap: {
    hostname: 'https://retyp.app',
    gzip: true,
    exclude: [
      '/admin/**'
    ]
  },
  /*
  ** Robots module configuration
  ** See https://github.com/nuxt-community/robots-module
  */
  robots: {
    UserAgent: '*'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    API_URL: process.env.API_URL
  }
}
