import React from 'react';
import { useDispatch } from 'react-redux'; 
import { useNavigate, useParams } from "react-router-dom"; 
import { deleteTransaction } from '../../../redux/transactions/transactionsSlice.js';

const DeleteModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
  
    const { id } = useParams();

    const handleClose = () => navigate(-1);

    const handleConfirmDelete = () => {
        if (id) {
        
            dispatch(deleteTransaction(Number(id) || id));
        }
        handleClose(); 
    };

    return (
        <div className="modal-backdrop" onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
                <button className="modal-close-x" onClick={handleClose}>&times;</button>
                
                <p className="modal-text">Ви впевнені?</p>
                
                <div className="modal-buttons-group">
                  
                    <button className="modal-btn btn-yes" onClick={handleConfirmDelete}>
                        ТАК
                    </button>
                    <button className="modal-btn btn-no" onClick={handleClose}>
                        НІ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
