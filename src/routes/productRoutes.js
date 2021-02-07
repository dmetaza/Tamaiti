const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.index);
router.get('/cart', productController.cart);
router.get('/create', productController.create);
router.get('/:id', productController.detail);




module.exports = router;