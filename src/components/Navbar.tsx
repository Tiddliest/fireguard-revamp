import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-2xl font-bold text-f11-navy">
            F11 Fire Safety
          </a>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
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
            <NavLink href="#services" mobile>Services</NavLink>
            <NavLink href="#about" mobile>About</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ 
  href, 
  children, 
  mobile 
}: { 
  href: string; 
  children: React.ReactNode;
  mobile?: boolean;
}) => (
  <a
    href={href}
    className={`text-f11-navy hover:text-f11-red transition-colors ${
      mobile ? "block py-2" : ""
    }`}
  >
    {children}
  </a>
);