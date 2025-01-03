const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        require: true
    },
    postedBy: {
        type: ObjectId,
        ref: "user"
    }

})

mongoose.model("POST",postSchema)