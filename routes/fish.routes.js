const express = require("express");
const router = express.Router();
const Fish = require("../models/Fish.model");
const User = require("../models/User.model")
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

//POST seed fishes

router.post("/fishes", async (req, res, next) => {
  try {
    const createdFishes = await Fish.create(req.body);
    res.status(201).json(createdFishes)

  } catch (error) {
    console.log(error)
    next(error)
  }
})

//POST create a users best fish/catch

router.post("/userfishes", isAuthenticated, async (req, res, next) => {
  try {
    const {userId} = req.body
    const createdFish = await Fish.create(req.body)
    await User.findByIdAndUpdate(userId, {$push:{fishes: createdFish._id}})
    res.status(201).json(createdFish)

  } catch (error) {
    console.log(error)
    next(error)
  }
})

//GET all (userCreated=false) fishes

router.get("/fishes", async (req, res, next) => {
  try {
    const allFishes = await Fish.find({userId: null}).sort({commonName: 1})
    res.status(200).json(allFishes)

  } catch (error) {
    console.log(error)
    next(error)
  }
})

//GET all (userCreated=true) fishes

router.get("/userfishes", isAuthenticated, async (req, res, next) => {
  try {
    const allFishes = await Fish.find( {userId: {$ne: null} })
    res.status(200).json(allFishes)

  } catch (error) {
    console.log(error)
    next(error)
  }
})

//GET one fish

router.get("/fishes/:id", isAuthenticated, async (req, res, next) => {
  try {
    const {id} = req.params
    const oneFish = await Fish.findById(id)
    res.status(200).json(oneFish)

  } catch (error) {
    console.log(error)
    next(error)
  }
})

//PUT edit fish

router.put("/fishes/:id", isAuthenticated, async (req, res, next) => {
  try {
    const {id} = req.params
    const updatedFish = await Fish.findByIdAndUpdate(id, req.body, {new: true})
    res.status(200).json(updatedFish)

  } catch (error) {
    console.log(error)
    next(error)
  }
})

//DELETE fish

router.delete("/fishes/:id/:userId", isAuthenticated, async (req, res, next) =>{
  try {
    const {id, userId} = req.params
    await User.findByIdAndUpdate(userId, {$pull: {fishes: id}})
    await Fish.findByIdAndRemove(id)
    res.status(200).json({ message: `The Fish was deleted successfully` });

  } catch (error) {
    next(error)
  }
})


module.exports = router;