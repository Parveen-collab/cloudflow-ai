export const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1280,
} as const;

export const mediaQueries = {
  mobile: `(max-width: ${breakpoints.tablet - 1}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
  tabletUp: `(min-width: ${breakpoints.tablet}px)`,
  desktopUp: `(min-width: ${breakpoints.desktop}px)`,
} as const;
