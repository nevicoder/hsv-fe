import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebook,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faFacebook, faTiktok, faYoutube, faMagnifyingGlass);
const pinia = createPinia();
createApp(App)
  .use(router)
  .use(pinia)
  .use(VueAwesomePaginate)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
