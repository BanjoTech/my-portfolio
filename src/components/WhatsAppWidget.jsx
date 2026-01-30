// WhatsAppWidget.jsx

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoLogoWhatsapp, IoClose } from 'react-icons/io5';

function WhatsAppWidget({
  phoneNumber = '2349152660114',
  message = "Hello BanjoTech! I'm interested in your services. Can we discuss my project?",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsTooltipVisible(true);

      const hideTimer = setTimeout(() => {
        setIsTooltipVisible(false);
      }, 5000);

      // Cleanup inner timer
      return () => clearTimeout(hideTimer);
    }, 3000);

    // Cleanup outer timer on unmount
    return () => clearTimeout(showTimer);
  }, []);

  return (
    <div className='fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3'>
      {/* Tooltip Message */}
      <AnimatePresence>
        {(isHovered || isTooltipVisible) && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className='relative bg-white dark:bg-gray-800 text-gray-800 dark:text-white 
                       px-4 py-3 rounded-xl shadow-lg border border-gray-200 
                       dark:border-gray-700 max-w-[200px]'
          >
            {/* Small triangle pointer */}
            <div
              className='absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-gray-800 
                            border-r border-b border-gray-200 dark:border-gray-700 
                            transform rotate-45'
            />

            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                setIsTooltipVisible(false);
              }}
              className='absolute -top-2 -right-2 bg-gray-100 dark:bg-gray-700 
                         rounded-full p-1 hover:bg-gray-200 dark:hover:bg-gray-600 
                         transition-colors shadow-sm'
              aria-label='Close tooltip'
            >
              <IoClose className='w-3 h-3' />
            </button>

            <p className='text-sm font-medium'>
              👋 Need help with your project?
            </p>
            <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
              Chat with us on WhatsApp!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target='_blank'
        rel='noopener noreferrer'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsTooltipVisible(false)}
        className='relative'
        aria-label='Chat on WhatsApp'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse Animation Ring */}
        <motion.span
          className='absolute inset-0 bg-green-400 rounded-full'
          animate={{
            scale: [1, 1.4, 1.4, 1],
            opacity: [0.6, 0.2, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />

        {/* Second Pulse Ring (offset timing for ripple effect) */}
        <motion.span
          className='absolute inset-0 bg-green-400 rounded-full'
          animate={{
            scale: [1, 1.4, 1.4, 1],
            opacity: [0.6, 0.2, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 0.5, // Offset creates ripple effect
          }}
        />

        {/* Button Circle */}
        <div
          className='relative bg-green-500 hover:bg-green-600 text-white 
                        p-4 rounded-full shadow-lg shadow-green-500/30 transition-colors'
        >
          <IoLogoWhatsapp className='w-7 h-7' />
        </div>
      </motion.a>
    </div>
  );
}

export default WhatsAppWidget;
