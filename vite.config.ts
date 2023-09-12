import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";

const pxtoviewport = require("postcss-px-to-viewport");
const tailwindcss = require("tailwindcss");
// import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log("command :>> ", command);
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      // basicSsl(),
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [
          // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            prefix: "Icon",
          }),
          ElementPlusResolver(),
        ],
        // targets to transform
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],

        // global imports to register
        imports: [
          // 插件预设支持导入的api
          "vue",
          "vue-router",
          "pinia",
          // 自定义导入的api
        ],

        // Generate corresponding .eslintrc-auto-import.json file.
        // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
        eslintrc: {
          enabled: false, // Default `false`
          filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },

        // Filepath to generate corresponding .d.ts file.
        // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
        // Set `false` to disable.
        dts: "types/auto-imports.d.ts",
      }),
      Components({
        resolvers: [
          // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ["ep"],
          }),

          ElementPlusResolver(),
        ],
        dts: "types/components.d.ts",
      }),
      Icons({
        autoInstall: true,
        scale: 1.2, // 缩放图标对1em
        defaultStyle: "", // 样式适用于图标
        defaultClass: "", // 类名适用于图标
        compiler: "vue3", // 'vue2', 'vue3', 'jsx'
        jsx: "react", // 'react' or 'preact'
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      /* CSS 预处理器 */
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/index.scss";`,
        },
      },
      postcss: {
        plugins: [
          // pxtoviewport({
          //   viewportWidth: 375,
          // }),
          tailwindcss(),
        ],
      },
    },
    server: {
      host: "0.0.0.0",
      https: false,
      proxy: {
        // 选项写法
        "^/proxyApi": {
          // target: "http://150.158.151.241:10000",
          target: env.VITE_BASE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/proxyApi/, ""),
        },
      },
    },
  };
});
