const mongoose=require('mongoose')

const bookSchema= new mongoose.Schema({

    name:String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'myAuthor'
    },
    price: Number,
    ratings:Number

}, {timestamps: true} )

module.exports = mongoose.model( 'myBook', bookSchema ) 