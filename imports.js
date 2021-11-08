const obj = require('lodash')

console.log(obj.chunk(["January","February","March","April","May","June","July",
"August","September","October","November","December"],3))

console.log(obj.tail([1,3,5,7,9,11,13,15,17,19]))

console.log(obj.union([1,2,3],[2,4],[1,3,4,5],[1,2,7,8],[1,3,4,5,9]))

console.log(obj.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]))

