const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    author: {
        type: String,
        required: true,
        unique: true,
        default: "Unknown"
    },
    content: {
        type: String,
        required: true,
    },
},{timestamps: true})

module.exports = mongoose.model("Comment", CommentSchema)