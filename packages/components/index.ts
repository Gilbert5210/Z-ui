import type { App } from 'vue'
import button from './button'
export * from './button'

const components = [button]

const install = (app: App) => {
    components.forEach((comp) => app.use(comp))
}

export default {
    version: '1.5.2',
    install,
}
