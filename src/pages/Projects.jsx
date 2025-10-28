import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { usePageTitle } from "../hooks/usePageTitle";

function Projects() {
  usePageTitle("Projects - Banjo Yinka");

  const projects = [
    {
      name: "OralRealtor",
      description:
        "A real estate webapp that connects real-estate investors and agents",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/oralrealtor.png",
      liveLink: "https://oralrealtor.netlify.app/",
      githubLink:
        "https://github.com/BanjoTech/OralRealtorRealEstateWebApp.git",
    },
    {
      name: "Herbivore",
      description: "An SEO optimized landing page for vegetarians",
      technologies: ["HTML", "CSS"],
      image: "/herbivore.png",
      liveLink: "https://herbivoree.netlify.app/",
      githubLink: "https://github.com/BanjoTech/Herbivore-Landing-page.git",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-20 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <div className="w-20 h-1 bg-green-400 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Here are some of my recent works
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-green-400 dark:hover:border-green-400 transition-colors group"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/600x400/10b981/ffffff?text=" +
                      project.name;
                  }}
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-400 text-black rounded-lg font-medium hover:bg-green-500 transition flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink /> Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub /> Code
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-green-400">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm font-medium border border-green-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
