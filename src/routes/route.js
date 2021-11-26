const express = require('express');

const router = express.Router();

const WeatherController=require("../controller/weathercontroller")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/getWeather',WeatherController.getWeather)

module.exports = router;