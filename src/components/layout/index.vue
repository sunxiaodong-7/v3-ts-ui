<template>
  <article class="app">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <app-main></app-main>
  </article>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';
import {AppHeader} from './app-header';
import {AppSidebar} from './app-sidebar';
import {AppMain} from './app-main';

export default defineComponent({
  name: 'Layout',
  components: {
    AppHeader,
    AppSidebar,
    AppMain
  }
})
</script>

<style scoped lang="scss">
.app {
  padding-top: 60px;
  padding-left: 240px;
}
</style>
