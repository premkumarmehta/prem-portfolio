import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        About Me
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <motion.img
          src="/profile.jpg"
          alt="Prem Kumar"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-60 h-60 object-cover rounded-full mx-auto shadow-lg border-4 border-blue-500"
        />

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-left"
        >
          I am Prem Kumar, a passionate MERN stack developer and MCA student.
          I enjoy building modern web applications and exploring cloud, DevOps,
          and AI technologies. My goal is to become a skilled software engineer.
        </motion.p>

      </div>
    </section>
  );
}

export default About;