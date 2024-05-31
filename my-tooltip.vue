<!--
 * @FileDescription: 公共组件 - 增强版 el-tooltip；增加了一个判断是否需要显示 tooltip 的功能，目前只能支持单行文本
 * 注意：请确保 dom 会产生文本溢出的效果，否则无法触发 tooltip
 * 注意：该自定义组件接管了 disabled 属性，无需手动设置，即使手动设置了 disabled 也是无效的，完全自动化。
 * @Usage: 和 el-tooltip 用法一致，增加了一个判断是否需要显示 tooltip 的功能
 * Slot: 和 el-tooltip 一样
 -->

<template>
  <el-tooltip
    v-bind="$attrs"
    :disabled="disabled"
    class-name="my-tooltip-float-wrap"
  >
    <slot></slot>
  </el-tooltip>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class MyTooltip extends Vue {
  public disabled: boolean = false

  slotEl: Element | any = null

  @Watch('$attrs.title')
  titleChanged() {
    this.showTooltip()
  }

  mounted() {
    this.slotEl = this.$slots.default?.[0].elm
    this.slotEl.classList.add('my-tooltip-wrap')
    // 去掉元素的title属性
    this.slotEl.removeAttribute('title')
    this.observeSlotDom()
  }

  observeSlotDom() {
    let observer: any = new window.ResizeObserver((entries: any) => {
      for (let entry of entries) {
        this.showTooltip()
      }
    })
    // 观察一个或多个元素
    observer.observe(this.slotEl)
  }

  showTooltip() {
    if (this.slotEl) {
      this.$nextTick(() => {
        // 去掉元素的title属性
        this.slotEl.removeAttribute('title')
        if (this.slotEl.scrollWidth > this.slotEl.clientWidth) {
          this.disabled = false
        } else {
          this.disabled = true
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.my-tooltip-wrap {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

<style lang="scss">
/** 浮层类名 */
.my-tooltip-float-wrap {
  max-width: 50%;
  pointer-events: none;
}
</style>
