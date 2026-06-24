import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ServicePage from './ServicePage';
import HardwarePage from './HardwarePage'; // 1. IMPORTUJEMY NOWĄ PODSTRONĘ
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oferta/:serviceId" element={<ServicePage />} />
        <Route path="/sprzet" element={<HardwarePage />} /> {/* 2. REJESTRUJEMY ŚCIEŻKĘ */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;