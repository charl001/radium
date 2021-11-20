const mid1= function(req, res,next)
{
    console.log("Hi, I am middleware 1")
    next()
}

module.exports.mid1=mid1