import { computed, defineComponent, PropType } from "vue";

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
export type ButtonSize = 'medium' | 'small' | 'mini';
export type ButtonNativeType = 'button' | 'submit' | 'reset';
export type ButtonPosition = 'left' | 'right';

export const VButton = defineComponent({
  name: 'VButton',
  props: {
    size: {
      type: String as PropType<ButtonSize>,
      validator: (val: ButtonSize) => {
        return ['medium', 'small', 'mini', ''].includes(val)
      }
    },
    type: {
      type: String as PropType<ButtonType>,
      validator: (val: ButtonType) =>  {
        return [
          'primary',
          'success',
          'warning',
          'danger',
          'info',
          'text'
        ].includes(val)
      }
    },
    nativeType: {
      type: String as PropType<ButtonNativeType>,
      default: 'button'
    },
    disabled: Boolean,
    icon: String,
    loading: {
      type: Boolean,
      default: false
    },
    position: {
      type: String as PropType<ButtonPosition>
    }
  },
  setup(props, {slots}) {
    const classes = computed(()=>[
      'v-button',
      {
        [`v-button--icon-${props.position}`]: !!props.position,
        [`v-button--${props.size}`]: !!props.size,
        [`v-button--${props.type}`]: !!props.type,
        'is-disabled': props.disabled,
        'is-loading': props.loading
      }
    ])
    return () => <button class={classes.value} disabled={props.disabled || props.loading} type={props.nativeType}>
      {(props.icon && !props.loading)?<v-icon  icon={props.icon} class="icon"></v-icon>:''}
      {(props.loading)?<v-icon icon="loading" class="icon loading"></v-icon>:''}
      <span>{slots.default && slots.default()}</span>
    </button>
  }
})