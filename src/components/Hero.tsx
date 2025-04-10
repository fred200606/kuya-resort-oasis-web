
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/rooms");
  };

  const handleExplore = () => {
    const amenitiesSection = document.getElementById("amenities");
    if (amenitiesSection) {
      amenitiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-[80vh] md:h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4 sm:mb-6 leading-tight">
          Welcome to <span className="text-resort-beige">Bahay Ni Kuya</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-xs sm:max-w-md md:max-w-2xl mb-6 sm:mb-8">
          Experience luxury and tranquility in our exclusive beachfront resort
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <Button 
            onClick={handleBookNow} 
            className="bg-resort-terracotta hover:bg-resort-green text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
          >
            Book Your Stay
          </Button>
          <Button 
            onClick={handleExplore} 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white/20 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg mt-3 sm:mt-0"
          >
            Explore Resort
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
