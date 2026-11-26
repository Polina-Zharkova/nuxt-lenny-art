// https://nuxt.com/docs/api/configuration/nuxt-config

import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ["@/styles/styles.less"],
  devtools: { enabled: true },

  vite: {
      css: {
        preprocessorOptions: {
          less: {
            additionalData: `
              @import "@/styles/variables.less";
              @import "@/styles/mixins.less";
            `,
          },
        },
      },
      plugins: [svgLoader()],
    },

  modules: ["@pinia/nuxt"],
   sourcemap: { client: true },

  app: {
    baseURL: '/nuxt-lenny-art/',
    head: {
      meta: [
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      
      link: [
        { 
          rel: 'icon', 
          type: 'image/x-icon', 
          href: '/favicon.ico' 
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '16x16', 
          href: '/favicon-16x16.png' 
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '32x32', 
          href: '/favicon-32x32.png' 
        },
        { 
          rel: 'apple-touch-icon', 
          sizes: '60x60', 
          href: '/apple-touch-icon-60x60.png' 
        },
        { 
          rel: 'apple-touch-icon', 
          sizes: '76x76', 
          href: '/apple-touch-icon-76x76.png' 
        },
        { 
          rel: 'apple-touch-icon', 
          sizes: '120x120', 
          href: '/apple-touch-icon-120x120.png' 
        },
        { 
          rel: 'apple-touch-icon', 
          sizes: '152x152', 
          href: '/apple-touch-icon-152x152.png' 
        },
        { 
          rel: 'apple-touch-icon', 
          sizes: '180x180', 
          href: '/apple-touch-icon-180x180.png' 
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '36x36', 
          href: '/android-chrome-36x36.png' 
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '48x48', 
          href: '/android-chrome-48x48.png' 
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '72x72', 
          href: '/android-chrome-72x72.png' 
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '96x96', 
          href: '/android-chrome-96x96.png' 
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '144x144', 
          href: '/android-chrome-144x144.png' 
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '192x192', 
          href: '/android-chrome-192x192.png' 
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '256x256', 
          href: '/android-chrome-256x256.png' 
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '384x384', 
          href: '/android-chrome-384x384.png' 
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '512x512', 
          href: '/android-chrome-512x512.png' 
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '192x192', 
          href: '/android-icon-192x192.png' 
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '144x144', 
          href: '/ms-icon-144x144.png' 
        },

        { 
          rel: 'mask-icon', 
          href: '/safari-pinned-tab.svg', 
          color: '#5bbad5' 
        }
      ]
    }
  }
})