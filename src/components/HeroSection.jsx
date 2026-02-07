import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/logo.svg";
import { PADDING } from "../utils/constants";

const LOGO_ALT = "dine";

export default function HeroSection({
  title,
  description,
  buttonText,
  buttonLink,
  image,
}) {
  return (
    <header
      className="relative min-h-200 lg:h-200 flex items-center lg:items-start justify-center lg:justify-start bg-cod-gray"
      style={{ paddingInline: PADDING }}
    >
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
          className="w-full h-full object-contain object-top lg:object-cover"
        />
      </picture>
      <div className="relative flex flex-col items-center  lg:items-start justify-center lg:justify-start lg:max-w-120 text-white text-center lg:text-left mt-[clamp(4rem,5vw,6rem)] lg:h-full">
        <img src={logo} alt={LOGO_ALT} />
        <div className="lg:mt-auto lg:mb-48">
          <h1 className="py-7 heading-xl">{title}</h1>
          <p className="body-text">{description}</p>
          <Link to={buttonLink}>
            <Button theme="light" className="mt-12">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
