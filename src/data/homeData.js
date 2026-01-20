import { getResponsiveImages } from "../utils/imageHelpers";

export const homeData = {
  hero: {
    title: "Exquisite dining since 1989",
    description:
      "Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.",
    buttonText: "Book a table",
    image: getResponsiveImages("homepage/hero-bg"),
  },
  features: [
    {
      id: 1,
      image: getResponsiveImages("homepage/enjoyable-place"),
      title: "Enjoyable place for all the family",
      description:
        "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.",
      imagePosition: "left",
    },
    {
      id: 2,
      image: getResponsiveImages("homepage/locally-sourced"),
      title: "The most locally sourced food",
      description:
        "All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.",
      imagePosition: "right",
    },
  ],
};
