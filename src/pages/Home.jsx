import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import ScrollToTop from "../components/ScrollToTop";
import { usePageTitle } from "../hooks/usePageTitle";

function Home() {
  usePageTitle("Banjo Yinka - Fullstack Web Developer");

  const [text, setText] = useState("");
  const fullText = "I'm a Fullstack Web Developer";

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

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center px-6 pt-20 transition-colors"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl font-bold">
                Hi, I'm <span className="text-green-400">Banjo Yinka</span>
              </h1>
              <p className="text-3xl text-gray-600 dark:text-gray-300 min-h-[3rem]">
                {text}
                <span className="animate-pulse">|</span>
              </p>

              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                I create modern, fast web applications with clean code and
                beautiful user experiences. Passionate about turning ideas into
                digital reality.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-green-400 text-black font-medium rounded-lg hover:bg-green-500 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download="Banjo_Yinka_Resume.pdf"
                className="px-6 py-3 border-2 border-green-400 text-green-400 font-medium rounded-lg hover:bg-green-400 hover:text-black transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                My Resume
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Profile Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-green-400"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="/profile.jpg"
                alt="Banjo Yinka"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<div class="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-6xl font-bold text-white">BY</div>';
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ALL OTHER SECTIONS */}
      <AboutSection />
      <ProjectsSection />
      <ContactSection />

      {/* SCROLL TO TOP BUTTON */}
      <ScrollToTop />
    </>
  );
}

export default Home;
