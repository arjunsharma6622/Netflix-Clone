const router = require("express").Router()
const User = require("../models/User")
const cryptoJs = require("crypto-js")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")


dotenv.config()


//REGISTER
router.post("/register", async (req, res) => {
    const hashedPassword = cryptoJs.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    const newUser = new User({
        username : req.body.username ? req.body.username : "user",
        email : req.body.email,
        password : hashedPassword
    })

    try{
        const user = await newUser.save()
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json(err)
    }

})



//LOGIN
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({email : req.body.email})
        if(!user) {
            res.status(401).json("Wrong password or username")
            return
        }

        //Decrypting and getting the original password out of the hashed password for checking
        const bytes = cryptoJs.AES.decrypt(user.password, process.env.SECRET_KEY)
        const originalPassword = bytes.toString(cryptoJs.enc.Utf8)

        if(originalPassword !== req.body.password) {
            res.status(401).json("Wrong password or username")
            return
        }

        //creating a jwt TOKEN
        const accessToken = jwt.sign(
            {id : user._id, isAdmin : user.isAdmin},
            process.env.SECRET_KEY,
            {expiresIn : "5d"}
        )


        //sending everthing except the password
        const {password, ...info} = user._doc

        res.status(200).json({...info, accessToken})
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports = router
