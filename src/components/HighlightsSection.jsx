import patternDivide from "../assets/patterns/pattern-divide.svg";
import { PADDING } from "../utils/constants";

export default function HighlightsSection({ title, description, items }) {
  return (
    <section
      className="flex flex-col bg-cod-gray text-white"
      style={{ padding: PADDING }}
    >
      <div className="text-center px-10">
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
