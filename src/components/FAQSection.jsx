// FAQSection.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus, HiQuestionMarkCircle } from 'react-icons/hi';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ Data - will use this to add more questions later joor
  const faqs = [
    {
      id: 1,
      question: 'Do you collaborate with other developers or agencies?',
      answer:
        "Yes, we do! We believe in the power of collaboration. Whether you're a freelancer needing extra hands, an agency looking for specialized skills, or a business wanting to co-develop a project, we're open to partnerships. Our team seamlessly integrates with external collaborators to deliver exceptional results.",
    },
    {
      id: 2,
      question: 'Do you provide after-sales support and maintenance?',
      answer:
        'Absolutely! After-sales support is one of our core strengths and a major reason why our existing clients love working with us and consistently refer us to others. We offer ongoing maintenance, updates, bug fixes, and technical support to ensure your project continues to perform optimally long after launch.',
    },
    {
      id: 3,
      question: 'How many years of experience does BanjoTech have?',
      answer:
        'BanjoTech is led by Banjo Yinka, who has 2 years of hands-on experience in fullstack development and software engineering. Combined with our team of specialists in UI/UX, backend development, and security, we bring a diverse range of expertise to every project we undertake.',
    },
    {
      id: 4,
      question: 'Do you work with tech stacks not listed on your site?',
      answer:
        "Yes! While we specialize in React, Node.js, and modern web technologies, we approach every problem based on the tools that best fit the solution. Whether it's Python, PHP, mobile development, or emerging technologies, we adapt our approach to meet your project's specific requirements.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants for the answer content
  const answerVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      marginTop: 0,
    },
    visible: {
      height: 'auto',
      opacity: 1,
      marginTop: 16, // equivalent to mt-4
      transition: {
        height: { duration: 0.3, ease: 'easeOut' },
        opacity: { duration: 0.2, delay: 0.1 },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      marginTop: 0,
      transition: {
        height: { duration: 0.3, ease: 'easeIn' },
        opacity: { duration: 0.1 },
      },
    },
  };

  return (
    <section
      id='faq'
      className='py-20 bg-white dark:bg-black text-black dark:text-white transition-colors'
    >
      <div className='max-w-4xl mx-auto px-6'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='text-green-400 font-medium text-sm uppercase tracking-wider'>
            Got Questions?
          </span>
          <h2 className='text-5xl font-bold mt-4 mb-4'>
            Frequently Asked Questions
          </h2>
          <div className='w-20 h-1 bg-green-400 mx-auto mb-4'></div>
          <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            Find answers to common questions about working with us
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='space-y-4'
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`
                bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden
                border-2 transition-all duration-300
                ${
                  openIndex === index
                    ? 'border-green-400 shadow-lg shadow-green-400/10'
                    : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                }
              `}
            >
              {/* Question Button (Accordion Header) */}
              <button
                onClick={() => toggleFAQ(index)}
                className='w-full px-6 py-5 flex items-center justify-between gap-4 text-left'
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${faq.id}`}
              >
                {/* Question Icon & Text */}
                <div className='flex items-start gap-4'>
                  <span
                    className={`
                      mt-1 p-2 rounded-lg transition-colors duration-300
                      ${
                        openIndex === index
                          ? 'bg-green-400 text-black'
                          : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      }
                    `}
                  >
                    <HiQuestionMarkCircle className='w-5 h-5' />
                  </span>
                  <span
                    className={`
                      text-lg font-semibold transition-colors duration-300
                      ${openIndex === index ? 'text-green-400' : ''}
                    `}
                  >
                    {faq.question}
                  </span>
                </div>

                {/* Toggle Icon */}
                <motion.span
                  className={`
                    flex-shrink-0 p-2 rounded-full transition-colors duration-300
                    ${
                      openIndex === index
                        ? 'bg-green-400 text-black'
                        : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }
                  `}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <HiMinus className='w-5 h-5' />
                  ) : (
                    <HiPlus className='w-5 h-5' />
                  )}
                </motion.span>
              </button>

              {/* Answer Content (Collapsible) */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    variants={answerVariants}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    className='overflow-hidden'
                  >
                    <div className='px-6 pb-6'>
                      <div className='pl-14'>
                        {' '}
                        {/* Align with question text */}
                        <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-12 text-center'
        >
          <p className='text-gray-600 dark:text-gray-400 mb-4'>
            Still have questions? We're here to help!
          </p>
          <motion.a
            href='#contact'
            className='inline-flex items-center gap-2 px-6 py-3 bg-green-400 
                       text-black font-medium rounded-lg hover:bg-green-500 transition'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQSection;
