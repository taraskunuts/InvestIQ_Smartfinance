import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Modal.css"
const Modal = () => {
    const navigate = useNavigate();
    const handleClose = () => navigate(-1);
    const closeModal = () => navigate("/");

    return (
        <div className="modal-backdrop" onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
                <button className="modal-close-x" onClick={handleClose}>&times;</button>
                
                <p className="modal-text">Ви впевнені?</p>
                
                <div className="modal-buttons-group">
                    <button className="modal-btn btn-yes" onClick={closeModal}>ТАК</button>
                    <button className="modal-btn btn-no" onClick={handleClose}>НІ</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
