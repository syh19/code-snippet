/**
 * 获取多行文本的高度
 */
function getMultilineIllutrateHeight () {
  // 步骤1：选择<div>元素
  const element = this.$refs.multilineIllutrate
  if (element) {
    // 步骤2：获取<div>元素的文本内容
    const eleText = element.textContent
    // 步骤3：创建一个临时元素来计算高度
    const tempDiv = document.createElement('span')
    // 步骤4：将文本内容添加到临时元素中
    tempDiv.textContent = eleText
    // 步骤5：将临时元素添加到DOM中（使其不可见）
    tempDiv.style.position = 'absolute'
    tempDiv.style.left = '-9999px'
    tempDiv.style.top = '-9999px'
    tempDiv.style.zIndex = '-9999'
    tempDiv.style.width = '280px'
    document.body.appendChild(tempDiv)
    // 步骤6：测量临时元素的高度
    const textHeight = tempDiv.offsetHeight
    // 步骤7：清理工作，移除临时元素
    document.body.removeChild(tempDiv)

    const lineHeight = parseInt(window.getComputedStyle(element).lineHeight)
    /** 实际行数 */
    const actualLines = Math.ceil(textHeight / lineHeight)
    return actualLines
  }
}