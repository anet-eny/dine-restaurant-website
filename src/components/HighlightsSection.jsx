import patternDivide from "../assets/patterns/pattern-divide.svg";
import { PADDING } from "../utils/constants";

export default function HighlightsSection({ title, description, items }) {
  return (
    <section
      className="relative z-5 flex flex-col bg-cod-gray text-white lg:-mt-15"
      style={{ padding: PADDING }}
    >
      <div className="text-center px-10 md:px-20 lg:px-0">
        <img
          src={patternDivide}
          alt=""
          aria-hidden="true"
          className="mx-auto mb-6"
        />
        <h2 className="heading-l mb-4">{title}</h2>
        <p className="body-text">{description}</p>
      </div>
    </section>
  );
}
