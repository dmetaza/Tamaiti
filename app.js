const express= require ('express');
const app = express();
const path= require('path');

app.use(express.static('./public'));


app.get('/', function(req,res){
    res.sendFile( path.join(__dirname ,'./src/views/index.html'))
})

app.get('/login', function(req,res){
    res.sendFile( path.join(__dirname ,'./src//views/login.html'))
})

app.get('/register', function(req,res){
    res.sendFile( path.join(__dirname ,'./src//views/register.html'))
})
app.get('/productCart', function(req,res){
    res.sendFile( path.join(__dirname ,'./src//views/productCart.html'))
})
app.get('/productDetail', function(req,res){
    res.sendFile( path.join(__dirname ,'./src//views/productDetail.html'))
})

app.listen (3000, function(){
    console.log('El servidor está corriendo en puerto 3000')
})

