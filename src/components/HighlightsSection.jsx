import HighlightCard from "./HighlightCard";
import patternDivide from "../assets/patterns/pattern-divide.svg";
import { PADDING } from "../utils/constants";

export default function HighlightsSection({ title, description, items }) {
  return (
    <section
      className="relative z-5 flex flex-col lg:flex-row lg:gap-20 bg-cod-gray text-white lg:-mt-15 lg:pt-45!"
      style={{ padding: PADDING }}
    >
      <div className="text-center lg:text-left md:px-20 lg:px-0 mb-16">
        <img
          src={patternDivide}
          alt=""
          aria-hidden="true"
          className="mx-auto lg:mx-0 mb-6"
        />
        <h2 className="heading-l mb-4">{title}</h2>
        <p className="body-text">{description}</p>
      </div>
      <div className="space-y-8 md:space-y-12">
        {items.map((item) => (
          <HighlightCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
