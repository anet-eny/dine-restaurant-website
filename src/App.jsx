import { homeData } from "./data/homeData";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/HighlightsSection";

function App() {
  return (
    <div className="max-w-8xl mx-auto">
      <HeroSection {...homeData.hero} buttonText="book a table" />
      <FeaturesSection features={homeData.features} />
      <HighlightsSection {...homeData.highlights} />
    </div>
  );
}

export default App;
