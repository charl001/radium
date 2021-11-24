const express = require('express');

const router = express.Router();

const UserController=require("../controllers/userController")
const Middleware=require("../middleware/commonMiddleware")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/users',UserController.users)
router.post('/login',UserController.login)
router.get('/getDetails/:userId',Middleware.Mid1,UserController.getDetails)
router.put('/updateDetails/:userId',Middleware.Mid1,UserController.updateDetails)

module.exports = router;