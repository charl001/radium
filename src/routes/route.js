const express = require('express');

const router = express.Router();

const ProductController=require("../controllers/productController")
const Middleware=require("../middleware/commonMiddleware")
const UserController=require("../controllers/userController")
const OrderController=require("../controllers/orderController")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createProduct',ProductController.createProduct)
router.post('/createUser',Middleware.checkHeader,UserController.createUser)
router.post('/createOrder',Middleware.checkHeader,OrderController.createOrder)

module.exports = router;