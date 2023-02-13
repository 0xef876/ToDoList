import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {firestorePlugin} from "vuefire";
Vue.use(firestorePlugin);
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXLgZo1v7FP0HdqpLbQTbHiOvW5TBFFX8",
  authDomain: "todolist-88a4e.firebaseapp.com",
  projectId: "todolist-88a4e",
  storageBucket: "todolist-88a4e.appspot.com",
  messagingSenderId: "222435673700",
  appId: "1:222435673700:web:d1c3440cda7ee224204171",
  measurementId: "G-LPBC3TKMD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);