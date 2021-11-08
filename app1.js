const obj=require('./logger1')
const helpobj=require('./util/helper')
const formatobj=require('../validator/formatter')
const objimport=require('underscore')
const obj1 = require('lodash')

function mainfunction()
{
    console.log("Main file in which we will call other function")
}
obj.printname('Charul Dagar')
obj.welcomemessage()
console.log("The value of url is =>" + obj.printurl)
helpobj.Date()
helpobj.Month()
helpobj.Info()
formatobj.trimmer(' Charul Dagar   ')
formatobj.lower('CHARUL dAGAR')
formatobj.upper('charul dagar')
console.log(objimport.first["Charul","Dagar","KJD"]);

console.log(obj1.chunk(["January","February","March","April","May","June","July",
"August","September","October","November","December"],3))

console.log(obj1.tail([1,3,5,7,9,11,13,15,17,19]))

console.log(obj1.union([1,2,3],[2,4],[1,3,4,5],[1,2,7,8],[1,3,4,5,9]))

console.log(obj1.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]))


