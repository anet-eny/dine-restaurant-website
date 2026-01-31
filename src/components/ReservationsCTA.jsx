import { Link } from "react-router-dom";
import Button from "./Button";
import { PADDING } from "../utils/constants";

export default function ReservationsCTA({
  title,
  buttonText,
  buttonLink,
  image,
}) {
  return (
    <section className="relative py-20" style={{ paddingInline: PADDING }}>
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

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
        <h1 className="text-white heading-l">{title}</h1>
        <Link to={buttonLink}>
          <Button theme="light">{buttonText}</Button>
        </Link>
      </div>
    </section>
  );
}
