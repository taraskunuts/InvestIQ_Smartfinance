import React from 'react';

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
  
        <button className="modal-close-x" onClick={onClose}>&times;</button>
  
        {children} 
      </div>
    </div>
  );
};

export default Modal;
