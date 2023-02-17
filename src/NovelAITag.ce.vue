<script setup>
import Readme from './components/Readme.vue'
import Search from './components/Search.vue'
import Select from './components/Select.vue'
import Selected from './components/Selected.vue'
import { useToggle, usePreferredDark, useUrlSearchParams } from '@vueuse/core'
import { ref, provide } from 'vue'

const params = useUrlSearchParams('history')

const [isDark, toggleDark] = useToggle()
const isPreferredDark = usePreferredDark()
const messageContainerRef = ref()
console.log(isPreferredDark.value)

if (params.theme) {
  toggleDark(params.theme == "dark" ? true : false)
} else {
  toggleDark(isPreferredDark.value)
}

provide("messageContainer", messageContainerRef)

</script>

<template>
  <div class="theme_container">
    <div class="theme_controller container" :class="isDark ? 'dark' : ''" ref="messageContainerRef">
      <div>
      <Readme />
      <Search />
      <Select />
    </div>
    <Selected />
    </div>
  </div>
</template>

<style lang="scss">
.theme_container {
  @import "~/styles/base.scss";
  @import "element-plus/theme-chalk/src/button.scss";
  @import "element-plus/theme-chalk/src/card.scss";
  @import 'element-plus/theme-chalk/src/collapse-item.scss';
  @import 'element-plus/theme-chalk/src/collapse.scss';
  @import 'element-plus/theme-chalk/src/input.scss';
  @import 'element-plus/theme-chalk/src/divider.scss';
  @import 'element-plus/theme-chalk/src/tag.scss';
  @import 'element-plus/theme-chalk/src/tab-pane.scss';
  @import 'element-plus/theme-chalk/src/tabs.scss';
  @import 'element-plus/theme-chalk/src/message.scss';
}

.container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--el-bg-color);
}

.el-tabs__header {
  z-index: 9;
  position: sticky;
  top: 0;
  background: var(--el-bg-color);
}
</style>