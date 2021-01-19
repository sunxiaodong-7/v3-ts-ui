import { defineComponent, PropType} from 'vue';
import '@/assets/icon.js';

export default defineComponent({
  name: 'VIcon',
  props: {
    icon: String
  },
  setup(props) {
    return () => <svg class="v-icon" aria-hidden="true">
      <use xlinkHref={`#icon-${props.icon}`}></use>
    </svg>
  }
})