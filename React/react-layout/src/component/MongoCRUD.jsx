import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MongoCRUD = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: 0 });
    const [editProductId, setEditProductId] = useState(null);
    const [editProductData, setEditProductData] = useState({ name: '', price: 0 });

    // Fetch all products from the API when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleAddProduct = async () => {
        try {
            const response = await axios.post('/api/products', newProduct);
            setProducts([...products, response.data]);
            setNewProduct({ name: '', price: 0 });
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`/api/products/${productId}`);
            setProducts(products.filter(product => product._id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleEditProduct = async () => {
        try {
            await axios.put(`/api/products/${editProductId}`, editProductData);
            const updatedProducts = products.map(product =>
                product._id === editProductId ? { ...product, ...editProductData } : product
            );
            setProducts(updatedProducts);
            setEditProductId(null);
            setEditProductData({ name: '', price: 0 });
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                        <button onClick={() => { setEditProductId(product._id); setEditProductData({ name: product.name, price: product.price }); }}>Edit</button>
                    </li>
                ))}
            </ul>
            {editProductId && (
                <div>
                    <h2>Edit Product</h2>
                    <input type="text" value={editProductData.name} onChange={e => setEditProductData({ ...editProductData, name: e.target.value })} placeholder="Product name" />
                    <input type="number" value={editProductData.price} onChange={e => setEditProductData({ ...editProductData, price: e.target.value })} placeholder="Price" />
                    <button onClick={handleEditProduct}>Update Product</button>
                </div>
            )}
            <h2>Add New Product</h2>
            <input type="text" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} placeholder="Product name" />
            <input type="number" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} placeholder="Price" />
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    );
};

export default MongoCRUD;
