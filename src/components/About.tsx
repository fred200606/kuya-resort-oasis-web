
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-resort-beige/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-resort-green mb-6">
              About Bahay Ni Kuya
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nestled on the pristine shores of a tropical paradise, Bahay Ni Kuya Resort is more than just a getaway—it's an experience crafted with love and attention to every detail.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2010 by the Reyes family, our resort has grown from a humble beachfront property to a luxury destination while maintaining the warm, personalized service that makes our guests feel like family.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our philosophy is simple: to provide an authentic, luxurious experience that connects our guests with the natural beauty and rich culture of our location, while ensuring unparalleled comfort and service.
            </p>
            
            <Button className="bg-resort-terracotta hover:bg-resort-green text-white">
              Our Story
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Resort View" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Beach View" 
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Pool View" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Dining View" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
