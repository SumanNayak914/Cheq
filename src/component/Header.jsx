import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fixed: camelCase naming convention
  const navItems = [
    { name: "Home", slug: "/" },
    { name: "Careers", slug: "/careers" },
    { name: "About Us", slug: "/about" },
    { name: "Blog", slug: "/blog" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside or on link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Fixed: Increased z-index to ensure header stays above hero animations */}
      <header className="fixed top-0 left-0 right-0 z-[9999] backdrop-blur-md bg-white/80 border-b border-white/20">
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6 sm:px-8 md:px-12">
          {/* Logo */}
          <Link to="/" className="text-green-600 text-xl font-bold z-10 relative">
            Sheq
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.slug;

              return (
                <Link
                  key={item.name}
                  to={item.slug}
                  className={`relative pb-1 transition-colors duration-300 font-medium ${
                    isActive
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-700 hover:text-black hover:bg-white/50 px-3 py-1 rounded-md"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button - Fixed: Higher z-index */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-[10000] p-2 rounded-md hover:bg-white/30 transition-colors relative"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-0.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay - Fixed: Higher z-index */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[9998] md:hidden">
          {/* Backdrop - Fixed: Click handler to close menu */}
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={closeMenu}
          ></div>
          
          {/* Menu Content - Top aligned */}
          <div className="relative z-[9999] pt-20">
            <div className="bg-white/95 backdrop-blur-md mx-4 shadow-2xl rounded-lg p-4 border border-white/20">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.slug;

                  return (
                    <div key={item.name} className="rounded-lg overflow-hidden">
                      <Link
                        to={item.slug}
                        onClick={closeMenu} // Fixed: Close menu on navigation
                        className={`block py-4 px-6 transition-all duration-300 font-medium rounded-lg ${
                          isActive
                            ? "text-green-600 bg-green-50 border-l-4 border-green-600"
                            : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </div>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Fixed: Add padding top to body content to prevent header overlap */}
      <div className="h-20"></div> {/* Spacer for fixed header */}
    </>
  );
};

export default Header;