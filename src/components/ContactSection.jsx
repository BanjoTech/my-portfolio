import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
      setStatusMessage("Please fill in all fields");
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setStatusMessage("");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatusMessage(
          "Message sent successfully! I'll get back to you soon."
        );
        setIsError(false);
        setFormData({
          from_name: "",
          from_email: "",
          message: "",
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatusMessage("Oops! Something went wrong. Please try again.");
        setIsError(true);
        setIsLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white py-20 transition-colors"
    >
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="from_name"
              className="block text-sm font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label
              htmlFor="from_email"
              className="block text-sm font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-green-400 text-black font-medium rounded-lg hover:bg-green-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {statusMessage && (
            <div
              className={`p-4 rounded-lg text-center ${
                isError
                  ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                  : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
              }`}
            >
              {statusMessage}
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
