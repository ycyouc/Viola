import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'

// https://vitejs.dev/config/

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue"
    }
  }
}

export default defineConfig({

  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    Unocss()
  ],

  build: {
    rollupOptions,
    minify: 'terser',
    sourcemap: true, // 输出单独 source文件
    brotliSize: true,  // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "ViolaUI",
      fileName: "viola-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },

  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
});