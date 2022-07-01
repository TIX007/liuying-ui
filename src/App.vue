<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Test></Test>
  <lyButton size="large">确认</lyButton>
  <lyButton type="primary" size="large">确认</lyButton>
  <lyButton type="primary">确认</lyButton>
  <lyButton type="primary" disabled>确认</lyButton>
  <lyButton type="primary" block>确认</lyButton>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
