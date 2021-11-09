const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me5', function (req, res) {
    res.send('Hello world, This is the response for endpoint5')
});

//Create an endpoint for GET /movies that returns a list of movies. 
//Define an array of movies in your code and return the value in response.
router.get('/movies', function (req, res){
    
    const arr=["ABC","DEF","GHI","JKL","MNO","PQR"];
    res.send(arr)
});

//Create an endpoint GET /movies/indexNumber (For example GET /movies/1 is a valid request 
//and it should return the movie in your array at index 1)
router.get('/movies1/:index', function (req, res){

    
    let value=req.params.index
    const arr=["ABC","DEF","GHI","JKL","MNO","PQR"];
    res.send(arr[value])
});

router.get('/movies2/:index', function (req, res){

    
    let value=req.params.index
    const arr=["ABC","DEF","GHI","JKL","MNO","PQR"];
    if(value<arr.length)
    {
    res.send(arr[value])
    } else{
        res.send('Please send valid index')
    }
});

router.get('/films', function (req, res){
    
    const arr1=[{
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Demo"
       }];
    res.send(arr1)
});

router.get('/films1/:filmId', function (req, res){

    let index=req.params.filmId
    
    const arr1=[{
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Demo"
       }];
    if(index<=arr1.length)
    {
    res.send(arr1[index-1])
    } else{
        res.send('Please send valid index')
    }
});

module.exports = router;