import { createApp } from 'vue'
import App from './app.vue'
import ZjyUI from '@zjy-ui/components'
const app = createApp(App)

app.use(ZjyUI).mount('#app')
