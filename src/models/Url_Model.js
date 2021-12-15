const mongoose=require('mongoose')

const UrlSchema= new mongoose.Schema({

    urlCode:{
        type: String,
        required:'Url Code is required',
        unique:true,
        lowercase:true,
        trim:true,

    },
    longUrl:{
        type:String
    },
    shortUrl:{
        type:String,
        required:'shortUrl is mandatory',
        unique:true
    }
})

module.exports=mongoose.model('UrlDB',UrlSchema)