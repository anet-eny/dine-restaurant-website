import { getResponsiveImages, getHighlightImages } from "../utils/imageHelpers";

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
  highlights: {
    title: "A few highlights from our menu",
    description:
      "We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our menu is revamped every season.",
    items: [
      {
        id: 1,
        name: "Seared Salmon Fillet",
        description:
          "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
        image: getHighlightImages("homepage/salmon"),
      },
      {
        id: 2,
        name: "Rosemary Filet Mignon",
        description:
          "Our prime beef served to your taste with a delicious choice of seasonal sides.",
        image: getHighlightImages("homepage/beef"),
      },
      {
        id: 3,
        name: "Summer Fruit Chocolate Mousse",
        description:
          "Creamy mousse combined with summer fruits and dark chocolate shavings.",
        image: getHighlightImages("homepage/chocolate"),
      },
    ],
  },
  eventsShowcase: {
    events: [
      {
        id: 1,
        label: "Family Gathering",
        title: "Family Gathering",
        description:
          "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.",
        buttonText: "Book a table",
        image: getResponsiveImages("homepage/family-gathering"),
      },
      {
        id: 2,
        label: "Special Events",
        title: "Special Events",
        description:
          "Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal.",
        buttonText: "Book a table",
        image: getResponsiveImages("homepage/special-events"),
      },
      {
        id: 3,
        label: "Social Events",
        title: "Social Events",
        description:
          "Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit.",
        buttonText: "Book a table",
        image: getResponsiveImages("homepage/social-events"),
      },
    ],
  },
};
