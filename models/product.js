const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: String,
    img: String,
    description: String,
    price: Number,
    type: String, 
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);