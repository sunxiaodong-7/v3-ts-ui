import { defineComponent } from "vue";
import { groups, Menu, MenuGroup } from '@/router/menu'

export const AppSidebar = defineComponent({
  setup(prop, context) {
    return () => {
      const renderChildren = (menus: Menu[]) => {
        return menus.map(menu => (
          <li>
            <router-link to={menu.path}>{menu.title||menu.name}</router-link>
          </li>
        ))
      }
      const renderGroup = (group: MenuGroup[]) => {
        return group.map(menus => (
          <li class="app-sidebar-group-name">
            <span>{menus.name}</span>
            <ul class="app-sidebar-group-list">
              {renderChildren(menus.children)}
            </ul>
          </li>
        ))
      }
      return <div class="app-sidebar">
        <ul>
          {renderGroup(groups)}
        </ul>
      </div>
    }
  }
})
