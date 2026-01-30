import { useState, useEffect } from "react";
import Button from "./Button";
import { PADDING } from "../utils/constants";

export default function EventsShowcase({ events }) {
  const [activeIndex, setActiveIndex] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setActiveIndex((prev) => (prev + 1) % events.length);
  //     }, 3000);
  //     return () => clearInterval(interval);
  //   }, [events.length]);

  const activeEvent = events[activeIndex];

  return (
    <section className="pt-20 pb-24" style={{ paddingInline: PADDING }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <picture className="block w-full h-full">
          <source
            media="(min-width: 64rem)"
            srcSet={`${activeEvent.image.desktop} 1x, ${activeEvent.image.desktop2x} 2x`}
          />
          <source
            media="(min-width: 48rem)"
            srcSet={`${activeEvent.image.tablet} 1x, ${activeEvent.image.tablet2x} 2x`}
          />
          <img
            src={activeEvent.image.mobile}
            srcSet={`${activeEvent.image.mobile} 1x, ${activeEvent.image.mobile2x} 2x`}
            alt={activeEvent.title}
            className="w-full h-full object-cover [box-shadow:0_40px_100px_-20px_rgba(0,0,0,0.35)]"
          />
        </picture>
        <nav className="flex flex-col md:flex-row lg:flex-col items-center gap-3 md:gap-6">
          {events.map((event, index) => (
            <button
              key={event.id}
              onClick={() => setActiveIndex(index)}
              className={`relative text-left sm:text-center px-4 py-2 heading-s uppercase transition-all duration-500 cursor-pointer ${
                index === activeIndex ? "text-neutral-600" : "opacity-50"
              }`}
            >
              <span className="relative z-10">{event.label}</span>
              {/* PODTRŽENÍ AKTIVNÍHO NADPISU */}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-px bg-beaver transition-all duration-500 ${
                  index === activeIndex
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0"
                }`}
              />
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
