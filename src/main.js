// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import * as firebase from "firebase";
import router from "./router";
import { store } from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import DateFilter from "./filters/date";
import AlertCmp from "./components/Shared/Alert.vue";

Vue.use(Vuetify, {
  theme: {
    primary: "#d12e4e",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  }
});

Vue.config.productionTip = false;

Vue.filter("date", DateFilter);
Vue.component("app-alert", AlertCmp);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyAvzPXGIaNPYiJ3N3tE3dfsh3pUrrokLX0",
      authDomain: "vue-vuetify.firebaseapp.com",
      databaseURL: "https://vue-vuetify.firebaseio.com",
      projectId: "vue-vuetify",
      storageBucket: "vue-vuetify.appspot.com"
    });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.$store.dispatch('autoSignIn', user)
    }
  })
    this.$store.dispatch('loadMeetups')
  }
});
