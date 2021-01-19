import { defineComponent, onMounted, ref, getCurrentInstance } from 'vue';

export default defineComponent({
  name: 'VButtonGroup',
  setup(props, { slots }) {
    const ctx = getCurrentInstance()
    onMounted(() => {
      const el = ctx!.refs.root as HTMLElement
      const children = el.children
      console.log(ctx)
      for(let i=0; i<children.length; i++) {
        console.assert(children[i].tagName === 'BUTTON', '包裹的元素必须是button')
      }
    })
    return () => <div class="v-button-group" ref="root">
      {!!slots.default && slots.default()}
    </div>
  }
})