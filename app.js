const express= require ('express');
const app = express();
const path= require('path');

app.use(express.static('./public'));


app.get('/', function(req,res){
    res.sendFile( path.join(__dirname ,'./src/views/index.html'))
});

app.get('/login', function(req,res){
    res.sendFile( path.join(__dirname ,'./src/views/login.html'))
});

app.get('/registro', function(req,res){
    res.sendFile( path.join(__dirname ,'./src/views/registro.html'))
});

app.get('/productCart', function(req,res){
    res.sendFile( path.join(__dirname ,'./src/views/productCart.html'))
});

app.get('/productDetail', function(req,res){
    res.sendFile( path.join(__dirname ,'./src/views/productDetail.html'))
});

app.get('/productos/:idProducto', function(req,res){
    res.send( path.join("Bienvenido al detalle de producto "+ req.params.idProducto))
});

app.get('/productos/:idProducto/comentarios/:idComentario?', function(req,res){

    if( req.params.idComentario == undefined){
    res.send( path.join("Bienvenido los comentarios de producto "+ req.params.idProducto  ))

} else{
    res.send( path.join("Bienvenido los comentarios de producto "+ req.params.idProducto +" y estas enfocado en le comentario " +req.params.idComentario ))

}


});


app.listen (3000, function(){
    console.log('El servidor está corriendo en puerto 3000')
})

