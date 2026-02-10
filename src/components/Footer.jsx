import { PADDING, CONTAINER_CLASS } from "../utils/constants";
import logo from "../assets/logo.svg";

const LOGO_ALT = "dine";

export default function Footer({ address, openingTimes }) {
  return (
    <footer className="bg-cod-gray">
      <div
        className={`${CONTAINER_CLASS} flex flex-col md:flex-row items-center text-center md:text-left gap-8 md:gap-36 lg:gap-60 text-white py-12`}
        style={{ paddingInline: PADDING }}
      >
        <img src={logo} alt={LOGO_ALT} />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-60 footer-text">
          <div>
            <p>{address.line1}</p>
            <p>{address.line2}</p>
            <p>{address.phone}</p>
          </div>
          <div>
            <h3>{openingTimes.title}</h3>
            <p>{openingTimes.weekdays}</p>
            <p>{openingTimes.weekend}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
