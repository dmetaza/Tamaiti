const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');
const logMiddleware = require ("../middlewares/logMiddleware");
const closeSessionMiddleware = require ("../middlewares/closeSessionMiddleware");


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/uploads/img_products'))
    },
    filename: function (req, file, cb) {
      cb(null, req.body.name + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage })


router.get('/', productController.index);
router.get('/', logMiddleware, productController.productList);
router.get('/:id', logMiddleware ,productController.product);
router.post('/', closeSessionMiddleware, productController.productList);

router.get('/create', productController.boardCreate);
router.post('/create',upload.any(), productController.create);
router.get('/:id/edit', productController.edit);
router.post('/:id', closeSessionMiddleware, productController.product);
router.get('/:id', productController.detail);
router.get('/cart', productController.cart);

router.get('/:id/edit', productController.editView)
router.post('/:id/edit', closeSessionMiddleware, productController.editView);
router.put('/:id/edit', upload.any(), productController.edit)
router.delete('/:id/delete', productController.delete)


module.exports = router;