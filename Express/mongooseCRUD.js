const Product = require('./productModel');

async function createProduct(productData) {
    try {
        const product = new Product(productData);
        await product.save();
        console.log('Product created:', product);
        return product;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
}

async function getAllProducts() {
    try {
        const products = await Product.find({});
        console.log('All products:', products);
        return products;
    } catch (error) {
        console.error('Error getting all products:', error);
        throw error;
    }
}

async function updateProduct(productId, updatedData) {
    try {
        const product = await Product.findByIdAndUpdate(productId, updatedData, { new: true });
        console.log('Product updated:', product);
        return product;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
}

async function deleteProduct(productId) {
    try {
        const product = await Product.findByIdAndDelete(productId);
        console.log('Product deleted:', product);
        return product;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
};
