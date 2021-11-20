import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faBars,
  faEnvelope,
  faKey,
  faUserCircle,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import router from "./router";
import "@/assets/index.css";

library.add([
  faGoogle,
  faBars,
  faEnvelope,
  faKey,
  faUserCircle,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faInfoCircle
]);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
