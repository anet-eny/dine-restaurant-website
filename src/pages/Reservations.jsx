import {
  reservationsData,
  reservationFormConfig,
} from "../data/reservationsData";
import ReservationsHero from "../components/ReservationsHero";
import ReservationForm from "../components/ReservationForm";

export default function Reservations() {
  return (
    <div>
      <ReservationsHero {...reservationsData.reservationsHero} />
      <ReservationForm {...reservationFormConfig} />
    </div>
  );
}
