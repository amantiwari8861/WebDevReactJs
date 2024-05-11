// import oneplus from './oneplus.jpeg'
import { useState } from "react";
import EditModal from './main/EditModal'

const Course = (prop) => {
    // console.log(prop);
    let { productObj, edit, del,mvis } = prop;
   
    return (
        <div className="col">
            {/* <EditModal method={edit} product={productObj}/> */}
            <div className="card h-100">
                <div style={{ width: "80%", padding: "10px 10%", margin: "auto" }}>
                    <img src={productObj.image} className="card-img-top" alt="..." height={"120px"} />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">{productObj.id}.{productObj.name}</h5>
                    <p className="card-text">price : {productObj.price}</p>
                    <div className="d-flex justify-content-evenly flex-wrap">
                        <button className="btn btn-primary" onClick={()=>mvis(productObj)}>edit</button>
                        <button className="btn btn-danger" onClick={() => del(productObj.id)}>delete</button>
                    </div>
                </div>
            </div>
            {/* {showModal ? <EditModal method={edit} product={productObj}/>:""} */}
        </div>
    )
}

export default Course
