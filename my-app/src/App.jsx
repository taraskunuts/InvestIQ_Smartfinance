import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store  from './app/store'; 


import DashboardPage from './pages/DashboardPage/DashboardPage';


const LoginPage = () => (
  <div style={{ padding: '40px', textAlign: 'center' }}>
    <h2>Сторінка входу (Login)</h2>
  </div>
);

function App() {
  return (
   
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          
   
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
           <Route path="/dashboard/*" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
