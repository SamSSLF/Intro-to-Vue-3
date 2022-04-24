const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        addCart(id) {
            this.cart.push(id)
            console.log(this.cart)
        },
        removeCart(id){
            for(var i=0; i<this.cart.length; i++) {
                if(this.cart[i]===id) {
                    this.cart.splice(i,1);
                }
            }
            console.log(this.cart)
        },
    }
})
