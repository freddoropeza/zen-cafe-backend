const express = require('express');
const router = express.Router();
const Product = require('../models/product');

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
            {title: 'Black Milk Tea', img: 'https://i.ibb.co/YR4j7yb/photo-1558857563-b371033873b8-ixlib-rb-1-2.jpg', description: 'description...', price: '5', type: 'drink'},
            {title: 'Oolong Milk Tea', img: 'https://i.ibb.co/jwhCkVF/image.png', description: 'description...', price: '5', type: 'drink'},
            {title: 'Jasmine Milk Tea', img: 'https://i.ibb.co/513YDy9/pexels-photo-6412836.jpg', description: 'description...', price: '5', type: 'drink'},
            {title: 'Earl Grey Milk Tea', img: 'https://i.ibb.co/6Ntx9FH/pexels-photo-9092457.jpg', description: 'description...', price: '5', type: 'drink'},
            {title: 'Thai Iced Tea', img: 'https://i.ibb.co/FXDdN9v/pexels-photo-6413649.jpg', description: 'description...', price: '5', type: 'drink'},
            {title: 'Matcha Latte', img: 'https://i.ibb.co/jkXTMrL/image.png', description: 'description...', price: '5', type: 'drink'},
            {title: 'Green Tea', img: 'https://i.ibb.co/n0src76/green-tea-matcha-ice-cream-600w-406349992.jpg', description: 'description...', price: '6', type: 'snow'},
            {title: 'Black Sesame', img: 'https://i.ibb.co/qDfjHHT/black-sesame-charcoal-ice-cream-600w-1042082014.jpg', description: 'description...', price: '6', type: 'snow'},
            {title: 'Coconut', img: 'https://i.ibb.co/HnYvkr8/Processed-with-VSCO-with-c6-preset.jpg', description: 'description...', price: '6', type: 'snow'},
            {title: 'Red Bean', img: 'https://i.ibb.co/VwHcqgR/pexels-photo-1309583.jpg', description: 'description...', price: '6', type: 'snow'},
            {title: 'Honeydew', img: 'https://i.ibb.co/rKB93kQ/pexels-photo-4540356.jpg', description: 'description...', price: '6', type: 'snow'},
            {title: 'Passion Fruit', img: 'https://i.ibb.co/SnjdrYp/pexels-photo-5383855.jpg', description: 'description...', price: '6', type: 'snow'},
        ]);
        res.json(products);
    } catch (error) {
        console.log(error);
        res.json({error: 'something went wrong'});
    }
});

module.exports = router;