import { defineComponent } from "vue";

export const AppMain = defineComponent({
  setup() {
    return () => (
      <div class="app-main">
        <router-view></router-view>
      </div>
    )
  }
})
