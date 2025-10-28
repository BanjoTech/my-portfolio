import { motion } from "framer-motion";

function AboutSection() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "SCSS"],
    },
    { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
    { category: "Tools", items: ["Git", "VS Code", "Vite"] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white py-20 transition-colors"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-6">My Story</h3>
          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I'm a fullstack web developer passionate about creating beautiful,
              functional web applications that solve real problems. My journey
              into web development started with curiosity and evolved into a
              dedication to crafting exceptional digital experiences.
            </p>
            <p>
              I specialize in building modern web applications using React,
              Node.js, and other cutting-edge technologies. I believe in writing
              clean, maintainable code and creating user interfaces that are
              both intuitive and visually appealing.
            </p>
            <p>
              When I'm not coding, I'm learning new technologies, contributing
              to open-source projects, or working on personal projects that
              challenge me to grow as a developer.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8">Skills & Technologies</h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-400 transition-colors cursor-pointer"
              >
                <h4 className="text-xl font-bold mb-4 text-green-400">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: skillIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-green-400 rounded-full mr-3"
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: skillIndex * 0.2,
                        }}
                      ></motion.span>
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
