const express = require("express");
const router = express.Router();
const Fishery = require("../models/Fishery.model")
const User = require("../models/User.model")

//POST create fishery and add it to user

router.post("/fisheries", async (req, res, next) => {
    try {
        const {
            number,
            image,
            date,
            location,
            overallWeight,
            fishes,
            userId,//delete this
        } = req.body

        const createdFishery = await Fishery.create(
            {
                number,
                image,
                date,
                location,
                overallWeight,
                fishes,
                userId,
            });
            
        await User.findByIdAndUpdate(userId, {$push:{fisheries: createdFishery._id}})
        res.status(201).json(createdFishery)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

//GET all fisheries

router.get("/fisheries", async (req, res, next) => {
    try {
        const allFisheries = await Fishery.find().populate({
            path: "fishes",
            populate: {
                path: "species",
                model: "Fish"
            }
        })

        res.status(201).json(allFisheries)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

//GET all user fisheries

router.get("/userfisheries", async (req, res, next) => {

})

//GET one fishery

router.get("/fisheries/:id", async (req, res, next) => {
    try {
        const {id} = req.params
        const oneFishery = await Fishery.findById(id).populate({
            path: "fishes",
            populate: {
                path: "species",
                model: "Fish"
            }
        })
        res.status(201).json(oneFishery)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

//PUT edit fishery

router.put("/fisheries/:id", async (req, res, next) => {
    try {
        const {id} = req.params
        const updatedFishery = await Fishery.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json(updatedFishery);
    } catch (error) {
        console.log(error)
        next(error)
    }
})

//DELETE fishery

router.delete("/fisheries/:id", async (req, res, next) =>{
    try {
      const {id} = req.params
      await Fishery.findByIdAndRemove(id)
      res.status(200).json({ message: `The Fishery was deleted successfully` });
    } catch (error) {
      next(error)
    }
  })

module.exports = router;