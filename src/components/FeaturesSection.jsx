import FeatureCard from "./FeatureCard";
import { PADDING } from "../utils/constants";

export default function FeaturesSection({ features }) {
  return (
    <section
      className="relative z-10 -mt-20 lg:-mt-10 lg:pb-0!"
      style={{ paddingInline: PADDING, paddingBottom: PADDING }}
    >
      <div className="mx-auto space-y-16 md:space-y-24">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
}
