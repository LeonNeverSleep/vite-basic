/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/**
 * 处理 main.ts 文件找不到模块“./App.vue”或其相应的类型声明
 */
declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
