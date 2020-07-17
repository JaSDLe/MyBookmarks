<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div style="width: 100%;height: 100px;background-color: blueviolet;" id="drag_test">
      <h2>文件拖动到此处</h2>
      <span></span>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      bbb: false,
      data: [1, 2, 3]
    }
  },
  methods: {}
}
</script>

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
