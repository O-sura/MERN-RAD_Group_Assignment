const router = require('express').Router();
const Comment = require('../models/Comment');

//Add new Comment
router.post("/", async (req,res) => {
    try {
        const comment = new Comment(req.body);
        let savedComment = await comment.save();
        res.status(200).json(savedComment);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Update Comment
router.put("/:id", async (req,res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true});
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json(error)
    }
})

//Delete Comment
router.delete("/:id", async (req,res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        await comment.delete();
        res.status(200).json("The comment has been deleted");
    } catch (error) {
        res.status(500).json(error)
    }
})


//Find a specific Comment
router.get("/:id", async (req,res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json(error)
    }
})


//Get all Comment
router.get("/", async (req,res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router