<script setup>
import Readme from './components/Readme.vue'
import Search from './components/Search.vue'
import Select from './components/Select.vue'
import Selected from './components/Selected.vue'
import { useToggle, usePreferredDark, useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('history')

const [isDark, toggleDark] = useToggle()
const isPreferredDark = usePreferredDark()
console.log(isPreferredDark.value)

if (params.theme){
  toggleDark(params.theme == "dark" ? true : false)
}else{
  toggleDark(isPreferredDark.value)
}

</script>

<template>
  <div :class="isDark ? 'theme_container dark' : 'theme_container'">
    <div>
      <Readme />
      <Search />
      <Select />
    </div>
    <Selected />
  </div>
</template>

<style lang="scss">
@use "./styles/theme/dark.scss" as *;

.theme_container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--el-bg-color);
  @import "element-plus/theme-chalk/src/base.scss";
  @import "element-plus/theme-chalk/src/button.scss";
  @import "element-plus/theme-chalk/src/card.scss";
  @import 'element-plus/theme-chalk/src/collapse-item.scss';
  @import 'element-plus/theme-chalk/src/collapse.scss';
  @import 'element-plus/theme-chalk/src/input.scss';
  @import 'element-plus/theme-chalk/src/divider.scss';
  @import 'element-plus/theme-chalk/src/tag.scss';
  @import 'element-plus/theme-chalk/src/tab-pane.scss';
  @import 'element-plus/theme-chalk/src/tabs.scss';

}
.el-tabs__header {
  z-index: 9;
  position: sticky;
  top: 0;
  background: var(--el-bg-color);
}
</style>