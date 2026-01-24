export default function FeatureCard({
  title,
  description,
  image,
  imagePosition = "left",
}) {
  const isImageLeft = imagePosition === "left";

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
      </div>

      <div className="flex-1 text-center lg:text-left">
        <h2 className="heading-l font-bold mb-4 text-ebony-clay">{title}</h2>
        <p className="body-text text-ebony-clay">{description}</p>
      </div>
    </article>
  );
}
