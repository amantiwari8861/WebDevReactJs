import products from './Products.json'

const Container2 = () => {
  return (
    <div id='mycontainer' style={{display:"flex",justifyContent:"space-around"}}>
      {/* {console.log(products)} */}

       {products.map(product=>{
         return <Product productProp={product} key={product.name} />
       })}

    </div>
  )
}
export default Container2

const Product = (props) => {
    let {productProp}=props;

    return (
        <>
        {console.log(props)}
        {console.log(productProp)}
        <div >
            <img src={productProp.image} alt="" height={"200px"} width={"200px"} />
            <div className="right">
                <div className="box1">
                    {productProp.name}
                </div>
                <div className="box2">
                    {productProp.price}
                </div>
            </div>
        </div>
        </>
    )
}