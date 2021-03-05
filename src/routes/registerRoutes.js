const express = require('express');
let {check, validationResult, body} = require('express-validator');

const userController = require('../controllers/registerController');

const router = express.Router();

const logMiddleware = require ('../middlewares/logMiddleware');
const closeSesionMiddleware = require ('../middlewares/closeSessionMiddleware');

router.get('/', registerController.register);
router.post('/', logMiddleware,[
    check('usernamesignup').isLength().withMessage('Este campo debe estar completo'),
    check ('emailsignup').isEmail.withMessage('El email debe ser un email valido'),
    check('passwordsignup').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
        body ("email").custom (function(value){
            let users = fs.readFileSync(path.join(__dirname, "../data/users.json"), "utf8");
            users = JSON.parse(users);
            for(let i = 0; i < users.length; i++){
              if(users[i].email == value){
                return false
              }
            }
            return true;
          }).withMessage("Este email ya fue registrado")
        ],closeSessionMiddleware,registerController.create)

module.exports = router;