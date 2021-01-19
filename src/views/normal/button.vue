<template>
  <div>
    <h4>基础</h4>
    <v-button @click="handleClick">默认按钮</v-button>
    <v-button type="primary">主要按钮</v-button>
    <v-button type="success">成功按钮</v-button>
    <v-button type="info">信息按钮</v-button>
    <v-button type="warning">警告按钮</v-button>
    <v-button type="danger">危险按钮</v-button>
    <h4>禁用</h4>
    <v-button disabled>默认按钮</v-button>
    <v-button disabled type="primary">主要按钮</v-button>
    <v-button disabled type="success">成功按钮</v-button>
    <v-button disabled type="info">信息按钮</v-button>
    <v-button disabled type="warning">警告按钮</v-button>
    <v-button disabled type="danger">危险按钮</v-button>
    <h4>尺寸</h4>
    <v-button>默认按钮</v-button>
    <v-button size="medium">中等按钮</v-button>
    <v-button size="small">小型按钮</v-button>
    <v-button size="mini">迷你按钮</v-button>
    <h4>图标</h4>
    <v-button type="primary" icon="sousuo">主要按钮</v-button>
    <v-button type="primary" loading position="right">主要按钮</v-button>
    <h5>按钮组</h5>
    <v-button-group>
      <v-button type="primary" icon="left">上一页</v-button>
      <v-button type="primary" icon="right" position="right">下一页</v-button>
    </v-button-group>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Button',
  setup() {
    const handleClick = (e: MouseEvent) => {
      console.log(e)
    }
    return {
      handleClick
    }
  }
})
</script>

<style scoped lang="scss">

</style>
