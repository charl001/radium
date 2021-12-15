const express = require('express');

const router = express.Router();
const UrlController=require('../controllers/Url_Controller')

// const BaseUrl='http:localhost:3000'

router.post('/url/shorten',UrlController.ShortenUrl)
router.get('/:urlCode',UrlController.geturl)

module.exports = router;