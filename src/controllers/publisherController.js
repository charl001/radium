const PublisherModel= require("../models/publisherModel.js")
const mongoose= require("mongoose")

const createPublisher = async function (req, res) {
    const publisher= req.body
    let savedPublisher= await PublisherModel.create(publisher)
    res.send({data: savedPublisher})
}

module.exports.createPublisher =createPublisher 