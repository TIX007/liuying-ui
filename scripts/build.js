
const path = require('path')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts')
// 输出目录
const outputDir = path.resolve(__dirname, '../build')

const fsExtra = require('fs-extra')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// 创建package.json文件
const createPackageJson = () => {
  const fileStr = `{
    "name": "sheep-ui",
    "version": "0.0.0",
    "main": "qiu-ui.umd.js",
    "module": "qiu-ui.es.js",
    "author": "李崇",
    "github": "",
    "description": "基于Vite+Ts的Vue3.0组件库！",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/57code/sheep-ui.git"
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/57code/sheep-ui/issues"
    }
  }`
  
  fsExtra.outputFile(
    path.resolve(outputDir, 'package.json'),
    fileStr,
    'utf-8'
  )
}

//全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'qiu-ui',
          fileName: 'qiu-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
  // 创建package.json
  createPackageJson()
}

const buildLib = async () => {
  await buildAll()
}

buildLib()