import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Properties from "@/components/Properties";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SearchBar />
        <Properties />
        <WhyUs />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <About />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
