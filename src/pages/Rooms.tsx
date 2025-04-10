
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const roomData = [
  {
    id: "standard",
    title: "Standard Room",
    description: "Comfortable room with a queen size bed, private bathroom, and garden view.",
    price: "$120",
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "deluxe",
    title: "Deluxe Suite",
    description: "Spacious suite with a king size bed, private balcony, and ocean view.",
    price: "$200",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "premium",
    title: "Premium Villa",
    description: "Luxurious villa with two bedrooms, private pool, and panoramic views.",
    price: "$350",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "family",
    title: "Family Bungalow",
    description: "Spacious bungalow with three bedrooms, perfect for families.",
    price: "$280",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }
];

const Rooms = () => {
  const navigate = useNavigate();
  
  const handleBookNow = (roomId: string) => {
    navigate(`/reservation?room=${roomId}`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-12 md:pb-16 bg-resort-beige/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-resort-green mb-3 md:mb-4">
              Our Accommodations
            </h1>
            <p className="text-sm md:text-lg text-gray-600 max-w-xs sm:max-w-md lg:max-w-2xl mx-auto">
              Choose from our selection of premium rooms and villas for your perfect getaway
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {roomData.map((room) => (
              <Card key={room.id} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 sm:h-56 md:h-64 w-full overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2 pt-4 px-4 md:px-6">
                  <CardTitle className="text-lg md:text-xl font-playfair text-resort-green">{room.title}</CardTitle>
                  <CardDescription className="text-base md:text-lg font-semibold text-resort-terracotta">
                    {room.price} per night
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 md:px-6 py-2">
                  <p className="text-sm md:text-base text-gray-600">{room.description}</p>
                </CardContent>
                <CardFooter className="px-4 md:px-6 pb-4 pt-2">
                  <Button 
                    onClick={() => handleBookNow(room.id)} 
                    className="w-full bg-resort-terracotta hover:bg-resort-green text-white"
                  >
                    Book This Room
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rooms;
