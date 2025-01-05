const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const POST = mongoose.model("POST");
const USER = mongoose.model("user");

router.get("/user/:id", (req, res) => {
    USER.findOne({ _id: req.params.id })
    .select("-password")
    .then(user => {
        res.json( user )
    })
        
})

module.exports = router;