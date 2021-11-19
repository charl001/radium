const express = require('express');

const router = express.Router();

const AuthorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
const PublisherController= require("../controllers/publisherController")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createBook',  BookController.createBook  );
router.post('/createAuthor', AuthorController.createAuthor);
router.get('/getBooks', BookController.getBooks)
router.post('/createPublisher', PublisherController.createPublisher)

module.exports = router;