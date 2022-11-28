const express = require("express");
const router = express.Router();
const Fishery = require("../models/Fishery.model")
const User = require("../models/User.model")
const Fish = require("../models/Fish.model")

//POST create fishery and add it to user

router.post("/fisheries", async (req, res, next) => {
    try {
        const {
            //number,
            date,
            location,
            overallWeight,
            fishingType,
            fishes,
            userId,
        } = req.body
        let {image} = req.body

        if(!image) {
            image = "https://res.cloudinary.com/dirrmfung/image/upload/v1669478014/defaultFishery_v3hol3.jpg"
        }

        //if seeding 1st fishery, comment the below 3 lines and uncomment above number
        const allFisheries = await Fishery.find();
        const lastFishery = allFisheries[allFisheries.length-1]
        const number = lastFishery.number +1

        const createdFishery = await Fishery.create(
            {
                number,
                image,
                date,
                location,
                overallWeight,
                fishingType,
                fishes,
                userId,
            });

        await User.findByIdAndUpdate(userId, {$push:{fisheries: createdFishery._id}})
        
        fishes.forEach(async fish =>{
            await Fish.findOneAndUpdate({commonName: fish.species}, {$inc: {totalAmountCatched: 1}})
        })

        res.status(201).json(createdFishery)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

//GET all fisheries

router.get("/fisheries", async (req, res, next) => {
    try {
        const allFisheries = await Fishery.find()/* .populate({
            path: "fishes",
            populate: {
                path: "species",
                model: "Fish"
            }
        }) */

        res.status(201).json(allFisheries)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

//GET all user fisheries

router.get("/userfisheries", async (req, res, next) => {
    try {
        const {userId} = req.body
        const userFisheries = await Fishery.find({userId: userId}).populate({
            path: "fishes",
            populate: {
                path: "species",
                model: "Fish"
            }
        })

        res.status(201).json(userFisheries)
    } catch (error) {
        console.log(error)
        next(error)
    }

})

//GET one fishery

router.get("/fisheries/:id", async (req, res, next) => {
    try {
        const {id} = req.params
        const oneFishery = await Fishery.findById(id)/* .populate({
            path: "fishes",
            populate: {
                path: "species",
                model: "Fish"
            }
        }) */
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

router.delete("/fisheries/:id/:userId", async (req, res, next) =>{
    try {
      const {id, userId} = req.params
      await User.findByIdAndUpdate(userId, {$pull: {fisheries: id}})
      await Fishery.findByIdAndRemove(id)
      res.status(200).json({ message: `The Fishery was deleted successfully` });
    } catch (error) {
      next(error)
    }
  })

module.exports = router;