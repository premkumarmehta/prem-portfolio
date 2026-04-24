import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Close menu after click
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white p-5 sticky top-0 z-50 shadow-md transition">
      
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">
          <span>Prem</span>.mehta
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </ul>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-3">
          
          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-2 py-1 bg-gray-300 dark:bg-gray-700 rounded"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col mt-4 gap-4 md:hidden items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-lg">
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;