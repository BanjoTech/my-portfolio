import { Link } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiInstagram,
} from "react-icons/fi";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/BanjoTech",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/banjo-yinka-313b48236/",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: FiTwitter,
      url: "https://x.com/heis_banjo",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: FiInstagram,
      url: "https://www.instagram.com/heis_banjo/?hl=en",
      color: "hover:text-pink-500",
    },
    {
      name: "Email",
      icon: FiMail,
      url: "mailto:banjoyinka0022@gmail.com",
      color: "hover:text-green-400",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand/Logo Section */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-black dark:text-white inline-block mb-4"
            >
              Banjo<span className="text-green-400">Tech</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Fullstack Web Developer passionate about creating beautiful,
              functional web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Banjo Yinka. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built with <span className="text-green-400">React</span> &{" "}
              <span className="text-green-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
