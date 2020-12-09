const db = {
    products:{
        title: "SIG MCX RATTLER SBR",
        description: "In a descrete platform",
        review: "Excellent",
        models: "VIEW MODELS",
        mainImage: "img.jpg",
        images:[
            'img1.jpg',
            'img2.jpg'
        ]
       

    }
}

const {products} = req.params;
const product = db.products
app.get("/:name" ,(req,res) => {
    res.render("product-details", {
        locals: {
            title: product.title,
            description: product.description,
            review: product.review
    
        }
    })
})



