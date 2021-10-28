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
            {title: 'Black Milk Tea', img: 'https://i.ibb.co/YR4j7yb/photo-1558857563-b371033873b8-ixlib-rb-1-2.jpg', description: 'best tea', type: 'drink'},
            {title: 'Oolong Milk Tea', img: 'https://i.ibb.co/jwhCkVF/image.png', description: 'best tea', type: 'drink'},
            {title: 'Green Tea Snow', img: 'https://i.ibb.co/n0src76/green-tea-matcha-ice-cream-600w-406349992.jpg', description: 'best snow', type: 'snow'},
            {title: 'Black Sesame Snow', img: 'https://i.ibb.co/qDfjHHT/black-sesame-charcoal-ice-cream-600w-1042082014.jpg', description: 'best snow', type: 'snow'},
        ]);
        res.json(products);
    } catch (error) {
        console.log(error);
        res.json({error: 'something went wrong'});
    }
});

module.exports = router;