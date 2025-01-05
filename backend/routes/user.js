const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const POST = mongoose.model("POST");
const USER = mongoose.model("user");

router.get("/user/:id", (req, res) => {
    USER.findOne({ _id: req.params.id })
        .select("-password")
        .then(user => {
            POST.find({ postedBy: req.params.id })
                .populate("postedBy", "_id")
                .then((posts) => {
                    res.status(200).json({ user, posts });
                })
                .catch((err) => {
                    res.status(422).json({ error: err });
                });
                
        })
        .catch(err => {
            return res.status(404).json({ error: "User not found" });
        });

})

module.exports = router;