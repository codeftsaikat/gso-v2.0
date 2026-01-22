import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import CategoriesSection from "@/views/catagory";
import MissionVisionImpact from "@/views/events/first/first-ngso";
import EventsSection from "@/views/events/second";
import Gallery from "@/views/gallery";
import Hero from "@/views/hero";
import MediaCoverageSection from "@/views/media";
import PartnersSection from "@/views/partner";


export default function HomePage() {


  return (
    <div>
      <Navbar />
      <Hero />
      <MissionVisionImpact />
      <EventsSection />
      <CategoriesSection />
      <PartnersSection />
      <Gallery />
      <MediaCoverageSection />
      {/* <NewsSection /> */}
      <Footer />
    </div>
  );
}