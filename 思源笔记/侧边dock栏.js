// 链滴：https://ld246.com/article/1717041313283
// 鼠标中键收起两侧dock；双击收起单侧

function toggle_panel (pid) {
  console.log("===>> toggle_panel " + pid)
  var div
  if (pid == "left") {
    div = document.querySelector('.fn__flex-column.fn__flex-shrink.layout__dockl')
    div_rs = div.nextElementSibling
  }

  if (pid == "right") {
    div = document.querySelector('.fn__flex-column.layout__dockr')
    div_rs = div.previousElementSibling
  }
  if (div.style.display === 'none') {
    div.style.removeProperty('display')
    div_rs.style.removeProperty('display')
  } else {
    div.style.display = 'none'
    div_rs.style.display = 'none'
  }
}

var tgDockLeft = document.getElementById('dockLeft')
var tgDockRight = document.getElementById('dockRight')

// ------------------------------------------------

// 鼠标中键收起两侧dock
tgDockLeft.addEventListener('mousedown', function (event) {
  if (event.button === 1) { // 鼠标中键通常是1
    toggle_panel("left")
    toggle_panel("right")
  }
})

// 鼠标中键收起两侧dock
tgDockRight.addEventListener('mousedown', function (event) {
  if (event.button === 1) { // 鼠标中键通常是1
    toggle_panel("left")
    toggle_panel("right")
  }
})

// ------------------------------------------------

// 鼠标双击收起左侧dock
tgDockLeft.addEventListener('dblclick', function (event) {
  toggle_panel("left")
})

// 鼠标双击收起右侧dock
tgDockRight.addEventListener('dblclick', function (event) {
  toggle_panel("right")
})

