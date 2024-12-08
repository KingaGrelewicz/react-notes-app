import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
  html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }
  body {
    font-family: "Inter", sans-serif;
    background-color: ${({ theme }) => theme.color.primaryBackground};
    color: ${({ theme }) => theme.color.primaryTextColor};
    transition: background 0.3s;
  };
`;
