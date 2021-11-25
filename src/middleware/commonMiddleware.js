const jwt = require('jsonwebtoken')
const UserModel = require("../models/usermodel")
const Mid1 = async function (req, res, next) {

    let token = req.headers['x-auth-token']
    if (!token) {
        return res.send({ status: false, Message: 'No token found' })
    } else {
        let decodedtoken = jwt.verify(token, 'key')
        if (decodedtoken) {
            let userdetails = await UserModel.findOne({ _id: req.params.userId, isDeleted: false })
            if (req.params.userId === decodedtoken._id) {

                if (userdetails) {
                    req.isUserDetails = userdetails
                    next()

                } else {
                    res.status(400).send({ status: false, message: 'Userid and path user id is not same' })
                }
            } else {
                res.status(400).send({ status: false, message: 'User not found' })
            }
        } else {
            res.status(400).send({ status: false, message: 'Token not valid' })
        }

    }
}

module.exports.Mid1 = Mid1
