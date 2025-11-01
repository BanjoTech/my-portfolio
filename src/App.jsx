import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar"; // ← Fixed to PascalCase
import Home from "./pages/Home"; // ← Fixed to PascalCase
import About from "./pages/About"; // ← Fixed to PascalCase
import Projects from "./pages/Projects"; // ← Fixed to PascalCase
import Contact from "./pages/Contact"; // ← Fixed to PascalCase
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    if (hasSeenLoader) {
      // Skip loader if already seen
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    // Mark that user has seen the loader
    sessionStorage.setItem("hasSeenLoader", "true");
    setIsLoading(false);

    // Small delay before showing content for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {showContent && (
        <div className="bg-white dark:bg-black min-h-screen transition-colors">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </main>
        </div>
      )}
    </Router>
  );
}

export default App;
