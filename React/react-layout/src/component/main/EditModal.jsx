import { useEffect, useRef } from "react";

const EditModal = ({method,product}) => {
    let modelref=useRef(null);
    useEffect(()=>{
        console.log(modelref);
        console.log(modelref.current);
        // modelref.current.modal("show")
    },[])

    return (
        <div className="modal fade" ref={modelref} id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            {/* {$("#editModal").modal("show")} */}
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {console.log(product)}
                        {console.log(method)}
                        {/* {edit(product)} */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditModal;