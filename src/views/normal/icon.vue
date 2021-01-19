<template>
  <div>
    <ul class="icon-box">
      <li v-for="item in state.iconList" :key="item" class="icon-item">
        <v-icon :icon="item"></v-icon>
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import {defineComponent, reactive} from 'vue'

export default defineComponent({
  name: 'Icon',
  setup() {
    const state = reactive({
      iconList: [
        'up',                    'down',
        'chunyimianmiantubiao-', 'prev',
        'next',                  'rili',
        'jia',                   'jia1',
        'cha',                   'file1',
        'duihao',                'UploadtoCloud',
        'upload',                'sousuo',
        'shangchuan',            'xiazai',
        'arrow-left-circle',     'arrow-right-circle',
        'alert-circle',          'file',
        'check',                 'plus-circle',
        'yanjing',               'eye',
        'qingkong',              'right',
        'left',                  'loading',
        'edit'
      ]
    })
    return {
      state
    }
  }
})
</script>

<style scoped lang="scss">
.icon-box {
  display: flex;
  flex-wrap: wrap;
  .icon-item {
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
