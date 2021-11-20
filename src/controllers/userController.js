const UserModel = require("../models/userModel")

const createUser=async function(req, res, next)
{
    var data=req.body;
    let savedUser=await UserModel.create(data)
    res.send({"data":savedUser})
    next()
}

const checkMiddleware = async function(req, res)
{
    console.log("Bingo! You have reach handler")
    res.send({"Message": "Just for checking"})
}

module.exports.createUser=createUser
module.exports.checkMiddleware=checkMiddleware