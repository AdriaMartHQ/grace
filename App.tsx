
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Tickets from './pages/Tickets';
import Contact from './pages/Contact';
import StyleGuide from './pages/StyleGuide';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/style-guide" element={<StyleGuide />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
};

export default App;
