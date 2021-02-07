const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.index);


router.get('/create', productController.boardCreate);
router.post('/create', productController.create);
//router.put('/create', productController.edit);
//router.delete('/create', productController.delete);

//router.get('/productBoard', productController.board);


router.get('/:id', productController.detail);

router.get('/cart', productController.cart);


module.exports = router;