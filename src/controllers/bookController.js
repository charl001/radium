
const BookModel= require("../models/bookModel.js")
const AuthorModel= require("../models/authorModel.js")

const mongoose= require("mongoose")

const createBook = async function (req, res) {
    const book= req.body
    let savedBook= await BookModel.create(book)
    res.send({msg: savedBook})
}

const getBooks = async function(req, res){

    let allbooks=await BookModel.find().populate('author')
    res.send({allbooks})
}

module.exports.createBook=createBook
module.exports.getBooks=getBooks