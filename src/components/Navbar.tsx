import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <NavLink to="/#services">Services</NavLink>
            <NavLink to="/#about">About</NavLink>
            <NavLink to="/#contact">Contact</NavLink>
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
            <NavLink to="/#services" mobile>Services</NavLink>
            <NavLink to="/#about" mobile>About</NavLink>
            <NavLink to="/#contact" mobile>Contact</NavLink>
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