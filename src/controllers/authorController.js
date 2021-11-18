const AuthorModel= require("../models/authorModel.js")
const mongoose= require("mongoose")

const createAuthor = async function (req, res) {
    const author= req.body
    let savedAuthor= await AuthorModel.create(author)
    res.send({msg: savedAuthor})
}



module.exports.createAuthor=createAuthor

