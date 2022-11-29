const express = require("express");
const router = express.Router();
const Trash = require("../models/Trash.model");

//POST report trash

router.post("/trash", async (req, res, next) => {
    try {
        const createdTrash = await Trash.create(req.body);
        res.status(201).json(createdTrash)
        
    } catch (error) {
        console.log(error)
        next(error)
    }
})

module.exports = router;