import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Issues from "./pages/Issues";
import TakeAction from "./pages/TakeAction";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GetInvolvedModal from "./components/GetInvolvedModal";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Show Get Involved modal immediately on load as requested
    // setIsModalOpen(true); // Temporarily hidden as per user request
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/take-action" element={<TakeAction />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <GetInvolvedModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
};

// Helper component to handle scroll behaviors
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Small delay to ensure the page is rendered before scrolling to the hash
      const scrollWithDelay = () => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

      // Try once immediately, then again with a slight delay
      scrollWithDelay();
      const timer = setTimeout(scrollWithDelay, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
};

export default App;
