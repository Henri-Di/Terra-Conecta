import { Route, Routes } from 'react-router-dom';

import { DashboardPage } from '../modules/dashboard/pages/DashboardPage';
import { HomePage } from '../modules/home/pages/HomePage';
import { PlantAnalysisPage } from '../modules/plants/pages/PlantAnalysisPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/plants" element={<PlantAnalysisPage />} />
    </Routes>
  );
}