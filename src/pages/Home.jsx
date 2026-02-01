import { homeData } from "../data/homeData";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import HighlightsSection from "../components/HighlightsSection";
import EventsShowcase from "../components/EventsShowcase";
import ReservationsCTA from "../components/ReservationsCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="max-w-8xl mx-auto">
      <HeroSection {...homeData.hero} />
      <FeaturesSection features={homeData.features} />
      <HighlightsSection {...homeData.highlights} />
      <EventsShowcase {...homeData.eventsShowcase} />
      <ReservationsCTA {...homeData.reservationCTA} />
      <Footer {...homeData.footer} />
    </div>
  );
}
