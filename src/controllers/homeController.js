const fs = require('fs');
const path = require('path');


let productos = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8');
productos = JSON.parse(productos);

module.exports = {

    index: function(req, res){
        res.render('pages/home', {productos:productos});
    }
}