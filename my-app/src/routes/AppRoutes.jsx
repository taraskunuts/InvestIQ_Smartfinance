import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "../pages/LoginPage/LoginPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import ReportPage from "../pages/ReportPage/ReportPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard/*" element={<DashboardPage />} />

        <Route path="/report" element={<ReportPage />} />

        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;