
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBookNow = () => {
    navigate("/rooms");
  };

  return (
    <nav className="bg-resort-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-12 h-12 bg-resort-green rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-playfair font-bold text-lg">BNK</span>
              </div>
              <span className="text-resort-green font-playfair font-bold text-xl hidden sm:block">Bahay Ni Kuya</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-resort-green hover:text-resort-terracotta font-medium transition duration-300">Home</Link>
            <Link to="/amenities" className="text-resort-green hover:text-resort-terracotta font-medium transition duration-300">Amenities</Link>
            <Link to="/reservation" className="text-resort-green hover:text-resort-terracotta font-medium transition duration-300">Reservation</Link>
            <Link to="/about" className="text-resort-green hover:text-resort-terracotta font-medium transition duration-300">About Us</Link>
          </div>

          {/* Book Now Button (Desktop) */}
          <div className="hidden md:block">
            <Button onClick={handleBookNow} className="bg-resort-terracotta hover:bg-resort-green text-white">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-resort-green">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 absolute top-full left-0 right-0 bg-white shadow-md">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" className="text-resort-green hover:text-resort-terracotta font-medium transition duration-300" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/amenities" className="text-resort-green hover:text-resort-terracotta font-medium transition duration-300" onClick={() => setIsMenuOpen(false)}>Amenities</Link>
              <Link to="/reservation" className="text-resort-green hover:text-resort-terracotta font-medium transition duration-300" onClick={() => setIsMenuOpen(false)}>Reservation</Link>
              <Link to="/about" className="text-resort-green hover:text-resort-terracotta font-medium transition duration-300" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Button onClick={() => { handleBookNow(); setIsMenuOpen(false); }} className="bg-resort-terracotta hover:bg-resort-green text-white w-full">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
