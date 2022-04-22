app.component('product-details', {
    props: {
        details: {
            type: String,
            required: true,
        },
        template: 
            /*html*/
            `<div class="product-details">
            <p>{{ details }}</p>`,
    }
})