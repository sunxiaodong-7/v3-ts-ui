import { App } from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Radio from './radio';

const plugins = [
  Button,
  Icon,
  ButtonGroup,
  Input,
  Radio
]

function install(app: App) {
  plugins.forEach(app.use)
}

export default {
  install
}

export {
  Button,
  Icon,
  ButtonGroup,
  Input,
  Radio
}