import Vue from "/node_modules/vue/dist/vue";

const app = new Vue({
  el: "#app",
  data: {
    message: "Mon application VueJS",
    favoritColor: "bleu",
  },
  methods: {
    showColor() {
      alert(this.favoritColor);
    },
    changeColor() {
      this.favoritColor = document.querySelector("#change-color").value;
    },
  },
});

console.log("coucou");
