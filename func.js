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