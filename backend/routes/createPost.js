const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const requireLogin = require("../middlewares/requireLogin")
const POST = mongoose.model("POST")

router.get("/allposts", requireLogin, (req, res) => {
    POST.find()
        .populate("postedBy", "_id name")
        .populate("comments.postedBy", "_id name")
        .then((posts) => { res.json(posts) })
        .catch((err) => { res.status(400).json({ err }) })
})

router.post("/createPost", requireLogin, (req, res) => {
    const { body, pic } = req.body;
    console.log(pic)
    if (!body || !pic) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    console.log(req.user)
    const post = new POST({
        body,
        photo: pic,
        postedBy: req.user
    })
    post.save().then((result) => {
        return res.json({ post: result })
    }).catch(err => console.log(err))
})

router.get("/myposts", requireLogin, (req, res) => {
    // console.log(req.user)
    POST.find({ postedBy: req.user._id })
        .populate("postedBy", "_id name")
        .populate("comments.postedBy", "_id name")
        // .sort("-createdAt")

        .then(myposts => {
            res.json(myposts)
        })
})

router.put("/like", requireLogin, (req, res) => {
    POST.findByIdAndUpdate(req.body.postId, {
        $push: { likes: req.user._id }
    }, {
        new: true
    })
        .populate("postedBy", "_id name Photo")
        .then((result) => {
            if (!result) {
                return res.status(404).json({ error: "post not found" })
            }
            res.json(result)
        })
        .catch((err) => {
            res.status(422).json({ error: err.message });
        });
})

router.put("/unlike", requireLogin, (req, res) => {
    POST.findByIdAndUpdate(req.body.postId, {
        $pull: { likes: req.user._id }
    }, {
        new: true
    })
        .populate("postedBy", "_id name Photo")
        .then((result) => {
            if (!result) {
                return res.status(404).json({ error: "post not found" })
            }
            res.json(result)
        })
        .catch((err) => {
            res.status(422).json({ error: err.message });
        });
})

router.put("/comment", requireLogin, (req, res) => {
    const comment = {
        comment: req.body.text,
        postedBy: req.user._id
    }
    POST.findByIdAndUpdate(req.body.postId, {
        $push: { comments: comment }
    }, {
        new: true
    })
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name Photo")
        .then((result) => {
            if (!result) {
                return res.status(404).json({ error: "post not found" })
            }
            res.json(result)
        })
        .catch((err) => {
            res.status(422).json({ error: err.message });
        });
})

router.delete("/deletePost/:postId", requireLogin, (req, res) => {
   
    POST.findOne({ _id: req.params.postId })
    // .populate("postedBy", "_id ")
    .then((post) => {
        if (!post ||err) {
            return res.status(422).json({ error:err })
        }
        console.log(post.postedBy._id, req.user._id)
        // if (post.postedBy._id.toString() === req.user._id.toString()) {
        //     post.remove()
        //         .then((result) => {
        //             res.json(result)
        //         })
        //         .catch((err) => {
        //             res.status(422).json({ error: err.message });
        //         });
        // }
        console.log(post)
    })
    .catch((err) => {
        // res.status(422).json({ error: err.message });
    });
})

module.exports = router