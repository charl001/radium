const express = require('express');

const router = express.Router();
const CryptoController=require("../controllers/cryptoController")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


router.get('/getCrypto',CryptoController.getCrypto )

module.exports = router;