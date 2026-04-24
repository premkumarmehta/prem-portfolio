import { motion } from "framer-motion";

function Education() {
  const educationData = [
    {
      degree: "MCA",
      institute: "Vinoba Bhave University",
      year: "2024 - 2026",
    },
    {
      degree: "BCA",
      institute: "Annada College, Hazaribagh",
      year: "2021 - 2024",
    },
  ];

  return (
    <section id="education" className="py-16 px-6 bg-white dark:bg-gray-800">
      
      <h2 className="text-3xl font-bold text-center mb-12">
        Education
      </h2>

      <div className="max-w-3xl mx-auto relative">
        
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 w-1 h-full bg-blue-500"></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="ml-12 mb-10 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            {/* Circle */}
            <div className="absolute -left-6 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>

            {/* Card */}
            <div className="bg-gray-100 dark:bg-gray-900 p-5 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {edu.institute}
              </p>
              <p className="text-sm text-blue-500">{edu.year}</p>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Education;