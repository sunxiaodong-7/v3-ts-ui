import { App } from "vue";

export function installPlugin<T extends {name: string}>(component: T) {
  return {
    ...component,
    install(app: App) {
      app.component(component.name, component);
    }
  }
}