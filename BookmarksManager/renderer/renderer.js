// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// console.log(new Date())

// document.getElementById('a').addEventListener('click', (e) => {
//   a()
// })

// function a() {
//   add()
//   // alert('a')
// }

const fs = require('fs')

let result = new Array()

let intervalID
intervalID = setInterval(addEventListenerForDrag, 1)

function addEventListenerForDrag() {
  const dragWrapper = document.getElementById("drag_test")
  if (dragWrapper != null) {
    add(dragWrapper)
    clearInterval(intervalID)
  }
}

function add(element) {
  element.addEventListener("drop", (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    console.log(e)
    console.log(files)
    console.log(fs)
    if (files && files.length >= 1) {
      const doc = (new DOMParser()).parseFromString(fs.readFileSync(files[0].path, 'utf-8'), "text/html")
      let content = doc.body.children[1].children[1].children[1].children
      console.log(content)
      loopArray(content, result)
      console.log(result)
      document.getElementById("result").innerText = JSON.stringify(result)
    }
  })
  element.addEventListener("dragover", (e) => {
    e.preventDefault()
  })
}

function loopArray(array, parentArray) {
  for (let i = 0; i < array.length; i++) {
    addChild(array[i], parentArray)
  }
}

const suffix = '0'
const timestampLength = 13

function addChild(child, array) {
  switch (child.tagName) {
    case 'DL':
    case 'DT':
      array.push(new Array())
      loopArray(child.children, array[array.length - 1])
      break
    case 'H3':
      pushElement(new H(), child, array)
      break
    case 'A':
      pushElement(new A(), child, array)
      break
    default:
      break
  }
}

let map = new Map()
map.set('add_date', 'addDate')
map.set('last_modified', 'lastModified')
map.set('href', 'href')
map.set('icon', 'icon')

function pushElement(element, child, array) {
  for (const key in child.attributes) {
    if (child.attributes.hasOwnProperty(key)) {
      const item = child.attributes[key]
      const property = map.get(item.name)
      if (element.hasOwnProperty(property)) {
        element[property] = getValue(item)
      }
    }
  }
  element.value = child.innerText
  element.type = element.constructor.name
  array.push(element)
}

function getValue(item) {
  return (item.name === 'add_date' || item.name === 'last_modified') && item.value.length < timestampLength ? item.value.concat(suffix.repeat(timestampLength - item.value.length)) : item.value
}

class H {
  constructor(addDate, lastModified, value) {
    this.addDate = addDate
    this.lastModified = lastModified
    this.value = value
  }
}

class A {
  constructor(href, addDate, icon, value) {
    this.href = href
    this.addDate = addDate
    this.icon = icon
    this.value = value
  }
}
