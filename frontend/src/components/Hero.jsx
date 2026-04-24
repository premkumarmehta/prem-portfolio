import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center text-center px-4 md:px-10 bg-white dark:bg-gray-900 text-black dark:text-white">
      
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I'm <span>Prem</span> Kumar 👋
      </motion.h1>

      {/* Typing Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-xl md:text-2xl text-blue-400"
      >
        <TypeAnimation
          sequence={[
            "MERN Stack Developer",
            2000,
            "Cloud & DevOps Enthusiast",
            2000,
            "AI/ML Learner",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 flex gap-4 flex-wrap justify-center"
      >
        <a href="#projects">
          <button className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
            View Projects
          </button>
        </a>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
            Resume
          </button>
        </a>
      </motion.div>

    </section>
  );
}

export default Hero;