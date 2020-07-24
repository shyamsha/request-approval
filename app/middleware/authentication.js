const {User}=require('../models/User')
const authenticateUser=function(req,res,next)
{
    const token=req.header('x-auth')
    if(token)
    {
        User.findByToken(token)
        .then(function(user){
            if(user)
            {
            req.user=user
            req.token=token
            next()
            }
            else{
                res.send({notice:'token is not thre '})
            }
        })
        .catch(function(err){
            res.send(err)
        })
    }
    else{
        res.send('failure')
    }
}
module.exports={
    authenticateUser
}