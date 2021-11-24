const checkHeader=function(req, res, next)
{
    let HeaderPresent=req.headers['isfreeapp'];
    let isAppFree
    if(!HeaderPresent)
    {
        res.send({Message:"Header is not present"})
    }

    if(HeaderPresent==='false')
    {
        isAppFree=false
    }else{
        isAppFree=true
    }
    req.isFreeAppUser=isAppFree
    next()
         
}

module.exports.checkHeader=checkHeader