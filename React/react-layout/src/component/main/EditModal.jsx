import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";

const EditModal = ({ method, product }) => {
    let modalRef = useRef(null);
    const [editedProduct, setEditedProduct] = useState({ ...product });

    useEffect(() => {
        const modal = new Modal(modalRef.current);
        modal.show();
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({
            ...editedProduct,
            [name]: value,
        });
    };

    const handleSave = () => {
        method(editedProduct);
    };

    return (
        <div className="modal fade" ref={modalRef} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Product</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="image">Image Link:</label>
                            <input type="text" className="form-control" id="image" name="image" value={editedProduct.image} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Product Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={editedProduct.name} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="price">Price</label>
                            <input type="number" className="form-control" id="price" name="price" value={editedProduct.price} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal;
