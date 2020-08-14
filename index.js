import Vue from '/node_modules/vue/dist/vue';

const app = new Vue({
    el: '#app',
    data: {
        message: "Bonjour",
        myArray: ['Une entrée', 'Deuxièm etrée']
    }
})

console.log("coucou")