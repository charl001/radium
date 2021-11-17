const BookModel= require("../models/bookModel.js")
const mongoose= require("mongoose")

const createBook = async function (req, res) {
    const book= req.body
    let savedBook= await BookModel.create(book)
    res.send({msg: savedBook})
}

const bookList= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName:1,authorName:1})
    res.send({allBooks})
}

const getBooksInYear= async function(req, res)
{
    
    let allBooks=await BookModel.find({year:req.body.year})
    res.send({allBooks})
}

const getParticularBooks= async function(req,res)
{
    let PerBooks=await BookModel.find(req.body)
    res.send({PerBooks})
}

const getXINRBooks= async function(req,res)
{
    let allBooks= await BookModel.find({ 'prices.indianPrice': {$in: ["100INR", "200 INR", "500INR"]}})
    res.send({allBooks})
}

const getRandomBooks= async function(req,res)

{
    let randombooks=await BookModel.find({$or:[{"stockAvailable": true}, {totalPages:{$gt:500}}]})
    res.send({randombooks})
}
module.exports.createBook=createBook
module.exports.bookList=bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getXINRBooks= getXINRBooks
module.exports.getParticularBooks=getParticularBooks
module.exports.getRandomBooks=getRandomBooks
