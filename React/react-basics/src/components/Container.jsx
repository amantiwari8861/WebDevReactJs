import { useState } from "react"

const Container = () => {

    let [products,setProducts]=useState([]);

    let initProducts=()=>{
        let p=[
            {
                "image":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/p/q/-original-imagy5wfcgybpq5x.jpeg?q=70&crop=false",
                "name":"OnePlus 12R",
                "price":47000
            },
            {
                "image":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/p/q/-original-imagy5wfcgybpq5x.jpeg?q=70&crop=false",
                "name":"OnePlus 45",
                "price":47000
            },
            {
                "image":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/p/q/-original-imagy5wfcgybpq5x.jpeg?q=70&crop=false",
                "name":"OnePlus 11",
                "price":223332
            },
            {
                "image":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/p/q/-original-imagy5wfcgybpq5x.jpeg?q=70&crop=false",
                "name":"OnePlus 845",
                "price":78328732
            },
            {
                "image":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/p/q/-original-imagy5wfcgybpq5x.jpeg?q=70&crop=false",
                "name":"OnePlus jhchdb",
                "price":65758
            },
            {
                "image":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/p/q/-original-imagy5wfcgybpq5x.jpeg?q=70&crop=false",
                "name":"OnePlus 12T",
                "price":47000
            }
        ];
        setProducts(p);
    }
    setTimeout(() => {
        initProducts()
    }, 2000);
  return (
    <>   
        {/* <Product/>
        <Product/>
        <Product/>
        <Product/> */}
        {/* {JSON.stringify(products)} */}
        {/* {console.log(products)} */}
        {products.map(product=>{
            // console.log(product);
            return (
            <div key={product.name}>
                <img src={product.image} alt="" />
                <h1>{product.name}</h1>
                <h1>{product.price}</h1>
            </div>
            )
        })}
    </>
  )
}

export default Container
