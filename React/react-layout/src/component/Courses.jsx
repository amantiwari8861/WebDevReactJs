import Course from "./Course"
import products from './data.json'
const Courses = () => {
    return (
            <div className="row row-cols-1 row-cols-md-6 g-4 p-3">
                {/* <Course/>
                    <Course/>
                    <Course/>
                    <Course/> 
                */
                }
                {/* {console.log(products)} */}
                {
                    products.map(product=>{
                        return <Course productObj={product} key={product.price}/>
                    })
                }

            </div>
    )
}

export default Courses
