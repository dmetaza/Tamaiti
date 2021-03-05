const fs = require ('fs');
const path = require ('path');
const {check, validationResult, body} = require('express-validator');

let users = fs.readFileSync(path.join(__dirname, '../data/users.json'), "utf8");
usersJson= JSON.parse(users);

module.exports = {
    login: function(req,res) {
        res.render("pages/login")
    },
    processLogin: function (req,res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) { 
            for (let i = 0; i <usersJson.length; i++) {
                if (usersJson[i].email == req.body.email) {
                    if (bcrypt.compareSync(req.body.password, usersJson[i].password));
                    let usuarioALoguearse= usersJson[i];
                    break;
                }
            }
        }
        if (usuarioALoguearse == undefined) {
                return res.render ("pages/login", {errores: [{msg: 'Credenciales invalidas'}]});
            } else {
            req.session.usuarioLogueado = usuarioALoguearse
            console.log("El email fue registrado");
            res.render("index",{usuarioLogueado: req.session.usuarioLogueado})
            return res.render("pages/login", {errores: errores.errors})
        }    
    }
}