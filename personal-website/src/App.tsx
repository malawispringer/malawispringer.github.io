import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import GalleryPage from './pages/GalleryPage';
import NewsletterPage from './pages/NewsletterPage';
import PasswordProtected from './components/PasswordProtected';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  // Define your passwords here
  const blogPassword = '0216';
  const galleryPassword = '0216';
  const newsletterPassword = '0216';

  return (
      <Router>
        <div style={{ padding: '0' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path ="*" element = {<NotFound />} />
            <Route path="/blog" element={<PasswordProtected password={blogPassword} pageName="Blog"><BlogPage /></PasswordProtected>} />
            <Route path="/gallery" element={<PasswordProtected password={galleryPassword} pageName="Gallery"><GalleryPage /></PasswordProtected>} />
            <Route path="/newsletter" element={<PasswordProtected password={newsletterPassword} pageName="Newsletter"><NewsletterPage /></PasswordProtected>} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;