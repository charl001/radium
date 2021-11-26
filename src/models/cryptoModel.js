const mongoose=require('mongoose')

const cryptoSchema=new mongoose.Schema({

    symbol:String,
    name:String,
    marketCapUsd:String,
    priceUsd:String
})

module.exports=mongoose.model('Top100Crypto', cryptoSchema)