<script setup>
import Readme from './components/Readme.vue'
import Search from './components/Search.vue'
import Select from './components/Select.vue'
import Selected from './components/Selected.vue'
import { useDark, useToggle, usePreferredDark, useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('history')

const isDark = useDark()
const toggleDark = useToggle(isDark)
const isPreferredDark = usePreferredDark()
console.log(isPreferredDark)

if (params.theme){
  toggleDark(params.theme == "dark" ? true : false)
}else{
  toggleDark(isPreferredDark.value)
}

</script>

<template>
  <div style="flex: 1">
    <Readme />
    <Search />
    <Select />
  </div>
  <Selected />
</template>
