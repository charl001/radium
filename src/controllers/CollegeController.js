const CollegeModel = require('../models/CollegeModel')
const InternModel = require('../models/InternModel')



const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false

    if (typeof value === 'string' && value.trim().length === 0) return false

    return true

}

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}


const createCollege = async function (req, res) {

    try {

        const requestBody = req.body;

        if (!isValidRequestBody(requestBody)) {
            res.status(400).send({ status: false, Message: 'Request Parameters are missing.' })
            return
        }

        const { name, fullName, logoLink } = requestBody;

        const Shortname= await CollegeModel.findOne({name})
        if(Shortname)
        {
            res.status(400).send({status:false,message:"College name is already registered."})
        }
        

        if (!isValid(name)) {
            res.status(400).send({ status: false, message: 'College name is required' })
            return
        }

        if (!isValid(fullName)) {
            res.status(400).send({ status: false, message: 'College Full Name is required' })
            return
        }

        if (!isValid(logoLink)) {
            res.status(400).send({ status: false, message: 'Logo Link is required.' })
            return
        }

        const CollegeData = { name, fullName, logoLink }
        const newcollege = await CollegeModel.create(CollegeData)

        res.status(201).send({ status: true, data: newcollege })
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}

const getInternlist = async function (req, res) {
    try {
        const collegeName = req.query.collegeName

        if (!collegeName) {
            res.status(400).send({ status: false, Message: 'Query Parameter is Missing' })
            return
        }


        const CollegeDetail = await CollegeModel.findOne({ name: collegeName, isDeleted:false})
        if(!CollegeDetail)
        {
            res.status(400).send({status:false, message:"collegeName is not correct or available in DB or college name is already deleted"})
        }
        const collegeId = CollegeDetail._id

     

        const interests = await InternModel.find({ collegeId: collegeId, isDeleted:false }).select({_id:1,name:1,email:1,mobile:1})
        
       

        const { name, fullName, logoLink} = CollegeDetail

        const data = {
            name,
            fullName,
            logoLink,
            interests
        }

        res.status(200).send({"data": data })

    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }

}

module.exports = { createCollege, getInternlist }
