const UrlModel = require('../models/Url_Model')
const shortid = require('shortid')
const validUrl = require('valid-url')
const redis = require('redis')
const { promisify } = require('util')

const redisClient = redis.createClient(
    18182,
    "redis-18182.c16.us-east-1-2.ec2.cloud.redislabs.com",
    { no_ready_check: true }
)

redisClient.auth("Wac9Qh1pkCmBb0E5QjLWHJetMPyf9n8M", function (err) {
    if (err) throw err;
});

redisClient.on("connect", async function () {
    console.log("Connected to Redis....");
});

const SET_ASYNC = promisify(redisClient.SET).bind(redisClient)
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient)

const baseUrl = 'http://localhost:3000'


const ShortenUrl = async function (req, res) {
    try {

        if (!(req.body && Object.keys(req.body).length > 0)) {
            return res.status(400).send({ status: false, msg: 'Request must contain a valid body' })
        }
        const longUrl = req.body.longUrl

        let cacheData = await GET_ASYNC(`${req.params.longUrl}`)

        if (cacheData) 
        {
            return res.status(200).send({ status: true, data: JSON.parse(cacheData) })
        }

        // let regex = /^(https:\/\/www\.|http:\/\/www\.)[a-zA-Z0-9!_$]+\.[a-zA-Z]{2,5}$/gm
        if (!validUrl.isUri(longUrl))
        {
             return res.status(400).send({ status: false, message: `This is not a valid Url` })
        }
        let url = await UrlModel.findOne({ longUrl })
        if (url) {
            res.status(200).send({ status: true, data: url })
        } else {
            const urlCode = shortid.generate().toLowerCase();
            const shortUrl = baseUrl + '/' + urlCode;

            const Urldata = {
                urlCode,
                longUrl,
                shortUrl
            }

            const data = await UrlModel.create(Urldata)
            await SET_ASYNC(`${longUrl}`, JSON.stringify(data))
            res.status(201).send({ status: true, "data": data })
        }
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}


const geturl = async function (req, res) {
    try {
        let cacheData = await GET_ASYNC(`${req.params.urlCode}`)
        console.log(cacheData)

        if (cacheData) {
            res.status(302).redirect(JSON.parse(cacheData))
        } else {
            const searchingUrl = await UrlModel.findOne({ urlCode: req.params.urlCode })
            if (searchingUrl) {
                await SET_ASYNC(`${req.params.urlCode}`, JSON.stringify(searchingUrl.longUrl))
                res.status(302).redirect(searchingUrl.longUrl)
            } else {
                return res.status(404).send({status:false,"message":"No Url found with given UrlCode"})
            }
        }
    }
    catch (err) {
        res.status(500).send({ status: false, "message": err.message })
    }
}

module.exports = { ShortenUrl, geturl }