const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    fname: String,
    lname: String,
    PhoneNo: Number,
    Pincode: Number

},{timestamps:true})

module.exports=mongoose.model('CUser',userSchema)