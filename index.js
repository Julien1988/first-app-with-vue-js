import Vue from '/node_modules/vue/dist/vue';

const app = new Vue({
    el: '#app',
    data: {
        message: "Mon application VueJS",
        shoppingCart: [{
                label: 'Pommes',
                cost: 6,
                url: "#"
            },
            {
                label: 'Bananes',
                cost: 2,
                url: "#"
            },
            {
                label: 'Noix de coco',
                cost: 8,
                url: "#"
            }
        ]
    },
    computed: {
        totalPrice() {
            let total = 0;
            this.shoppingCart.forEach(element => {
                total += element.cost
            });
            return total
        }
    }
})

console.log("coucou")