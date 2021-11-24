const OrderModel=require("../models/Order")
const UserModel=require("../models/User")
const ProductModel=require("../models/Product")
const mongoose=require("mongoose")

const createOrder=async function(req,res){


let userId=req.body.userId
let productId=req.body.productId
let AppTypeFree=req.isFreeAppUser
let orderAmount
let orderDate= Date()


//user validation

let user=await UserModel.findById(userId)
if(!user){
    return res.send({message: "User doesnot exist. Please provide a valid userId"})
}

//product validation

let product=await ProductModel.findById(productId)
if(!product){
    return res.send({message:"Product doesnot exist.Please provide a valid productId"})
}

// User Balance validation

if(!AppTypeFree&& user.balance < product.price)
{
    return res.send({Message:"User doesn't have balance to buy the product"})
}

if(AppTypeFree)
{
    orderAmount=0
}else{
    orderAmount=product.price
}

let orderDetails={
    userId:userId,
    productId:productId,
    amount:orderAmount,
    isFreeAppUser:AppTypeFree,
    date:orderDate
}

let orderCreated=await OrderModel.create(orderDetails)

if(!AppTypeFree)
{
    await UserModel.findOneAndUpdate({_id: userId},{balance: user.balance - product.price})
}

res.send({data:orderCreated})

}

module.exports.createOrder=createOrder