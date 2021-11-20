const express = require('express');

const router = express.Router();

const UserController=require("../controllers/userController")
const Middleware=require("../middleware/generalmiddleware")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;

router.post('/CreateUser',UserController.createUser)
router.get('/checkMiddleware',Middleware.mid1,UserController.checkMiddleware)