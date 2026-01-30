// Projects.jsx - FIXED VERSION

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import { usePageTitle } from '../hooks/usePageTitle';

function Projects() {
  usePageTitle('Projects - BanjoTech | Our Portfolio');

  const [activeCategory, setActiveCategory] = useState('All');
  const [failedImages, setFailedImages] = useState({});

  const categories = [
    'All',
    'Web Apps',
    'Landing Pages',
    'SaaS',
    'AI/Automation',
    'E-commerce',
    'Blockchain',
  ];

  const projects = [
    {
      id: 1,
      name: 'ProjectFlow',
      description:
        'An AI-powered project management webapp for developers with GitHub integration and real-time sync to collaborate with team members.',
      technologies: ['React', 'Node.js', 'AI/ML', 'GitHub API', 'WebSockets'],
      image: '/projectflow.png',
      liveLink: 'https://projectflowww.netlify.app',
      githubLink: 'https://github.com/BanjoTech/projectflow',
      category: 'SaaS',
      featured: true,
    },
    {
      id: 2,
      name: 'OralRealtor',
      description:
        'A real estate webapp that connects real-estate investors and agents with seamless property listings and management.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/oralrealtor.png',
      liveLink: 'https://oralrealtor.netlify.app/',
      githubLink:
        'https://github.com/BanjoTech/OralRealtorRealEstateWebApp.git',
      category: 'Web Apps',
      featured: false,
    },
    {
      id: 3,
      name: 'Herbivore',
      description:
        'An SEO-optimized landing page for vegetarians featuring beautiful design and engaging content.',
      technologies: ['HTML', 'CSS'],
      image: '/herbivore.png',
      liveLink: 'https://herbivoree.netlify.app/',
      githubLink: 'https://github.com/BanjoTech/Herbivore-Landing-page.git',
      category: 'Landing Pages',
      featured: false,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  const handleImageError = (projectId) => {
    setFailedImages((prev) => ({ ...prev, [projectId]: true }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <div className='min-h-screen bg-white dark:bg-black text-black dark:text-white pt-20 transition-colors'>
      <div className='max-w-6xl mx-auto px-6 py-16'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <span className='text-green-400 font-medium text-sm uppercase tracking-wider'>
            Portfolio
          </span>
          <h1 className='text-5xl font-bold mt-4 mb-4'>Our Projects</h1>
          <div className='w-20 h-1 bg-green-400 mx-auto mb-4'></div>
          <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            Explore our complete portfolio of work across different categories
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='flex flex-wrap justify-center gap-3 mb-12'
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeCategory === category
                    ? 'bg-green-400 text-black shadow-lg shadow-green-400/25'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeCategory}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className={`relative bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden 
                           border border-gray-200 dark:border-gray-800 
                           hover:border-green-400 dark:hover:border-green-400 
                           transition-all duration-300 group
                           ${project.featured ? 'ring-2 ring-green-400/50' : ''}`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div
                    className='absolute top-4 left-4 z-20 flex items-center gap-1 
                                  px-3 py-1 bg-green-400 text-black text-xs font-bold 
                                  rounded-full'
                  >
                    <HiSparkles className='w-3 h-3' />
                    Featured
                  </div>
                )}

                {/* Project Image Container - FIXED */}
                <div className='relative h-56 bg-gray-200 dark:bg-gray-800 overflow-hidden'>
                  {/* Fallback - always rendered at bottom */}
                  <div
                    className='absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 
                                  flex items-center justify-center z-0'
                  >
                    <span className='text-4xl font-bold text-white'>
                      {project.name.charAt(0)}
                    </span>
                  </div>

                  {/* Image - conditionally rendered */}
                  {!failedImages[project.id] && (
                    <motion.img
                      src={project.image}
                      alt={project.name}
                      className='absolute inset-0 w-full h-full object-cover z-[1]'
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      onError={() => handleImageError(project.id)}
                    />
                  )}

                  {/* Overlay - always intact with z-10 */}
                  <div
                    className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 
                                  transition-opacity flex items-center justify-center gap-4 z-10'
                  >
                    <motion.a
                      href={project.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-4 py-2 bg-green-400 text-black rounded-lg font-medium 
                                 hover:bg-green-500 transition flex items-center gap-2'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink className='w-4 h-4' /> Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg 
                                 font-medium hover:bg-white/20 transition flex items-center gap-2
                                 border border-white/20'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub className='w-4 h-4' /> Code
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className='p-6'>
                  <span className='text-xs font-medium text-green-400 uppercase tracking-wider'>
                    {project.category}
                  </span>

                  <h3 className='text-xl font-bold mt-2 mb-3 group-hover:text-green-400 transition-colors'>
                    {project.name}
                  </h3>

                  <p className='text-gray-600 dark:text-gray-400 text-sm mb-4'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-3 py-1 bg-green-400/10 text-green-400 rounded-full 
                                   text-xs font-medium border border-green-400/20'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-center py-16'
          >
            <div className='text-6xl mb-4'>🔍</div>
            <p className='text-gray-500 dark:text-gray-400 text-lg'>
              No projects in this category yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Projects;
