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
    create: function(req, res){
        res.render('pages/productosCreate');
    },





}

