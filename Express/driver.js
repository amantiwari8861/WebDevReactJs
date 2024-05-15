// Import Mongoose
const mongoose = require('mongoose');

// Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
mongoose.connect('mongodb+srv://root:1234@cluster0.fxjosz7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

// Define schema for the document
const productSchema = new mongoose.Schema({
    id:Number,
    name: String,
    price: Number,
    description: String
});

// Create Product model
const Product = mongoose.model('Product', productSchema);

// Function to create a new product
async function createProduct() {
    try {
        const newProduct = new Product({
            id:1,
            name: 'Laptop',
            price: 1200,
            description: 'A high-performance laptop'
        });
        const savedProduct = await newProduct.save();
        console.log('Product created:', savedProduct);
    } catch (error) {
        console.error('Error creating product:', error);
    }
}

// Function to read all products
async function readProducts() {
    try {
        const products = await Product.find({});
        console.log('All products:', products);
    } catch (error) {
        console.error('Error reading products:', error);
    }
}

// Function to update a product
async function updateProduct(id, newData) {
    try {
        // const updatedProduct = await Product.findByIdAndUpdate(id, newData, { new: true });
        const updatedProduct = await Product.findOneAndUpdate({id:1})
        console.log('Product updated:', updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
    }
}

// Function to delete a product
async function deleteProduct(id) {
    try {
        const deletedProduct = await Product.findOneAndDelete({id:1})
        console.log('Product deleted:', deletedProduct);
    } catch (error) {
        console.error('Error deleting product:', error);
    }
}

// Example usage
async function main() {
    await createProduct();
    await readProducts();
    await updateProduct(1, { price: 1500 });
    await deleteProduct(1);
}

main();
