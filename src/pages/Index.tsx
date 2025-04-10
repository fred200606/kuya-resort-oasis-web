
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Amenities from "@/components/Amenities";
import Reservation from "@/components/Reservation";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Amenities />
      <Reservation />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
