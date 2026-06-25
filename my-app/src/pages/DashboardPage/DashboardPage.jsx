import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import Header from '../../components/shared/Header/Header'; 
import Modal from '../../components/shared/Modal/Modal';   

function DashboardPage() {
  const navigate = useNavigate();
const [isLogoutOpen, setIsLogoutOpen] = useState(false); 

  const handleCloseModal = () => {
    setIsLogoutOpen(false);
  };

  const handleConfirmLogout = () => {
    navigate('/login'); 
  };

  return (
    <div className="dashboard-page">
  
      <Header />
  
      {isLogoutOpen && (
        <Modal onClose={handleCloseModal}>
          <h3>Ви дійсно хочете вийти з акаунту?</h3>
          <div className="modal-actions">
            <button className="btn-confirm" onClick={handleConfirmLogout}>
              Так, вийти
            </button>
            <button className="btn-cancel" onClick={handleCloseModal}>
              Ні, залишитися
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default DashboardPage;
