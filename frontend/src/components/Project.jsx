import { motion } from "framer-motion";

function Projects() {
  const projects = [
     {
      title: "TargetBCA",
      image: "/projects/project0.jpg",
      github: "https://github.com/premkumarmehta/TargetBCA",
      live: "https://premkumarmehta.github.io/TargetBCA/",
      desc: "Complete Study material for BCA Students.",
    },
    {
      title: "Netflix Clone",
      image: "/projects/project1.jpg",
      github: "https://github.com/premkumarmehta/netflix-clone",
      live: "https://premkumarmehta.github.io/netflix-clone/",
      desc: "This is a Netflix Clone, created for educational purposes only. Not affiliated with Netflix, Inc.",
    },
    {
      title: "Currency Converter",
      image: "/projects/project2.jpg",
      github: "https://github.com/premkumarmehta/currency_converter_nodejs",
      live: "https://github.com/premkumarmehta/currency_converter_nodejs",
      desc: "A simple and user-friendly Currency Converter web application built using Node.js, Express, MySQL, and HTML/CSS/JavaScript.",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      
      <h2 className="text-3xl font-bold text-center mb-10">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            

            {/* Content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{project.desc}</p>

              <div className="mt-4 flex gap-4">
                <a href={project.github} target="_blank">
                  <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900">
                    GitHub
                  </button>
                </a>

                <a href={project.live} target="_blank">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Live
                  </button>
                </a>
                
              </div>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Projects;