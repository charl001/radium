const mongoose= require('mongoose')

const orderSchema= new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'UserDB'
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductDB'
    },
    amount:Number,
    isFreeAppUser:Boolean,
    date: Date
})

module.exports=mongoose.model('OrderDB',orderSchema)

