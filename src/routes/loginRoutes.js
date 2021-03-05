const { Router } = require('express');
const express = require('express');

const userController = require('../controllers/userController');
const router = express.Router();
const logMiddleware = require ("../middlewares/logMiddleware");
const closeSessionMiddleware = require ("../middlewares/closeSessionMiddleware");

router.get('/', userController.login);
router.post('/', logMiddleware,[
    check('username').isLength().withMessage('Este campo debe estar completo'),
    check ('email').isEmail.withMessage('El email debe ser un email valido'),
    check('password').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres')
], closeSessionMiddleware ,usersController.processLogin);

module.exports = router;