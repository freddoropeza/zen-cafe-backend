const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const snowSchema = new Schema({
    title: String,
    img: String,
    description: String,
}, { timestamps: true });

module.exports = mongoose.model('Snow', snowSchema);