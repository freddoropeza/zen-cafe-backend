const express = require('express');
const router = express.Router();
const Product = require('../models/products');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'something went wrong'});
    }
});

router.get('/seed', async (req, res) => {
    try {
        // delete all existing skills
        await Product.deleteMany({});

        // create some skill data
        const products = await Product.create([
            {title: 'Black Milk Tea', img: '5', description: 'best tea', type: 'drink'},
            {title: 'Oolong Milk Tea', img: '5', description: 'best tea', type: 'drink'},
            {title: 'Green Tea Snow', img: '5', description: 'best snow', type: 'snow'},
            {title: 'Black Sesame Snow', img: '5', description: 'best snow', type: 'snow'},
        ]);
        res.json(products);
    } catch (error) {
        console.log(error);
        res.json({error: 'something went wrong'});
    }
});

module.exports = router;