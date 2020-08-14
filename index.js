import Vue from '/node_modules/vue/dist/vue';

const app = new Vue({
    el: '#app',
    data: {
        costOfApple: 10,
        costOfTomatos: 5,
        costOfBanana: 8
    },
    computed: {
        totalPrice() {
            return this.costOfApple + this.costOfTomatos + this.costOfBanana
        }
    }
})

console.log("coucou")