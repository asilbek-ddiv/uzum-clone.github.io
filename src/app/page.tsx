import Footer from "@/components/Footer";
import HeroSection from "@/components/heroSection/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uzum Clone – O'quv loyihasi",
  description: ""
}

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
      
    </>
  )
};

export default Home;
