import { PropType } from 'vue';

export enum StyleStatus {
  primary = 'primary',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  info = 'info'
}

export enum StyleSize {
  medium = 'medium',
  small = 'small',
  mini = 'mini'
}

export const StyleSheet = {
  status: {type: String as PropType<StyleStatus>},
  size: {type: String as PropType<StyleSize>},
}