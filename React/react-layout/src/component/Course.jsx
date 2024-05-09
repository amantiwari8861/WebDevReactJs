// import oneplus from './oneplus.jpeg'
const Course = (prop) => {
    // console.log(prop);
    let {productObj}=prop;
    // console.log(productObj);
    // prop(object) -> object 

    return (
        <div className="col">
            <div className="card h-100">
                <div style={{width:"80%",padding:"10px 10%",margin:"auto"}}>
                    <img src={productObj.image} className="card-img-top" alt="..." height={"120px"}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">{productObj.name}</h5>
                    <p className="card-text">price : {productObj.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Course
