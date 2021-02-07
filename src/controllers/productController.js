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

    boardCreate: function(req, res){
        res.render('pages/productosCreate');
    },

    create: function(req, res){    
        productos.push({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            age:req.body.age,
            category:req.body.category,

        })
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productos));
        console.log(req.body)
        res.redirect('/products')
    },



}

