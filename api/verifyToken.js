const jwt = require("jsonwebtoken")

//basically this verify goes between the route and the call back function so first by going to route this verify will execute and after then the next if called that is the call back given in that route || IT ACTS AS A MIDDLEWARE
const verify = (req, res, next) => {
    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if(err){
                res.status(403).json("Token is not valid!")
            }
            req.user = user
            next()
        })
    }
    else{
        return res.status(401).json("You are not authenticated")
    }
}


module.exports = verify