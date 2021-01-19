<template>
  <div>
    <h4>基本</h4>
    <v-input v-model="value" @focus="handleFocus" @blur="handleBlur" @change="handleChange"></v-input>
    <span>{{value}}</span>
    <h4>状态</h4>
    <v-input v-for="item in ['primary', 'success', 'warning', 'info', 'danger']" :key="item" :status="item"></v-input>
    <br>
    <br>
    <v-input v-for="item in ['primary', 'success', 'warning', 'info', 'danger']" :key="item" :status="item" type="textarea"></v-input>
    <h4>图标</h4>
    <v-input prefixIcon="sousuo"></v-input>
    <v-input suffixIcon="sousuo"></v-input>
    <h4>尺寸</h4>
    <v-input v-for="item in ['', 'medium', 'small', 'mini']" :key="item" :size="item" prefixIcon="sousuo"></v-input>
    <h4>文本域</h4>
    <v-input type="textarea"></v-input>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Input',
  data() {
    return {
      value: '111'
    }
  },
  methods: {
    handleFocus(e: FocusEvent) {
      console.log(e.type)
    },
    handleBlur(e: FocusEvent) {
      console.log(e.type)
    },
    handleChange(e: Event) {
      console.log(e)
    }
  }
})
</script>

<style scoped lang="scss">

</style>
