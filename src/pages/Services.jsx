// Services.jsx - FIXED with WhatsApp links for "Get a Quote"

import { motion } from 'framer-motion';
import { usePageTitle } from '../hooks/usePageTitle';
import {
  HiCode,
  HiCube,
  HiLightBulb,
  HiChip,
  HiCog,
  HiArrowRight,
} from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/io5';

function Services() {
  usePageTitle('Services - BanjoTech | Web Development & AI Solutions');

  // WhatsApp number (without + sign)
  const whatsappNumber = '2349152660114';

  /**
   * CONCEPT: Dynamic WhatsApp URL Generator
   *
   * This function creates a WhatsApp URL with a pre-filled message
   * that includes the specific service name the user is interested in.
   *
   * @param {string} serviceName - The name of the service
   * @returns {string} - The complete WhatsApp URL
   */
  const getWhatsAppLink = (serviceName) => {
    const message = encodeURIComponent(
      `Hello BanjoTech! I'm interested in your ${serviceName} services. I'd like to get a quote and discuss my project requirements.`,
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  // Services data
  const services = [
    {
      id: 1,
      icon: HiCode,
      title: 'Web Development',
      description:
        'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js. From landing pages to complex platforms.',
      features: [
        'Responsive Design',
        'Performance Optimized',
        'SEO Friendly',
        'Cross-browser Compatible',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: HiCube,
      title: 'Software Engineering',
      description:
        'End-to-end software solutions designed for scalability and maintainability. Clean architecture and best practices.',
      features: [
        'System Architecture',
        'API Development',
        'Database Design',
        'Cloud Deployment',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      icon: HiLightBulb,
      title: 'Consulting',
      description:
        'Strategic technical guidance for your projects. Code reviews, architecture decisions, and technology recommendations.',
      features: [
        'Technical Audit',
        'Code Review',
        'Tech Stack Advice',
        'Project Planning',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 4,
      icon: HiChip,
      title: 'AI Automation',
      description:
        'Streamline your business processes with intelligent automation. From chatbots to workflow automation.',
      features: [
        'Process Automation',
        'Chatbot Development',
        'Workflow Optimization',
        'Integration Services',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 5,
      icon: HiCog,
      title: 'AI Engineering',
      description:
        'Custom AI solutions including machine learning models, natural language processing, and intelligent systems.',
      features: [
        'ML Model Development',
        'NLP Solutions',
        'Computer Vision',
        'AI Integration',
      ],
      color: 'from-red-500 to-rose-500',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className='min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 pb-20 transition-colors'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='text-green-400 font-medium text-sm uppercase tracking-wider'>
            What We Offer
          </span>
          <h1 className='text-5xl font-bold mt-4 mb-6'>Our Services</h1>
          <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            We deliver cutting-edge solutions tailored to your business needs.
            From concept to deployment, we've got you covered.
          </p>
          <div className='w-20 h-1 bg-green-400 mx-auto mt-6'></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className='group relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 
                         border border-gray-200 dark:border-gray-800 
                         hover:border-green-400 dark:hover:border-green-400 
                         transition-all duration-300 overflow-hidden'
            >
              {/* Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} 
                            opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}
              >
                <service.icon className='w-8 h-8 text-white' />
              </div>

              {/* Title */}
              <h3 className='text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors'>
                {service.title}
              </h3>

              {/* Description */}
              <p className='text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'>
                {service.description}
              </p>

              {/* Features List */}
              <ul className='space-y-2 mb-8'>
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className='flex items-center text-sm text-gray-500 dark:text-gray-400'
                  >
                    <span className='w-1.5 h-1.5 bg-green-400 rounded-full mr-3' />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button - Now links to WhatsApp with service name */}
              <motion.a
                href={getWhatsAppLink(service.title)}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-green-400 font-medium 
                           hover:text-green-300 transition-colors group/link'
                whileHover={{ x: 5 }}
              >
                <IoLogoWhatsapp className='w-5 h-5' />
                Get a Quote
                <HiArrowRight className='w-4 h-4 group-hover/link:translate-x-1 transition-transform' />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='mt-20 text-center bg-gradient-to-r from-green-400/10 to-emerald-400/10 
                     rounded-3xl p-12 border border-green-400/20'
        >
          <h2 className='text-3xl font-bold mb-4'>
            Ready to Start Your Project?
          </h2>
          <p className='text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto'>
            Let's discuss your ideas and create something amazing together. Get
            a free consultation today.
          </p>
          <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hello BanjoTech! I'd like to discuss a project and get a consultation.",
            )}`}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-8 py-4 bg-green-400 text-black 
                       font-bold rounded-xl hover:bg-green-500 transition-colors'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoLogoWhatsapp className='w-6 h-6' />
            Chat on WhatsApp
            <HiArrowRight className='w-5 h-5' />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
