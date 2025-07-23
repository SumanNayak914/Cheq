import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Or use any icon lib you prefer

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nav_items = [
    { name: "Home", slug: "/" },
    { name: "Careers", slug: "/careers" },
    { name: "About Us", slug: "/about" },
    { name: "Blog", slug: "/blog" },
  ];

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="relative overflow-hidden bg-green-100">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6 sm:px-8 md:px-12">
        {/* Logo */}
        <Link to="/" className="text-green-500 text-xl font-bold">
          Sheq
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {nav_items.map((item) => {
            const isActive = location.pathname === item.slug;

            return (
              <Link
                key={item.name}
                to={item.slug}
                className={`relative pb-1 transition-colors duration-300 font-medium ${
                  isActive
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-black hover:text-green-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Items (opens from top) */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 animate-slideDown">
          {nav_items.map((item) => {
            const isActive = location.pathname === item.slug;

            return (
              <Link
                key={item.name}
                to={item.slug}
                onClick={handleLinkClick}
                className={`w-4/5 text-center py-3 px-4 rounded-xl font-medium transition duration-200 ${
                  isActive
                    ? "bg-green-200 text-green-800"
                    : "text-gray-800 hover:bg-green-300 hover:text-green-900"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
