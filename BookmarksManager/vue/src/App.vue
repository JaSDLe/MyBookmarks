<template>
  <div id="app">
    <div @click="getData">{{ getData }}</div>
    <div v-for="(item, index) in data" :key="index">{{ item }}</div>

    <div style="width: 100%;height: 100px;background-color: blueviolet;" id="drag_test">
      <h2>文件拖动到此处1</h2>
      <span v-show="false" id="result"></span>
    </div>
  </div>
</template>

<script>
import { H, A } from './utils/class'
import fs from '../../renderer/fs'
// import { } from '../../renderer/renderer'

export default {
  components: {},
  data() {
    return {
      bbb: false,
      data: [1, 2, 3],
      suffix: '000',
      result: []
      // watch: document.getElementById('drag_test').innerText
    }
  },
  watch: {
    // watch: function(newVal, oldVal) {
    //   console.log('old', oldVal)
    //   console.log('new', newVal)
    // }
  },
  mounted() {
    console.log(new Date())
    // a()
    // const dragWrapper = document.getElementById('drag_test')
    // dragWrapper.addEventListener('drop', e => {
    //   e.preventDefault()
    //   const files = e.dataTransfer.files
    //   console.log(e.dataTransfer)
    //   console.log(e.dataTransfer.files)
    //   console.log(e.dataTransfer.files[0])
    //   if (files && files.length >= 1) {
    //     let reader = new FileReader()
    //     // console.log(reader.readAsText(e.dataTransfer.files[0]))
    //     // const doc = new DOMParser().parseFromString(fs.readFileSync(files[0].path, 'utf-8'), 'text/html')
    //     console.log(fs)
    //     const doc = new DOMParser().parseFromString(fs.readFileSync(files[0].path, 'utf-8'), 'text/html')
    //     const dl = doc.body.children[1]
    //     console.log(dl)
    //   //   let content = doc.body.children[1].children[1].children[1].children
    //   //   // for (let i = 1; i < content.length; i++) {
    //   //   //   content[i]
    //   //   //   this.result.push()
    //   //   //   addChild(content[i], result)
    //   //   // }
    //   //   console.log(content)
    //   //   this.loopArray(content, this.result)
    //   //   console.log(this.result)
    //   }
    // })
    // //这个事件也需要屏蔽
    // dragWrapper.addEventListener('dragover', e => {
    //   e.preventDefault()
    // })
  },
  methods: {
    getData() {
      console.log(new H('1', '2', '3'))
      console.log(new H('1', '2', '3').addDate)
      return new H('1', '2', '3').addDate
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
