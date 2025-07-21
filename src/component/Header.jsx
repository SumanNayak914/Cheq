import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const nav_items = [
    { name: "Home", slug: "/" },
    { name: "Careers", slug: "/carees" },
    { name: "About Us", slug: "/about" },
    { name: "Blog", slug: "/blog" },
  ];

  return (
    <header className="relative overflow-hidden bg-green-100">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6 sm:px-8 md:px-12">
        {/* Logo */}
        <Link to="/" className="text-green-500 text-xl font-bold">
          Sheq
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6">
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
      </nav>
    </header>
  );
};

export default Header;
