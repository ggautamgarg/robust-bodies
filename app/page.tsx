import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Equipment from "@/components/Equipment";
import GymTour from "@/components/GymTour";
import Reviews from "@/components/Reviews";
import Timings from "@/components/Timings";
import Location from "@/components/Location";
import BMICalculator from "@/components/BMICalculator";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import InquiryPopup from "@/components/InquiryPopup";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Equipment />
        <GymTour />
        <Reviews />
        <Timings />
        <Location />
        <BMICalculator />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <InquiryPopup />
    </>
  );
}
