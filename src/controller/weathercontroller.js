const axios = require("axios")

const getWeather = async function (req, res) {
    try {

        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        arr1obj = []
        for (let i = 0; i < cities.length; i++) {

            let obj = { city: cities[i] }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=f1a93c7f2832ca822dc0920253b1614a`)
            obj.temp = resp.data.main.temp

            arr1obj.push(obj)
        }

        let sorted = arr1obj.sort(function (a, b) { return a.temp - b.temp })
        res.status(200).send({ status: true, data: sorted })
    }
    catch (error) {
        res.status(500).send({ status: false, msg: "server error occured" })
    }
}



module.exports.getWeather = getWeather