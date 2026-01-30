// Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { HiMoon, HiSun, HiMenu, HiX } from 'react-icons/hi';
import { ThemeContext } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Navigation links array - makes it easier to manage and map over
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const NavLink = ({ path, label, mobile = false, onClick }) => {
    const isActive = location.pathname === path;

    const baseClasses = mobile
      ? 'text-xl font-medium transition-colors'
      : 'relative transition-colors group';

    const colorClasses = isActive
      ? 'text-green-400'
      : 'text-gray-700 dark:text-gray-300 hover:text-green-400';

    return (
      <Link
        to={path}
        onClick={onClick}
        className={`${baseClasses} ${colorClasses}`}
      >
        {label}
        {!mobile && (
          <span
            className={`absolute bottom-0 left-0 h-0.5 bg-green-400 transition-all duration-300
              ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
          />
        )}
      </Link>
    );
  };

  return (
    <>
      <nav className='fixed top-0 w-full bg-white dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50 transition-colors'>
        <div className='max-w-6xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <Link
              to='/'
              className='text-2xl font-bold text-black dark:text-white'
            >
              Banjo<span className='text-green-400'>Tech</span>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex space-x-8'>
              {navLinks.map((link) => (
                <NavLink key={link.path} path={link.path} label={link.label} />
              ))}
            </div>

            {/* Right Side - Theme Toggle & Mobile Menu Button */}
            <div className='flex items-center gap-4'>
              <button
                onClick={toggleTheme}
                className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition'
                aria-label='Toggle theme'
              >
                {isDark ? (
                  <HiSun className='w-6 h-6 text-yellow-400' />
                ) : (
                  <HiMoon className='w-6 h-6 text-gray-700' />
                )}
              </button>

              <button
                onClick={toggleMobileMenu}
                className='md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition'
                aria-label='Toggle menu'
              >
                {isMobileMenuOpen ? (
                  <HiX className='w-6 h-6 text-gray-700 dark:text-gray-300' />
                ) : (
                  <HiMenu className='w-6 h-6 text-gray-700 dark:text-gray-300' />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
              className='fixed inset-0 bg-black/50 z-40 md:hidden'
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className='fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 z-50 md:hidden shadow-2xl'
            >
              <div className='flex justify-end p-6'>
                <button
                  onClick={closeMobileMenu}
                  className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition'
                  aria-label='Close menu'
                >
                  <HiX className='w-6 h-6 text-gray-700 dark:text-gray-300' />
                </button>
              </div>

              <nav className='flex flex-col space-y-6 px-6'>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    path={link.path}
                    label={link.label}
                    mobile={true}
                    onClick={closeMobileMenu}
                  />
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
