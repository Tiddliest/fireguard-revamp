import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      // If not on homepage, navigate to homepage first
      navigate("/?section=" + sectionId);
    } else {
      // If on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  // Handle scroll to section when navigating from another page
  useEffect(() => {
    if (location.pathname === "/" && location.search) {
      const params = new URLSearchParams(location.search);
      const section = params.get("section");
      if (section) {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Clean up the URL
          window.history.replaceState({}, "", "/");
        }
      }
    }
  }, [location]);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-f11-navy">
            F11 Fire Safety
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/who-we-are">Who We Are</NavLink>
            <NavLink to="/what-we-do">What We Do</NavLink>
            <button
              onClick={() => handleSectionClick("services")}
              className="text-f11-navy hover:text-f11-red transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleSectionClick("about")}
              className="text-f11-navy hover:text-f11-red transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleSectionClick("contact")}
              className="text-f11-navy hover:text-f11-red transition-colors"
            >
              Contact
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6 text-f11-navy" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <NavLink to="/who-we-are" mobile>Who We Are</NavLink>
            <NavLink to="/what-we-do" mobile>What We Do</NavLink>
            <button
              onClick={() => handleSectionClick("services")}
              className="block w-full text-left py-2 text-f11-navy hover:text-f11-red transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleSectionClick("about")}
              className="block w-full text-left py-2 text-f11-navy hover:text-f11-red transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleSectionClick("contact")}
              className="block w-full text-left py-2 text-f11-navy hover:text-f11-red transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ 
  to, 
  children, 
  mobile 
}: { 
  to: string; 
  children: React.ReactNode;
  mobile?: boolean;
}) => (
  <Link
    to={to}
    className={`text-f11-navy hover:text-f11-red transition-colors ${
      mobile ? "block py-2" : ""
    }`}
  >
    {children}
  </Link>
);