const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: String,
    image: String,
    name: String,
    price: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;