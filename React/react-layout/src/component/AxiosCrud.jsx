import { useEffect, useState } from "react"
import Course from './Course'
import axios from "axios";

const ShowProductsWithUseEffect = () => {
    let [productStock, setProductStock] = useState([{}]);
    let [total, setTotal] = useState(0);
    let [product, setProduct] = useState({});
    const URL = "http://localhost:5000/products";

    useEffect(() => {
        axios.get(URL)
        .then(res => 
            {
                setProductStock(res.data);
                setTotal(res.data.length)
            })
        .catch(error =>console.log(error.message))
    },[productStock]);


    const updateProduct = (e) => {
        const { name, value } = e.target;
        console.log(name + ":" + value);
        setProduct({
            ...product,
            [name]: value
        })
    }
    const addProduct = (e) => {
        e.preventDefault()
        setProductStock([
            ...productStock, product
        ])
    }

    return (
        <div className="container">
            <h1 className="text-center">we have {total} products</h1>
            <div className="row row-cols-1 row-cols-md-6 g-4 p-3">
                {productStock.map((p) => <Course productObj={p} key={p.price} />)}
            </div>
            <div className="d-flex justify-content-center">
                <form onSubmit={addProduct}>
                    image Link: <input type="text" name="image" onChange={updateProduct} /> <br />
                    Product Name: <input type="text" name="name" onChange={updateProduct} /> <br />
                    Price: <input type="number" name="price" onChange={updateProduct} /> <br />
                    <button type="submit" >Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default ShowProductsWithUseEffect
