export const getResponsiveImages = (basePath) => {
  return {
    desktop: new URL(`../assets/${basePath}-desktop.jpg`, import.meta.url).href,
    desktop2x: new URL(`../assets/${basePath}-desktop@2x.jpg`, import.meta.url)
      .href,
    tablet: new URL(`../assets/${basePath}-tablet.jpg`, import.meta.url).href,
    tablet2x: new URL(`../assets/${basePath}-tablet@2x.jpg`, import.meta.url)
      .href,
    mobile: new URL(`../assets/${basePath}-mobile.jpg`, import.meta.url).href,
    mobile2x: new URL(`../assets/${basePath}-mobile@2x.jpg`, import.meta.url)
      .href,
  };
};
