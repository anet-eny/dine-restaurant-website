import logo from "../assets/logo.svg";
import Button from "./Button";

const LOGO_ALT = "dine";

export default function HeroSection({ title, description, buttonText, image }) {
  return (
    <section className="relative min-h-200 flex items-center justify-center lg:justify-start bg-cod-gray px-[clamp(2rem,5vw,8rem)]">
      <picture className="absolute inset-0">
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
          alt={title}
          className="w-full h-full object-contain lg:object-cover"
        />
      </picture>
      <div className="relative flex flex-col items-center justify-center lg:items-start lg:max-w-120 text-white text-center lg:text-left mt-[clamp(4rem,5vw,6rem)]">
        <img src={logo} alt={LOGO_ALT} />
        <h1 className="py-7 heading-xl">{title}</h1>
        <p className="body-text">{description}</p>
        <Button theme="light" className="mt-12">
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
