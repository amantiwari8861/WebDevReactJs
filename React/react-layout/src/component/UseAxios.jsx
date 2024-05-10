import axios from 'axios';
import { useEffect, useState } from 'react'

const URL = "http://localhost:5000/products";
const UseAxios = () => {

    const [productStock, setStock] = useState({});
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            let response = await axios.get(URL); //let 1 minute
            let data = response.data;
            console.log(data); // will run at 2 sec.  ???
            setStock(data)
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div>

        </div>
    )
}

export default UseAxios
