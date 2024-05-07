// import inject from '@rollup/plugin-inject'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  features: {
    inlineStyles: false
  },
  devtools: { enabled: true },
  ssr: false,
  build: {
    transpile: ['gsap', 'vue3-count-to']
  },
  runtimeConfig: {
    public: {
      apiUrl: '',
      wcProjectId: '',
      contractNftAddress: '',
      tokenContractAddress:''
    }
  },
  app: {
    baseURL: '/'
  },
  nitro: {
    // devProxy: {
    //   '/api': {
    //     target: process.env.NUXT_PUBLIC_API_URL,
    //     changeOrigin: true
    //   }
    // },

    routeRules: {
      '/api/**': {
        proxy: `${process.env.NUXT_PUBLIC_API_URL}/**`
      }
    }
  },
  css: [
    '~/assets/scss/font.scss',
    '~/assets/scss/reset.scss',
    '~/assets/scss/common.scss'
  ],
  modules: [
    [
      '@use-wagmi/nuxt',
      {
        excludeImports: ['useQuery', 'useNetwork']
      }
    ],
    'nuxt-lodash',
    [
      '@pinia/nuxt',
      {
        storesDirs: ['./stores/**']
      }
    ],
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@element-plus/nuxt',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as *;`
        }
      }
    },
    // build: {
    //   rollupOptions: {
    //     plugins: [inject({ Buffer: ['buffer', 'Buffer'] })]
    //   }
    // },
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/svgs/')],
        symbolId: 'icon-[dir]-[name]'
      })
    ]
  },
  elementPlus: {
    importStyle: 'scss'
  }
})
