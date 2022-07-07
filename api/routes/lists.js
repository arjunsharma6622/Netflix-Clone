const router = require("express").Router()
const List = require("../models/List")
const verify = require("../verifyToken")


//CREATE

router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body)
        try{
            const savedList = await newList.save()
            res.status(201).json(savedList)
        }catch(err){
            res.status(500).json(err)
        }

    }
    else {
        res.status(403).json("You are not allowed, You are not an Admin")
    }


})


//DELETE

router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body)
        try{
            await List.findByIdAndDelete(req.params.id)
            res.status(201).json("The movie has been deleted")
        }catch(err){
            res.status(500).json(err)
        }

    }
    else {
        res.status(403).json("You are not allowed, You are not an Admin")
    }


})


module.exports = router