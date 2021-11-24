const UserModel=require("../models/User")
const mongoose=require("mongoose")

const createUser=async function(req,res){

    let data=req.body

    data.freeAppUser=req.isFreeAppUser
    let savedUser=await UserModel.create(data)
    res.send({data:savedUser})
}

module.exports.createUser=createUser