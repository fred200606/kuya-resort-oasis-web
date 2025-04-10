
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Amenities from "@/components/Amenities";
import Reservation from "@/components/Reservation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Add animation classes on page load
  useEffect(() => {
    const sections = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="animate-on-scroll">
        <Amenities />
      </div>
      <div className="animate-on-scroll">
        <Reservation />
      </div>
      <div className="animate-on-scroll">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
