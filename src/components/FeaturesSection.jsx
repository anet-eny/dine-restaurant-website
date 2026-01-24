import FeatureCard from "./FeatureCard";

export default function FeaturesSection({ features }) {
  return (
    <section className="relative z-10 px-[clamp(2rem,5vw,8rem)] -mt-20 lg:-mt-10">
      <div className="mx-auto space-y-16 md:space-y-24">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
}
