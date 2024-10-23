import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import {
    components,
    plugins
} from './utils/elps.js'
import "./router"


const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
})

plugins.forEach(plugin => {
    app.use(plugin)
})
installElementPlus(app)
app.mount('#app')