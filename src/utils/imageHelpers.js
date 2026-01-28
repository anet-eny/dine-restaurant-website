const images = import.meta.glob("../assets/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

export const getResponsiveImages = (basePath) => {
  const get = (suffix) => {
    const key = `../assets/${basePath}-${suffix}.jpg`;
    if (!images[key]) {
      console.warn(`Missing image: ${key}`);
    }
    return images[key];
  };

  return {
    desktop: get("desktop"),
    desktop2x: get("desktop@2x"),
    tablet: get("tablet"),
    tablet2x: get("tablet@2x"),
    mobile: get("mobile"),
    mobile2x: get("mobile@2x"),
  };
};

export const getHighlightImages = (basePath) => {
  const get = (suffix) => {
    const key = `../assets/${basePath}-${suffix}.jpg`;
    if (!images[key]) {
      console.warn(`Missing image: ${key}`);
    }
    return images[key];
  };

  return {
    desktop: get("desktop-tablet"),
    desktop2x: get("desktop-tablet@2x"),
    tablet: get("desktop-tablet"),
    tablet2x: get("desktop-tablet@2x"),
    mobile: get("mobile"),
    mobile2x: get("mobile@2x"),
  };
};
