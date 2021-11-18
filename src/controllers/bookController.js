const BookModel= require("../models/bookModel.js")
const AuthorModel= require("../models/authorModel.js")

const mongoose= require("mongoose")

const createBook = async function (req, res) {
    const book= req.body
    let savedBook= await BookModel.create(book)
    res.send({msg: savedBook})
}

const getlistOut = async function(req, res){
    let allBooks= await BookModel.find({author_id: 1}).select({name:1,_id:0})
    res.send({ msg: allBooks})
}

// const getTwoState = async function(req, res)
// {
//    let savedData= await BookModel.findOne({name:"Two States"}).select({author_id:1,_id:0})
//    let authorname=await AuthorModel.findOne(savedData).select({author_name:1,_id:0})
//    let Uprice= await BookModel.findOneAndUpdate({name:"Two States"},{price:100},{new:true}).select({price:1,_id:0})
//    res.send({msg:authorname,Uprice})
// }

const getTwoState = async function (req, res) {

    let savedData= await BookModel.findOneAndUpdate({name:"Two states"},{ price:100},{new:true})

    let data=await AuthorModel.findOne({author_id:savedData.author_id})

    res.send({"updatedPrice":savedData.price,"authorName":data.author_name})    

}


const FindBooks= async function(req, res)
{
    let book=await BookModel.find({price:{$gt:49,$lt:101}}).select({author_id:1,_id:0})
    let auth = await AuthorModel.find({book}).select({author_name:1,_id:0})
    res.send({auth})
}

module.exports.createBook=createBook
module.exports.getlistOut=getlistOut
module.exports.getTwoState=getTwoState
module.exports.FindBooks=FindBooks