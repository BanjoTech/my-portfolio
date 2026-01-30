import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function Loader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait a bit then trigger completion
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30); // Adjust speed here (lower = faster)

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white'
    >
      {/* Animated Hexagon */}
      <div className='relative'>
        {/* Outer rotating hexagon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='relative w-32 h-32'
        >
          <svg viewBox='0 0 100 100' className='w-full h-full'>
            <motion.polygon
              points='50 1 95 25 95 75 50 99 5 75 5 25'
              fill='none'
              stroke='#4ade80'
              strokeWidth='2'
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </svg>
        </motion.div>

        {/* Inner pulsing circle */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='absolute inset-0 flex items-center justify-center'
        >
          <div className='w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center'>
            <div className='w-8 h-8 rounded-full bg-green-400'></div>
          </div>
        </motion.div>

        {/* Orbiting dots */}
        {[0, 120, 240].map((rotation, index) => (
          <motion.div
            key={index}
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
              delay: index * 0.3,
            }}
            className='absolute inset-0'
            style={{ transformOrigin: 'center' }}
          >
            <div
              className='absolute w-3 h-3 bg-green-400 rounded-full'
              style={{
                top: '0%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Progress Percentage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className='mt-12 text-center'
      >
        <div className='text-6xl font-bold text-green-400 mb-4'>
          {progress}%
        </div>

        {/* Progress Bar */}
        <div className='w-64 h-1 bg-gray-800 rounded-full overflow-hidden'>
          <motion.div
            className='h-full bg-green-400'
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='mt-6 text-gray-400 text-sm tracking-widest uppercase'
        >
          Enter the Matrix.....
        </motion.p>
      </motion.div>

      {/* Background particles (optional decoration) */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-green-400/30 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Loader;
