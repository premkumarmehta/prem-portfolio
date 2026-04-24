import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (error) {
      setStatus("Server error ❌");
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      
      <h2 className="text-3xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Send Message
          </button>

          {/* Status Message */}
          {status && (
            <p className="text-center text-sm">{status}</p>
          )}

        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center gap-6 text-lg"
        >
          
          <a 
            href="https://github.com/premkumarmehta" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-3 hover:text-blue-500 transition"
          >
            <FaGithub /> GitHub
          </a>

          <a 
            href="https://www.linkedin.com/in/prem-kumar-804837234/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-3 hover:text-blue-500 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <p className="flex items-center gap-3">
            <FaEnvelope /> codewithprem12345@gmail.com
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;