const UserModel = require("../models/usermodel")

const users = async function (req, res) {

    var data = req.body
    let savedUser = await UserModel.create(data)
    res.send({ RegisteredUser: savedUser })
}

const login = async function (req, res) {
    let username = req.body.name
    let userpassword = req.body.password

    let User = await UserModel.findOne({ name: username, password: userpassword, isDeleted: false })

    if (User) {
        const generatedToken = jwt.sign({ userId: User._id }, "key")
        res.send({ status: true, data: User._id, token: generatedToken })
    } else {
        res.send({ status: false, Message: "Invalid Credentials" })
    }

}

const getDetails = async function (req, res) {


    let Detailsrequired = req.isUserDetails
    res.send({ status: true, data: Detailsrequired })

}

const updateDetails = async function (req, res) {

    let data = req.body
    let updatedDetails = await UserModel.updateOne({ "_id": req.params.userId }, data)
    res.send({ status: true, data: updatedDetails })

}


module.exports.users = users
module.exports.login = login
module.exports.getDetails = getDetails
module.exports.updateDetails = updateDetails