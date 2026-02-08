import { homeData } from "../data/homeData";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import HighlightsSection from "../components/HighlightsSection";
import EventsShowcase from "../components/EventsShowcase";
import ReservationsCTA from "../components/ReservationsCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection {...homeData.hero} />
      <div className="max-w-384 mx-auto">
        <FeaturesSection features={homeData.features} />
      </div>
      <HighlightsSection {...homeData.highlights} />
      <div className="max-w-384 mx-auto">
        <EventsShowcase {...homeData.eventsShowcase} />
      </div>
      <ReservationsCTA {...homeData.reservationCTA} />
      <Footer {...homeData.footer} />
    </div>
  );
}
