const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

const productSchema = new mongoose.Schema({
    id: String,
    image: String,
    name: String,
    price: Number
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;