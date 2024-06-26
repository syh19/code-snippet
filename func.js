/**
 * 根据索引获取类EXCEL头部的字母顺序
 * @param {number} index 索引
 * @returns 
 */
function getExcelHeader (index) {
  let header = ''
  while (index >= 0) {
    header = String.fromCharCode(65 + (index % 26)) + header
    index = Math.floor(index / 26) - 1
  }
  return header
}



/**
 * 传入搜索的内容匹配关键字并高亮；关键字高亮
 * @param keyWord 搜索的关键字
 * @param escapeString 待高亮的内容
 */
function highlightKeyword (keyWord, escapeString) {
  const reg = new RegExp(keyWord, 'ig')
  const highlightStr = String(escapeString).replace(reg, (str) => {
    return `<span class="your-highlight-class">${str}</span>`
  })
  return highlightStr
}