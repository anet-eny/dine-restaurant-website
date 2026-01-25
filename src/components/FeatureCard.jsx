import patternCurveTopLeft from "../assets/patterns/pattern-curve-top-left.svg";
import patternCurveTopRight from "../assets/patterns/pattern-curve-top-right.svg";
import patternLines from "../assets/patterns/pattern-lines.svg";
import patternDivide from "../assets/patterns/pattern-divide.svg";

export default function FeatureCard({
  title,
  description,
  image,
  imagePosition = "left",
}) {
  const isImageLeft = imagePosition === "left";

  const curvePattern = isImageLeft ? patternCurveTopRight : patternCurveTopLeft;

  return (
    <article
      className={`
        flex flex-col gap-8
        lg:flex-row lg:items-center md:gap-12
        ${isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"}
      `}
    >
      <div className="flex-1">
        <picture>
          <source
            media="(min-width: 64rem)"
            srcSet={`${image.desktop} 1x, ${image.desktop2x} 2x`}
          />
          <source
            media="(min-width: 48rem)"
            srcSet={`${image.tablet} 1x, ${image.tablet2x} 2x`}
          />
          <img
            src={image.mobile}
            srcSet={`${image.mobile} 1x, ${image.mobile2x} 2x`}
            alt=""
            className="w-full h-auto object-cover [box-shadow:0_40px_100px_-20px_rgba(0,0,0,0.35)]"
          />
        </picture>

        <img
          src={curvePattern}
          alt=""
          aria-hidden="true"
          className={`
            hidden md:block absolute -z-10 md:w-[33vw] md:scale-200 lg:scale-120 lg:w-[60vw]
            ${isImageLeft ? "top-1/3 left-0 md:-translate-y-20 lg:-translate-y-40" : "bottom-0 md:translate-y-5 lg:-translate-y-20 right-0"}
          `}
        />
      </div>

      <div className="flex-1 text-center lg:text-left md:px-10">
        <h2 className="heading-l font-bold mb-4 text-ebony-clay px-20 md:px-40 lg:px-0">
          {title}
        </h2>
        <p className="body-text text-ebony-clay">{description}</p>
      </div>
    </article>
  );
}
