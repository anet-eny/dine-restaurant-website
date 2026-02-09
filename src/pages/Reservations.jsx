import {
  reservationsData,
  reservationFormConfig,
} from "../data/reservationsData";
import { homeData } from "../data/homeData";
import Button from "../components/Button";
import ReservationForm from "../components/ReservationForm";
import Footer from "../components/Footer";
import { PADDING, CONTAINER_CLASS } from "../utils/constants";
import logo from "../assets/logo.svg";
import curvePattern from "../assets/patterns/pattern-curve-bottom-right.svg";
import patternLines from "../assets/patterns/pattern-lines.svg";

const LOGO_ALT = "dine";

export default function Reservations() {
  const { reservationsHero } = reservationsData;

  const scrollToForm = (e) => {
    e.preventDefault();
    const formElement = document.querySelector("#reservation-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="relative min-h-150 lg:h-150 w-full">
        <picture className="absolute inset-0" aria-hidden="true">
          <source
            media="(min-width: 64rem)"
            srcSet={`${reservationsHero.image.desktop} 1x, ${reservationsHero.image.desktop2x} 2x`}
          />
          <source
            media="(min-width: 48rem)"
            srcSet={`${reservationsHero.image.tablet} 1x, ${reservationsHero.image.tablet2x} 2x`}
          />
          <img
            src={reservationsHero.image.mobile}
            srcSet={`${reservationsHero.image.mobile} 1x, ${reservationsHero.image.mobile2x} 2x`}
            alt=""
            className="w-full h-full object-cover"
          />
        </picture>

        {/* Two-column grid layout for lg+ */}
        <div
          className={`${CONTAINER_CLASS} relative lg:grid lg:grid-cols-2 lg:gap-8 lg:h-full`}
          style={{ paddingInline: PADDING, "--form-padding": PADDING }}
        >
          {/* Left column - Hero content */}
          <div className="flex flex-col items-center lg:items-start justify-between text-center lg:text-left text-white gap-8 py-10 lg:pb-36 lg:h-full">
            <img
              src={logo}
              alt={LOGO_ALT}
              className="md:self-start lg:mb-auto"
            />
            <h1 className="heading-xl">{reservationsHero.title}</h1>
            <p className="body-text">{reservationsHero.description}</p>
            <Button onClick={scrollToForm} theme="light" className="md:hidden">
              {reservationsHero.buttonText}
            </Button>
          </div>

          {/* Right column - Form */}
          <ReservationForm
            {...reservationFormConfig}
            className="absolute left-1/2 -translate-x-1/2 lg:relative z-10 w-[calc(100%-2*var(--form-padding))] lg:w-full mt-10 lg:translate-y-56"
          />
        </div>
      </div>
      <section className="relative w-full min-h-160 md:min-h-120 lg:min-h-80">
        <div className={`${CONTAINER_CLASS} relative h-full`}>
          <img
            src={curvePattern}
            alt=""
            aria-hidden="true"
            className="hidden lg:block absolute top-0 left-0 "
          />
          <img
            src={patternLines}
            alt=""
            aria-hidden="true"
            className="hidden lg:block absolute top-52 left-176"
          />
        </div>
      </section>
      <Footer {...homeData.footer} />
    </div>
  );
}
