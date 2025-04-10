
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Amenities from "@/components/Amenities";

const AmenitiesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Amenities />
      </div>
      <Footer />
    </div>
  );
};

export default AmenitiesPage;
