// Home.jsx - With styled typing text

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import ScrollToTop from '../components/ScrollToTop';
import { usePageTitle } from '../hooks/usePageTitle';

function Home() {
  usePageTitle('BanjoTech - Fullstack Development & AI Solutions Agency');

  const [text, setText] = useState('');
  const fullText =
    'I Build Digital Solutions for Businesses and Organisations with BanjoTech Agency.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const renderStyledText = (textToRender) => {
    // If "BanjoTech" hasn't been typed yet, return plain text
    if (!textToRender.includes('BanjoTech')) {
      return textToRender;
    }

    const parts = textToRender.split('BanjoTech');

    return (
      <>
        {parts[0]}
        <span className='text-green-400'>BanjoTech</span>
        {parts[1]}
      </>
    );
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        id='home'
        className='min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center px-6 pt-20 transition-colors'
      >
        <div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* LEFT SIDE */}
          <motion.div
            className='space-y-6'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='space-y-4'>
              {/* Agency Badge */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='inline-flex items-center gap-2 px-4 py-2 bg-green-400/10 
                           text-green-400 text-sm font-medium rounded-full 
                           border border-green-400/20'
              >
                <HiOutlineRocketLaunch className='w-4 h-4' />
                Tech Agency
              </motion.span>

              <h1 className='text-5xl font-bold'>
                Hi, I'm <span className='text-green-400'>Banjo Yinka</span>
              </h1>

              {/* UPDATED: Using renderStyledText function */}
              <p className='text-3xl text-gray-600 dark:text-gray-300 min-h-[3rem]'>
                {renderStyledText(text)}
                <span className='animate-pulse'>|</span>
              </p>

              <p className='text-lg text-gray-500 dark:text-gray-400 leading-relaxed'>
                Leading a team of experts in web development, AI engineering,
                and digital solutions. We turn your ideas into powerful digital
                products.
              </p>
            </div>

            {/* Buttons */}
            <div className='flex gap-4 pt-4'>
              <motion.a
                href='#projects'
                className='px-6 py-3 bg-green-400 text-black font-medium rounded-lg hover:bg-green-500 transition'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>

              <motion.a
                href='/resume.pdf'
                download='Banjo_Yinka_Resume.pdf'
                className='px-6 py-3 border-2 border-green-400 text-green-400 font-medium rounded-lg hover:bg-green-400 hover:text-black transition'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                My Resume
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Profile Image */}
          <motion.div
            className='flex justify-center'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className='relative w-64 h-64 rounded-full overflow-hidden border-4 border-green-400'
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src='/profile.jpg'
                alt='Banjo Yinka'
                className='w-full h-full object-cover'
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML =
                    '<div class="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-6xl font-bold text-white">BY</div>';
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ALL SECTIONS */}
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <FAQSection />
      <ContactSection />

      <ScrollToTop />
    </>
  );
}

export default Home;
