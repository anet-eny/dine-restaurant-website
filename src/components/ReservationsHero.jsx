import Button from "./Button";
import logo from "../assets/logo.svg";
import { PADDING } from "../utils/constants";

const LOGO_ALT = "dine";

export default function ReservationsHero({
  image,
  title,
  description,
  buttonText,
  buttonLink,
}) {
  const scrollToForm = (e) => {
    e.preventDefault();
    const formElement = document.querySelector(buttonLink);
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className="relative min-h-150 lg:h-150 py-10"
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
          className="w-full h-full object-cover"
        />
      </picture>

      <div className="relative flex flex-col items-center lg:items-start justify-between lg:max-w-[50%] text-center lg:text-left text-white gap-8 lg:h-full">
        <img src={logo} alt={LOGO_ALT} className="md:self-start lg:mb-auto" />
        <h1 className="heading-xl">{title}</h1>
        <p className="body-text">{description}</p>
        <Button onClick={scrollToForm} theme="light" className="md:hidden">
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
