
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20 flex-grow">
        <div className="py-8 md:py-12 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12 fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-resort-green mb-3 md:mb-4">
              About Us
            </h1>
            <p className="text-sm md:text-lg text-gray-600 max-w-xs sm:max-w-md lg:max-w-2xl mx-auto">
              Learn about our story, our values, and our commitment to exceptional hospitality
            </p>
          </div>
        </div>
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
