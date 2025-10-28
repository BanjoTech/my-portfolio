import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { HiMoon, HiSun, HiMenu, HiX } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* LEFT - Logo */}
            <Link
              to="/"
              className="text-2xl font-bold text-black dark:text-white"
            >
              Banjo<span className="text-green-400">Tech</span>
            </Link>

            {/* CENTER - Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="relative text-gray-700 dark:text-gray-300 hover:text-green-400 transition-colors group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/about"
                className="relative text-gray-700 dark:text-gray-300 hover:text-green-400 transition-colors group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/projects"
                className="relative text-gray-700 dark:text-gray-300 hover:text-green-400 transition-colors group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/contact"
                className="relative text-gray-700 dark:text-gray-300 hover:text-green-400 transition-colors group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* RIGHT - Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <HiSun className="w-6 h-6 text-yellow-400" />
                ) : (
                  <HiMoon className="w-6 h-6 text-gray-700" />
                )}
              </button>

              {/* Mobile Menu Button (only shows on mobile) */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <HiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <HiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU - Slides in from right */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay/Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 z-50 md:hidden shadow-2xl"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  aria-label="Close menu"
                >
                  <HiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-6 px-6">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-green-400 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-green-400 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/projects"
                  onClick={closeMobileMenu}
                  className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-green-400 transition-colors"
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-green-400 transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
