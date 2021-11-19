
const BookModel= require("../models/bookModel.js")
const AuthorModel= require("../models/authorModel.js")
const PublisherModel=require("../models/publisherModel")

const mongoose= require("mongoose")

const createBook = async function (req, res) {
    const book= req.body
    let authorId=req.body.author
    let publisherId=req.body.publisher
    let authorFromRequest=await AuthorModel.findById(authorId)
    let publisherFromRequest=await PublisherModel.findById(publisherId)
    if(authorFromRequest && publisherFromRequest)
    {
        let bookCreated= await BookModel.create(book)
        res.send({data:bookCreated})
    }
    res.send({msg:"Either author id or publisher id provided is not valid"})
}

const getBooks = async function(req, res){

    let allbooks=await BookModel.find().populate('author',{_id:1,author_name:1,age:1}).populate('publisher')
    res.send({allbooks})
}

module.exports.createBook=createBook
module.exports.getBooks=getBooks
