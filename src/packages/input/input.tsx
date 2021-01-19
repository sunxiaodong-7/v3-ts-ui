import { defineComponent, computed } from 'vue';
import { StyleSheet } from '@/utils/useStyle';

export const VInput = defineComponent({
  name: 'VInput',
  props: {
    ...StyleSheet,
    type: { type: String, default: 'text' },
    modelValue: { type: [String, Number] },
    placeholder: { type: String, default: '请输入内容' },
    suffixIcon: { type: String },
    prefixIcon: { type: String },
    rows: { type: Number, default: 3 }
  },
  emits: ['update:modelValue', 'focus', 'blur', 'change'],
  setup(props, { attrs, slots, emit }) {
    const classes = computed(() => {
      if(props.type === 'textarea') {
        return [
          'v-textarea',
          {
            [`v-textarea--${props.status}`]: !!props.status,
            [`v-textarea--${props.size}`]: !!props.size,
            "v-textarea__prefix": !!props.prefixIcon,
            "v-textarea__suffix": !!props.suffixIcon
          }
        ]
      }else {
        return [
          'v-input',
          {
            [`v-input--${props.status}`]: !!props.status,
            [`v-input--${props.size}`]: !!props.size,
            "v-input__prefix": !!props.prefixIcon,
            "v-input__suffix": !!props.suffixIcon
          }
        ]
      }
    })
    const publicProps = computed(() => ({
      value: props.modelValue,
      placeholder: props.placeholder,
      onInput: (e: Event) => emit('update:modelValue', (e.target as HTMLInputElement).value),
      onChange: (e: Event) => emit('change', (e.target as HTMLInputElement).value),
      onFocus: (e: Event) => emit('focus', e),
      onBlur: (e: Event) => emit('blur', e)
    }))

    const input = <>
      {props.prefixIcon ? <v-icon icon={props.prefixIcon}></v-icon> : ''}
      <input type={props.type} class="v-input__inner" {...publicProps.value} />
      {props.suffixIcon ? <v-icon icon={props.suffixIcon}></v-icon> : ''}
    </>
    const textarea = <textarea class="v-textarea__inner" rows={props.rows} {...publicProps.value}></textarea>

    return () => <div class={classes.value}>{props.type === 'textarea' ? textarea : input}</div>
  }
})
