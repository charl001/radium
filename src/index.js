const express = require('express');
const moment=require('moment');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const GlobalMid= function(req, res, next)
{
	let time=moment();
	console.log(time);
	console.log(req.ip)
	console.log(req.originalUrl)
	next()
}
app.use(GlobalMid)

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/CharulDagar-database?retryWrites=true&w=majority ", {useNewUrlParser: true})
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});