import { RouteRecordRaw, _RouteRecordBase } from 'vue-router';
import { Menu, groups, MenuGroup } from './menu';
import Layout from '../components/layout/index.vue'

const load = (path: string) => {
  return ()=>import(`@/views${path}`)
}

function registerRouter(group: MenuGroup[]): RouteRecordRaw[] {
  const route = [] as RouteRecordRaw[]

  route.push({
    path: '/',
    component: Layout,
    redirect: '/normal/button',
    children: []
  })
  
  groups.forEach(menus => {
    if(menus.children) {
      menus.children.forEach(menu => {
        addRoute(menu)
      })
    }
  })

  function addRoute(menu: Menu) {
    const component = load(menu.path)
    const child: RouteRecordRaw = {
      path: menu.path,
      meta: {
        title: menu.title || menu.name
      },
      name: menu.name,
      component: component
    }
    route[0].children!.push(child)
  }
  return route
}

const route: RouteRecordRaw[] = registerRouter(groups)

export default route