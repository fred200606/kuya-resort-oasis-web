
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-resort-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Resort Info */}
          <div>
            <div className="mb-4 flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-resort-green font-playfair font-bold text-sm">BNK</span>
              </div>
              <span className="font-playfair font-bold text-xl">Bahay Ni Kuya</span>
            </div>
            <p className="text-gray-300 mb-4">
              Experience luxury and tranquility in our exclusive beachfront resort.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-resort-terracotta transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-resort-terracotta transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-resort-terracotta transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-resort-terracotta transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#amenities" className="text-gray-300 hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#reservation" className="text-gray-300 hover:text-white transition-colors">Reservation</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Paradise Beach Road, Tropical Island, Philippines</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">+63 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@bahaynikuya.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded bg-resort-green-dark border border-gray-600 text-white"
              />
              <button 
                type="submit"
                className="px-4 py-2 rounded bg-resort-terracotta hover:bg-resort-terracotta/80 text-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Bahay Ni Kuya Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
