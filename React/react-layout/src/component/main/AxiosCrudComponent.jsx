import React, { useEffect, useState } from 'react'
import Course from '../Course'
import axios from 'axios';
import EditModal from './EditModal';

const URL = "http://localhost:5000/products";
const AxiosCrudComponent = () => {
    let [productStock, setProductStock] = useState([{}]);
    let [total, setTotal] = useState(0);
    let [product, setProduct] = useState({});
    let [showModal,setModalvisibility]=useState(false);
    let [temp,setTemp]=useState({});
    const setVisibility=(pr)=>{
        setTemp(pr);
        // console.log(pr);
        // console.log(showModal);
        setModalvisibility(true);
        // console.log(showModal);
    }

    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async () => {
        try {
            const response = await axios.get(URL);
            setProductStock(response.data);
            setTotal(response.data.length)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const addProduct = async (e) => {
        // e.preventDefault()
        try {
            await axios.post(URL,product);
            fetchData();
            setProduct([{}]);
          } catch (error) {
            console.error('Error creating data:', error);
          }
        // setProductStock([
        //     ...productStock, product
        // ]);
    }
    const editProduct=async (product)=>{
        try {
            await axios.put(URL+`/${product.id}`, product);
            fetchData();
          } catch (error) {
            console.error('Error updating data:', error);
        }
    }
    const deleteProduct=async (id)=>{
        try {
            await axios.delete(URL+`/${id}`);
            fetchData();
          } catch (error) {
            console.error('Error deleting data:', error);
          }
    }
    const updateProField = (e) => {
        const { name, value } = e.target;
        // console.log(name+":"+value);
        setProduct({
            ...product,
            [name]: value})
            // console.log(product);
    }
    return (
        <div className="container">
            <h1 className="text-center">we have {total} products</h1>
            <div className="row row-cols-1 row-cols-md-6 g-4 p-3">
                {total>0 ?productStock.map((p,index) => <Course productObj={p} key={index} del={deleteProduct} mvis={setVisibility}/>):""}
            </div>
            {total===0 ? <h1>no products to display check server</h1> :""}
            <div className="d-flex justify-content-center">
                <form onSubmit={addProduct}>
                    Id: <input type="text" name="id" onChange={updateProField}  required /> <br />
                    image Link: <input type="text" name="image" onChange={updateProField}  required/> <br />
                    Product Name: <input type="text" name="name" onChange={updateProField} required /> <br />
                    Price: <input type="number" name="price" onChange={updateProField} required /> <br />
                    <button type="reset" className='btn btn-danger' >reset</button>
                    <button type="submit" className='btn btn-primary' >Add Product</button>
                </form>
            </div>
            {/* {showModal && temp ? "modal khulega":"nahi khulega"} */}
            {showModal && temp ? <EditModal method={editProduct} product={temp}/>:""}
        </div>
    )
}
export default AxiosCrudComponent

//run json-server first using json-server --watch data.json --port=5000