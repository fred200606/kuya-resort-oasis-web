
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reservation from "@/components/Reservation";

const ReservationPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  useEffect(() => {
    const roomParam = searchParams.get("room");
    if (roomParam) {
      setSelectedRoom(roomParam);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Reservation preselectedRoom={selectedRoom} />
      </div>
      <Footer />
    </div>
  );
};

export default ReservationPage;
