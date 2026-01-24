import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import { homeData } from "./data/homeData";

function App() {
  return (
    <div className="max-w-8xl mx-auto">
      <HeroSection {...homeData.hero} buttonText="book a table" />
      <FeaturesSection features={homeData.features} />
    </div>
  );
}

export default App;
