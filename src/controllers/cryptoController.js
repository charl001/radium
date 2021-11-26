const axios = require('axios')

const CryptoModel = require("../models/cryptoModel")

const getCrypto = async function (req, res) {
    try{
        let options = {
            method: "get",
            url: "https://api.coincap.io/v2/assets"
        }

        let response = await axios(options)

        let Crypto = response.data.data

        let arr1 = []

        for (let i = 0; i < Crypto.length; i++) {

            let SCrypto = {

                symbol: Crypto[i].symbol,
                name: Crypto[i].name,
                marketCapUsd: Crypto[i].marketCapUsd,
                priceUsd: Crypto[i].priceUsd

            }
            arr1.push(SCrypto)
            await CryptoModel.create(SCrypto)
        }

        let change24Hours = Crypto.sort(function (a, b) { return a.changePercent24Hr - b.changePercent24Hr })

        res.status(200).send({ Successfully_fetched_data_of_top_100_crypto: change24Hours })


    } 
    catch (err) {
        res.status(500).send({ err: "Some problem occured." })
    }
}

module.exports.getCrypto = getCrypto