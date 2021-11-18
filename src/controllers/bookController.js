
const BookModel= require("../models/bookModel.js")
const AuthorModel= require("../models/authorModel.js")

const mongoose= require("mongoose")

const createBook = async function (req, res) {
    const book= req.body
    let authorId=req.body.author
    let authorFromRequest=await AuthorModel.findById(authorId)
    if(authorFromRequest)
    {
        let bookCreated= await BookModel.create(book)
        res.send({data:bookCreated})
    }
    res.send({msg:"The author id provided is not valid"})
}

const getBooks = async function(req, res){

    let allbooks=await BookModel.find().populate('author')
    res.send({allbooks})
}

module.exports.createBook=createBook
module.exports.getBooks=getBooks
