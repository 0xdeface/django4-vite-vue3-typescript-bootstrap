import '../css/style.css';
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import Button from "./components/Button.vue";
import Index from "./pages/index.vue"
import Catalog from "./pages/catalog.vue"

const page = JSON.parse(document.getElementById("page").textContent)
const resolve = (name) => {
  const pages = {
    Index, Catalog
  }
  return pages[name] || Index
}
createInertiaApp({
  page: page,
  resolve: name => resolve(name),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
}).then()

// createApp({
//   template: '<div><Index/></div>',
//   components: { Index },
//   data() {
//     return {
//       count: 0
//     }
//   }
// }).mount('#app')
