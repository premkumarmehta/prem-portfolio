import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "HTML", level: 90, icon: <FaHtml5 /> },
    { name: "CSS", level: 85, icon: <FaCss3Alt /> },
    { name: "JavaScript", level: 80, icon: <FaJs /> },
    { name: "React", level: 75, icon: <FaReact /> },
    { name: "Node.js", level: 70, icon: <FaNode /> },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-white dark:bg-gray-800">
      
      <h2 className="text-3xl font-bold text-center mb-10">
        My Skills
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            <div className="flex justify-between mb-1">
              <span className="flex items-center gap-2">
                {skill.icon} {skill.name}
              </span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-300 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Skills;