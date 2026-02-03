import { getResponsiveImages } from "../utils/imageHelpers";

export const reservationsData = {
  reservationsHero: {
    title: "Reservations",
    description:
      "We can't wait to host you. If you have any special requirements please feel free to call on the phone number below. We'll be happy to accommodate you.",
    buttonText: "RESERVE PLACE",
    buttonLink: "#reservation-form",
    image: getResponsiveImages("reservations/hero-bg"),
  },
};

export const reservationFormConfig = {
  buttonText: "MAKE RESERVATION",
  peopleOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  defaultPeople: 4,
  fields: {
    name: {
      label: "Name",
      placeholder: "Name",
      required: true,
    },
    email: {
      label: "Email",
      placeholder: "Email",
      required: true,
    },
    date: {
      label: "Pick a date",
      required: true,
    },
    time: {
      label: "Pick a time",
      required: true,
    },
  },
};
