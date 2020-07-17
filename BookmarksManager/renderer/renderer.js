// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
document.getElementById('a').addEventListener('click', (e) => {
  a()
})
function a() {
  alert('a')
}

const fs = require("fs");

const dragWrapper = document.getElementById("drag_test");

let result = new Array()

dragWrapper.addEventListener("drop", (e) => {
  e.preventDefault();
  const files = e.dataTransfer.files;
  if (files && files.length >= 1) {
    const doc = (new DOMParser()).parseFromString(fs.readFileSync(files[0].path, 'utf-8'), "text/html")
    const dl = doc.body.children[1]
    console.log(dl)
    let content = doc.body.children[1].children[1].children[1].children
    // for (let i = 1; i < content.length; i++) {
    //   content[i]
    //   result.push()
    //   addChild(content[i], result)
    // }
    console.log(content)
    loopArray(content, result)
    console.log(result)
  }
})

//这个事件也需要屏蔽
dragWrapper.addEventListener("dragover", (e) => {
  e.preventDefault();
})

function loopArray(array, parentArray) {
  for (let i = 0; i < array.length; i++) {
    addChild(array[i], parentArray)
  }
}

const suffix = '000'

function addChild(child, array) {
  switch (child.tagName) {
    case 'DL':
    case 'DT':
      array.push(new Array())
      loopArray(child.children, array[array.length - 1])
      break;
    case 'H3':
      // console.log('hhhhhhhhhhhhhhhhhhhhhhhh')
      // console.log(child.attributes)
      array.push(new H(child.attributes.add_date.value.concat(suffix), child.attributes.last_modified.value.concat(suffix), child.innerText))
      break;
    case 'A':
      // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa')
      // console.log(child.attributes)
      if (child.attributes.length == 2) {
        array.push(new A(child.attributes.href.value, child.attributes.add_date.value.concat(suffix), '', child.innerText))
      } else {
        array.push(new A(child.attributes.href.value, child.attributes.add_date.value.concat(suffix), child.attributes.icon.value, child.innerText))
      }
      break;
    default:
      break;
  }
}

function H(addDate, lastModified, value) {
  this.addDate = addDate
  this.lastModified = lastModified
  this.value = value
}

function A(href, addDate, icon, value) {
  this.href = href
  this.addDate = addDate
  this.icon = icon
  this.value = value
}

function Car(sColor, iDoors, iMpg) {
  this.color = sColor;
  this.doors = iDoors;
  this.mpg = iMpg;
  this.drivers = new Array("Mike", "John");

  if (typeof Car._initialized == "undefined") {
    Car.prototype.showColor = function () {
      alert(this.color);
    };
    Car._initialized = true;
  }
}
