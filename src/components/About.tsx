
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const About = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleOurStory = () => {
    // For now, this just navigates to the About page
    // In a real application, you might have a dedicated "Our Story" page
    navigate("/about");
  };

  return (
    <section id="about" className="py-12 md:py-20 bg-resort-beige/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-resort-green mb-4 md:mb-6">
              About Bahay Ni Kuya
            </h2>
            
            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
              Nestled on the pristine shores of a tropical paradise, Bahay Ni Kuya Resort is more than just a getaway—it's an experience crafted with love and attention to every detail.
            </p>
            
            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
              Founded in 2010 by the Reyes family, our resort has grown from a humble beachfront property to a luxury destination while maintaining the warm, personalized service that makes our guests feel like family.
            </p>
            
            <p className="text-sm md:text-base text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Our philosophy is simple: to provide an authentic, luxurious experience that connects our guests with the natural beauty and rich culture of our location, while ensuring unparalleled comfort and service.
            </p>
            
            <Button onClick={handleOurStory} className="bg-resort-terracotta hover:bg-resort-green text-white w-full md:w-auto">
              Our Story
            </Button>
          </div>
          
          <div className={`grid grid-cols-2 gap-2 md:gap-4 ${isMobile ? 'mt-8' : ''}`}>
            <div className="space-y-2 md:space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Resort View" 
                className="w-full h-32 sm:h-48 md:h-64 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Beach View" 
                className="w-full h-24 sm:h-32 md:h-40 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-2 md:space-y-4 mt-4 md:mt-8">
              <img 
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Pool View" 
                className="w-full h-24 sm:h-32 md:h-40 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Dining View" 
                className="w-full h-32 sm:h-48 md:h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
