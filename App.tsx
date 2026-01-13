import React from 'react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CustomBases from './pages/CustomBases';
import FAQ from './pages/FAQ';
import DishDetail from './pages/DishDetail';
import HowItWorks from './pages/HowItWorks';
import Gallery from './pages/Gallery';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <MemoryRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="custom-bases" element={<CustomBases />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="dish/:id" element={<DishDetail />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

export default App;