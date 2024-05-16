// import oneplus from './oneplus.jpeg'
const Course = (prop) => {
    let { productObj,del,mvis } = prop;
    return (
        <div className="col">
            <div className="card h-100">
                <div style={{ width: "80%", padding: "10px 10%", margin: "auto" }}>
                    <img src={productObj.image} className="card-img-top" alt="..." height={"120px"} />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">{productObj.prid}.{productObj.name}</h5>
                    <p className="card-text">price : {productObj.price}</p>
                    <div className="d-flex justify-content-evenly flex-wrap">
                        <button className="btn btn-primary" onClick={()=>mvis(productObj)}>edit</button>
                        <button className="btn btn-danger" onClick={() =>del(productObj.prid)}>delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Course