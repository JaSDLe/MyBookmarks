<template>
  <div id="app">
    <!-- <div @click="getData">{{ result }}</div> -->

    <!-- <div style="display: flex;">
      <result-item v-for="(item, index) in result" :key="index" :data="item" />
      <result-item :data="result" />
    </div> -->

    <!-- <result-item v-for="(item, index) in result" :key="index" :data="item" /> -->

    <!-- <button @click="del">del</button>
    <button @click="add">add</button>
    <div v-for="(item, index) in data" :key="index">{{ item }}</div> -->

    <button @click="getData">getData</button>

    <div style="width: 100%;height: 100px;background-color: blueviolet;" id="drag_test">
      <h2>文件拖动到此处</h2>
    </div>

    <span v-show="false" id="result"></span>

    <result-item v-if="result != null" :data="result" />
  </div>
</template>

<script>
import ResultItem from '@/components/result-item'
import mock from '@/utils/mock'
import { H, A } from '@/utils/class'
// import fs from '../../renderer/fs'
// import { } from '../../renderer/renderer'

export default {
  components: {
    ResultItem
  },
  data() {
    return {
      bbb: false,
      data: [1, 2, 3],
      suffix: '000',
      result: null
      // watch: document.getElementById('drag_test').innerText
    }
  },
  watch: {
    // result: function(newVal, oldVal) {
    //   console.log('old', oldVal)
    //   console.log('new', newVal)
    // }
  },
  mounted() {
    // this.result = document.getElementById('result').innerText
    // console.log(mock)
    // this.result = mock
  },
  methods: {
    getData() {
      console.log(mock)
      console.log(document.getElementById('result').innerText)
      console.log(this.result)
      // this.result = document.getElementById('result').innerText
      this.result = mock
    },
    del() {
      this.data.pop()
    },
    add() {
      this.data.push(this.data[this.data.length - 1] + 1)
    },
    loopArray(array, parentArray) {
      for (let i = 0; i < array.length; i++) {
        this.addChild(array[i], parentArray)
      }
    },
    addChild(child, array) {
      switch (child.tagName) {
        case 'DL':
        case 'DT':
          array.push(new Array())
          this.loopArray(child.children, array[array.length - 1])
          break
        case 'H3':
          array.push(
            new H(
              child.attributes.add_date.value.concat(this.suffix),
              child.attributes.last_modified.value.concat(this.suffix),
              child.innerText
            )
          )
          break
        case 'A':
          if (child.attributes.length == 2) {
            array.push(
              new A(
                child.attributes.href.value,
                child.attributes.add_date.value.concat(this.suffix),
                '',
                child.innerText
              )
            )
          } else {
            array.push(
              new A(
                child.attributes.href.value,
                child.attributes.add_date.value.concat(this.suffix),
                child.attributes.icon.value,
                child.innerText
              )
            )
          }
          break
        default:
          break
      }
    }
  }
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
