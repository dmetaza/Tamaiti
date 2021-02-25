const express = require("express");
const router = express.Router();
const logMiddleware = require ("../middlewares/logMiddleware")

const cartController = require("../controllers/cartController")

router.get('/',logMiddleware,cartController.index)

module.exports = router;