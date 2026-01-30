// ServicesSection.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HiCode,
  HiCube,
  HiLightBulb,
  HiChip,
  HiCog,
  HiArrowRight,
} from 'react-icons/hi';

function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: HiCode,
      title: 'Web Development',
      description: 'Custom websites and web applications with modern tech.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: HiCube,
      title: 'Software Engineering',
      description: 'Scalable software solutions with clean architecture.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      icon: HiLightBulb,
      title: 'Consulting',
      description: 'Strategic technical guidance for your projects.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 4,
      icon: HiChip,
      title: 'AI Automation',
      description: 'Intelligent automation for business processes.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 5,
      icon: HiCog,
      title: 'AI Engineering',
      description: 'Custom AI & ML solutions for your needs.',
      color: 'from-red-500 to-rose-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id='services'
      className='py-20 bg-white dark:bg-black text-black dark:text-white transition-colors'
    >
      <div className='max-w-6xl mx-auto px-6'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='text-green-400 font-medium text-sm uppercase tracking-wider'>
            What We Do
          </span>
          <h2 className='text-5xl font-bold mt-4 mb-4'>Our Services</h2>
          <div className='w-20 h-1 bg-green-400 mx-auto'></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service) => (
            <Link to='/services' key={service.id}>
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className='group bg-gray-50 dark:bg-gray-900 rounded-xl p-6 
                           border border-gray-200 dark:border-gray-800
                           hover:border-green-400 dark:hover:border-green-400 
                           transition-all duration-300 text-center cursor-pointer h-full'
              >
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} mb-4`}
                >
                  <service.icon className='w-6 h-6 text-white' />
                </div>

                {/* Title */}
                <h3 className='text-lg font-bold mb-2 group-hover:text-green-400 transition-colors'>
                  {service.title}
                </h3>

                {/* Description */}
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  {service.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-center mt-12'
        >
          <Link
            to='/services'
            className='inline-flex items-center px-6 py-3 border-2 border-green-400 
                       text-green-400 font-medium rounded-lg 
                       hover:bg-green-400 hover:text-black transition-all group'
          >
            View All Services
            <HiArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
