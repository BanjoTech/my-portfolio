// AboutSection.jsx

import { motion } from 'framer-motion';
import { HiShieldCheck, HiCode, HiColorSwatch, HiServer } from 'react-icons/hi';

function AboutSection() {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'SCSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'REST APIs', 'MongoDB'],
    },
    { category: 'Tools', items: ['Git', 'VS Code', 'Vite', 'Figma'] },
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Banjo Yinka',
      role: 'Founder & Lead Developer',
      image: '/profile.jpg',
      icon: HiCode,
      color: 'from-green-400 to-emerald-500',
      initials: 'BY',
    },
    {
      id: 2,
      name: 'Adelaide Badmus',
      role: 'UI/UX Designer',
      image: null,
      icon: HiColorSwatch,
      color: 'from-purple-400 to-pink-500',
      initials: 'AB',
    },
    {
      id: 3,
      name: 'Chukwuma Chigozie',
      role: 'Backend Developer',
      image: null,
      icon: HiServer,
      color: 'from-blue-400 to-cyan-500',
      initials: 'CC',
    },
    {
      id: 4,
      name: 'Mr. Lanre',
      role: 'Security Expert',
      image: null,
      icon: HiShieldCheck,
      color: 'from-red-400 to-orange-500',
      initials: 'ML',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id='about'
      className='min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white py-20 transition-colors'
    >
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='text-green-400 font-medium text-sm uppercase tracking-wider'>
            Who We Are
          </span>
          <h2 className='text-5xl font-bold mt-4 mb-4'>About Us</h2>
          <div className='w-20 h-1 bg-green-400 mx-auto'></div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mb-20 max-w-4xl mx-auto'
        >
          <h3 className='text-3xl font-bold mb-6 text-center'>Our Story</h3>
          <div className='space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center'>
            <p>
              BanjoTech is a tech agency passionate about creating beautiful,
              functional digital solutions that solve real problems. What
              started as a solo journey has evolved into a team of dedicated
              experts committed to crafting exceptional digital experiences.
            </p>
            <p>
              We specialize in building modern web applications, AI-powered
              solutions, and secure software systems. Our team believes in
              writing clean, maintainable code and creating user interfaces that
              are both intuitive and visually stunning.
            </p>
          </div>
        </motion.div>

        {/* 
            TEAM SECTION
             */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='mb-20'
        >
          <h3 className='text-3xl font-bold mb-4 text-center'>Meet Our Team</h3>
          <p className='text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto'>
            A diverse group of talented individuals working together to deliver
            exceptional results for our clients.
          </p>

          {/* Team Grid */}
          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className='group bg-white dark:bg-gray-800 rounded-2xl p-6 
                           border border-gray-200 dark:border-gray-700
                           hover:border-green-400 dark:hover:border-green-400 
                           transition-all duration-300 text-center'
              >
                {/* Profile Image / Avatar */}
                <div className='relative mx-auto mb-4'>
                  {/* Gradient Ring */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} 
                                   p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    <div className='w-full h-full rounded-full bg-white dark:bg-gray-800'></div>
                  </div>

                  {/* Image or Initials Fallback */}
                  <div
                    className='relative w-24 h-24 mx-auto rounded-full overflow-hidden 
                                  border-4 border-gray-200 dark:border-gray-700 
                                  group-hover:border-transparent transition-colors'
                  >
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className='w-full h-full object-cover'
                        onError={(e) => {
                          // If image fails to load, show initials
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}

                    {/* Initials Fallback - Always rendered but hidden if image exists */}
                    <div
                      className={`w-full h-full bg-gradient-to-br ${member.color} 
                                  flex items-center justify-center text-2xl font-bold text-white
                                  ${member.image ? 'hidden' : 'flex'}`}
                    >
                      {member.initials}
                    </div>
                  </div>

                  {/* Role Icon Badge */}
                  <div
                    className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full 
                                   bg-gradient-to-br ${member.color} flex items-center justify-center
                                   shadow-lg`}
                  >
                    <member.icon className='w-5 h-5 text-white' />
                  </div>
                </div>

                {/* Member Info */}
                <h4 className='text-lg font-bold mt-4 group-hover:text-green-400 transition-colors'>
                  {member.name}
                </h4>
                <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className='text-3xl font-bold mb-8 text-center'>My Tech Stack</h3>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className='bg-white dark:bg-gray-800 p-6 rounded-xl 
                           border border-gray-200 dark:border-gray-700 
                           hover:border-green-400 dark:hover:border-green-400 
                           transition-colors cursor-pointer'
              >
                <h4 className='text-xl font-bold mb-4 text-green-400'>
                  {skillGroup.category}
                </h4>
                <ul className='space-y-3'>
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      className='flex items-center text-gray-600 dark:text-gray-300'
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: skillIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.span
                        className='w-2 h-2 bg-green-400 rounded-full mr-3'
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: skillIndex * 0.2,
                        }}
                      />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
