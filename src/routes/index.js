const express = require("express");
const router = express.Router();

const logMiddleware = require ("../middlewares/logMiddleware");
const closeSessionMiddleware = require ("../middlewares/closeSessionMiddleware");

const homeRouter = require('./homeRoutes');
const loginRouter = require('./loginRoutes');
const registerRouter = require('./registerRoutes');
const productsRouter = require('./productRoutes');

router.use('/', homeRouter);
router.use('/login', loginRouter);
router.use('/register', registerRouter); 
router.use('/products', productsRouter);                             

module.exports = router;