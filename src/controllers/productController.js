const ProductModel=require("../models/Product")
const mongoose=require("mongoose")

const createProduct= async function(req, res) {
 
    const data=req.body
    let savedProduct=await ProductModel.create(data)
    res.send({Data:savedProduct})
}

module.exports.createProduct=createProduct
