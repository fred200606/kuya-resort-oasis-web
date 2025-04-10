
import { Wifi, Coffee, Utensils, Swimming, Trees, Waves } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Create Swimming icon since it's not in lucide
const Swimming = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12h20"></path>
    <path d="M5 10c.5-1 1.5-2 2.5-2 2 0 3 3 3 3s1-3 3-3c.5 0 1.5 1 2.5 2"></path>
    <path d="M5 17c.5-1 1.5-2 2.5-2 2 0 3 3 3 3s1-3 3-3c.5 0 1.5 1 2.5 2"></path>
  </svg>
);

// Create Trees icon 
const Trees = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 9l3-3l3 3"></path>
    <path d="M8 15l3-3l3 3"></path>
    <path d="M11 21V6"></path>
    <path d="M20 9l-3-3l-3 3"></path>
    <path d="M20 15l-3-3l-3 3"></path>
    <path d="M17 21V6"></path>
  </svg>
);

// Create Waves icon
const Waves = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
  </svg>
);

const amenitiesData = [
  {
    title: "Private Infinity Pool",
    description: "Enjoy our stunning infinity pool overlooking the ocean",
    icon: Swimming,
  },
  {
    title: "Gourmet Restaurant",
    description: "Savor exquisite local and international cuisine",
    icon: Utensils,
  },
  {
    title: "Free WiFi",
    description: "Stay connected with high-speed internet throughout the resort",
    icon: Wifi,
  },
  {
    title: "Premium Coffee Bar",
    description: "Start your day with premium coffee and pastries",
    icon: Coffee,
  },
  {
    title: "Tropical Gardens",
    description: "Wander through our meticulously maintained tropical gardens",
    icon: Trees,
  },
  {
    title: "Private Beach Access",
    description: "Direct access to pristine white sand beaches",
    icon: Waves,
  },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-resort-beige/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-resort-green mb-4">
            Resort Amenities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Indulge in our premium amenities designed for your comfort and enjoyment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesData.map((amenity, index) => (
            <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-resort-green/10 rounded-full flex items-center justify-center mb-4">
                  <amenity.icon className="text-resort-green" size={24} />
                </div>
                <CardTitle className="text-xl font-playfair text-resort-green">
                  {amenity.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {amenity.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
