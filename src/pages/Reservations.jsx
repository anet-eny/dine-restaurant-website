import { reservationsData } from "../data/reservationsData";
import ReservationsHero from "../components/ReservationsHero";

export default function Reservations() {
  return (
    <div>
      <ReservationsHero {...reservationsData.reservationsHero} />
    </div>
  );
}
