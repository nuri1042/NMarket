import { css, CSSProp } from "styled-components";

type MediaQueryProps = {
  [key: string]: number;
};
export const breakpoints: MediaQueryProps = {
  small: 360,
  medium: 750,
  large: 960,
  xlarge: 1440,
};

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media only screen and (max-width: ${breakpoints[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `;
  return acc;
}, {} as Record<keyof typeof breakpoints, (l: TemplateStringsArray, ...p: any[]) => CSSProp>);
