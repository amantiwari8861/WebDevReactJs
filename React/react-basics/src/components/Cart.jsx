import { useState } from "react"

const Cart = () => {

    // let [product,setProduct]=useState({name:"Aman"});//hook
    let [quantity,setQuantity]=useState(1);//hook
    let [price,setPrice]=useState(1000);//hook
    //state=fields=data=variables=attributes
    let inc=()=>{
        setQuantity(quantity+1)
    }
    let ch=(event)=>{
        // setPrice(5000);
        // console.log(event);
        console.log(event.target.value);
        setPrice(event.target.value)
    }
  return (
    <>
    <h1>Quantity {quantity}</h1>
    <h1>Price {price}</h1>
    <h1>Total {price*quantity}</h1>
    
    {/* {console.log(quantity)}
    {console.log(setQuantity)} */}
    <input type="text" onChange={ch} />
    <button onClick={inc}>+</button>
    <button onClick={()=>setPrice(2000)}>set price 2000</button>


    {/* {console.log(product)}
    {console.log(setProduct)} */}
    </>
  )
}

export default Cart
