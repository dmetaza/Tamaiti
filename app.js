const express = require('express');
const app = express();
const path= require('path');

var indexRouter = require('./src/routes/index');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, './public')));

app.use('/', indexRouter);

app.listen(3000, function(){
    console.log('Esta corriendo sobre el puerto 3000')
})