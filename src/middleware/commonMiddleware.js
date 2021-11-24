const jwt = require('jsonwebtoken')
const UserModel = require("../models/usermodel")
const Mid1=  async function(req, res, next)
{

    let token = req.headers['x-auth-token']
    if (!token) {
        return res.send({ status: false, Message: 'No token found' })
    } else {
        let decodedtoken = jwt.verify(token, 'key')
        if (decodedtoken) {
            let userdetails =  await UserModel.findOne({ _id: req.params.userId, isDeleted: false })

            if (userdetails) {
                req.isUserDetails=userdetails
                next()

            }else{
                res.send({ status: false, message: 'User not found' })
            }
        }else{
            res.send( {status: false, message: 'Token not valid' })
        }
    }
}

module.exports.Mid1=Mid1