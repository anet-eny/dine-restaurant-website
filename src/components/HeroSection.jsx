import logo from "../assets/logo.svg";

export default function HeroSection({ title, description, buttonText, image }) {
  return (
    <section className="relative min-h-190 flex items-center justify-center lg:justify-start bg-[oklch(0.1776_0_0)] px-[clamp(2rem,5vw,8rem)]">
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
      <div className="relative flex flex-col items-center justify-center lg:items-start lg:max-w-120 text-white text-center lg:text-left">
        <img src={logo} alt="Restaurant Logo" />
        <h1 className="py-8 heading-xl">{title}</h1>
        <p className="body">{description}</p>
      </div>
    </section>
  );
}
