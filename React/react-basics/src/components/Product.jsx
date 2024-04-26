import pro from './phone.jpeg'
import './product.css'
const Product = () => {
    let productName = "One Plus 12";
    let price = 65000;
    return (
        <div >
            <img src={pro} alt="" height={"200px"} width={"200px"} />
            <div className="right">
                <div className="box1">
                    {productName}
                </div>
                <div className="box2">
                    {price}
                </div>
            </div>
        </div>
    )
}

export default Product

