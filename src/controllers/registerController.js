const fs = require ('fs');
const path = require ('path');
const {check, validationResult, body} = require('express-validator');

let users = fs.readFileSync(path.join(__dirname, '../data/users.json'), "utf8");
usersJson= JSON.parse(users);

module.exports = {
    register: function(req,res){
        res.render("pages/register", {
            usersJson: usersJson
        })
    },
    create: function(req, res){
        let errores = validationResult(req);

        if(errores.isEmpty()){
            usersJson.push({
                id: req.body.id,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8),
                avatar: req.files[0].filename
            })
            fs.writeFileSync(path.join(__dirname, "../data/users.json"), JSON.stringify(usersJson))
            res.send("¡Registrado!")
        }else{
            return res.render("pages/register", {errores: errores.errors})
        }    
    }
}