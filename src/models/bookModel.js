const mongoose=require('mongoose')

const bookSchema= new mongoose.Schema({

    name:String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Authormy'
    },
    price: Number,
    ratings:Number,
    publisher: {

        type: mongoose.Schema.Types.ObjectId,
        ref : "myPublisher"
     }

}, {timestamps: true} )

module.exports = mongoose.model( 'Bookmy', bookSchema ) 