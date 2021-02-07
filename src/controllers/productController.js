const fs = require('fs');
const path = require('path');


let productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
productos = JSON.parse(productos);

module.exports = {  
    index: function(req, res){
        res.render('pages/products', {productos:productos});
    },
    cart: function(req, res){
        res.render('pages/cart');
    },
    boardCreate: function(req, res){
         res.render('pages/productosCreate');
    },  

    create: function(req, res){    

        let id = productos.length+1
        
        productos.push({
            id:id,
            name:req.body.name,
            image: req.files[0].filename,
            description:req.body.description,
            price:req.body.price,
            discount:req.body.discount,
            age:req.body.age,
            category:req.body.category,
        })

        
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productos));
        console.log(req.files)
        res.redirect('/products')
    },
    detail: function(req, res){
        let pedidoProducto = req.params.id;

        for (let i = 0; i < productos.length; i++) {
           
            if (pedidoProducto == productos[i].id) {
                 res.render('pages/details', {
                 elProducto: productos[i],
                 productos: productos
                }) 
            }
         }
           return res.send (pedidoProducto)
    },

   edit:function(req, res){
    let pedidoProductoAEditar = req.params.id;

    for (let i = 0; i < productos.length; i++) {
        if (pedidoProductoAEditar == productos[i].id) {
             res.render('pages/productEdit', {
             elProducto: productos[i],
             productos: productos
            }) 
        }
     }
       return res.render (pedidoProductoAEditar)
},



delete: function(req, res){

    let result = productos.filter(productos =>productos.id != req.params.id);
    console.log(result);
    productos=result;
      
    /*fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productos));*/
    res.redirect('/products');
},  


}

