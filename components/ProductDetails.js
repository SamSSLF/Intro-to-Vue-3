app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true,
        },
        template: 
            /*html*/
            `<div class="product-details">
            <p>{{ details }}</p>
            </div>`,
    }
})