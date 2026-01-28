export default function HighlightCard({ name, description, image }) {
  return (
    <article className="flex flex-col md:flex-row items-center gap-6 md:gap-12 border-b border-white/20 pb-10 md:pb-12 last:border-b-0">
      <div className="shrink-0">
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
            className="w-full object-cover"
          />
        </picture>
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="heading-m mb-2">{name}</h3>
        <p className="body-2-text">{description}</p>
      </div>
    </article>
  );
}
