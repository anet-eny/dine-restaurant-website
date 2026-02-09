import { homeData } from "../data/homeData";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import HighlightsSection from "../components/HighlightsSection";
import EventsShowcase from "../components/EventsShowcase";
import ReservationsCTA from "../components/ReservationsCTA";
import Footer from "../components/Footer";
import { CONTAINER_CLASS } from "../utils/constants";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection {...homeData.hero} />
      <div className={`${CONTAINER_CLASS}`}>
        <FeaturesSection features={homeData.features} />
      </div>
      <HighlightsSection {...homeData.highlights} />
      <div className={`${CONTAINER_CLASS}`}>
        <EventsShowcase {...homeData.eventsShowcase} />
      </div>
      <ReservationsCTA {...homeData.reservationCTA} />
      <Footer {...homeData.footer} />
    </div>
  );
}
