/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import USP from './components/USP';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';
import { LOGO_URL } from './data/config';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';

function MainApp() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <USP />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    // Dynamically inject/update favicon using the business logo
    const link = (document.querySelector("link[rel*='icon']") as HTMLLinkElement) || document.createElement('link');
    link.type = 'image/jpeg';
    link.rel = 'shortcut icon';
    link.href = LOGO_URL;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
