const express = require('express');
const router = express.Router();
const multer = require("multer");
let {check, validationResult, body} = require('express-validator');

const logMiddleware = require ('../middlewares/logMiddleware');
const closeSessionMiddleware = require ('../middlewares/closeSessionMiddleware');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/imgAvatar')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
var upload = multer({ storage: storage })


const registerController = require('../controllers/registerController');


router.get('/', logMiddleware, registerController.register);

router.post('/', upload.any() , [
    check('usernamesignup').isLength().withMessage('Este campo debe estar completo'),
    check ('emailsignup').isEmail().withMessage('El email debe ser un email valido'),
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