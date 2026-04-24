import { Route, Routes } from 'react-router-dom';

import { DashboardPage } from '../modules/dashboard/pages/DashboardPage';
import { HomePage } from '../modules/home/pages/HomePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}