const router = require('express').Router();
const Product = require('../models/Product');

//Add new product
router.post("/", async (req,res) => {
    try {
        const product = new Product(req.body);
        let savedProduct = await product.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Update product details
router.put("/:id", async (req,res) => {
    try {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },{new:true});
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(500).json(error);
        }    
    } catch (error) {
        res.status(500).json(error)
    }
})

//Delete product
router.delete("/:id", async (req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        try {
            await product.delete();
            res.status(200).json("The product has been deleted");
        } catch (error) {
            res.status(500).json(error);
        }       
    } catch (error) {
        res.status(500).json(error)
    }
})


//Find a specific product
router.get("/:id", async (req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
})


//Get all product
router.get("/", async (req,res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router