import { Link } from "react-router-dom";
import Button from "./Button";

export default function ReservationsCTA({
  title,
  buttonText,
  buttonLink,
  image,
}) {
  return (
    <section className="relative">
      <picture className="absolute inset-0" aria-hidden="true">
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
          className="w-full h-full object-cover"
        />
      </picture>

      <div className="relative h-full flex items-center justify-between px-8 md:px-16 lg:px-24">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-light">
          {title}
        </h1>
        <Link to={buttonLink}>
          <Button>{buttonText}</Button>
        </Link>
      </div>
    </section>
  );
}
