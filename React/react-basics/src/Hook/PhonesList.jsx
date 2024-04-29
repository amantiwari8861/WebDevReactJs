import products from "../components/Products.json"
const PhonesList = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",border:"5px solid black"}}>
      {products.map(product=>{
        return (
            <div key={product.name} style={{border:"1px solid red"}}>
            <img src={product.image} alt="" height={"100px"} width={"100px"}/>
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
        </div>)
      })}
    </div>
  )
}

export default PhonesList
