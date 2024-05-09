import { useEffect, useState } from "react"
import Course from './Course'
const ShowProductsWithUseEffect = () => {
    let [productStock, setproductStock] = useState([{
        "image": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/p/q/-original-imagy5wfcgybpq5x.jpeg?q=70&crop=false",
        "name": "Realme 11",
        "price": 223332
    }]);
    let [total, setTotal] = useState(0);
    let [product, setProduct] = useState({});
    // setTotal(productStock.length);

    useEffect(() => {
        setTotal(productStock.length);
        console.log(productStock);
    }, [productStock]);
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
        setproductStock([
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
