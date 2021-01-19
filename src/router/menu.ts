export interface Menu {
  name: string;
  title?: string;
  path: string;
}

export interface MenuGroup {
  name: string;
  children: Menu[];
}

export const groups: MenuGroup[] = [
  {
    name: '基础',
    children: [
      {name: 'Button', path: '/normal/button', title: 'button 按钮'},
      {name: 'Icon', path: '/normal/icon', title: 'icon 图标'}
    ]
  },
  {
    name: '表单',
    children: [
      {name: 'Input', path: '/form/input', title: 'Input 输入框'},
      {name: 'Radio', path: '/form/radio', title: 'Radio 单选框'},
    ]
  }
]
