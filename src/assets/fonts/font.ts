import NotoMedium from "@assets/fonts/NotoSansKR-Medium.woff2";
import NotoRegular from "@assets/fonts/NotoSansKR-Regular.woff2";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    src: local("Noto Sans KR"),
      url(${NotoRegular}) format("woff2");
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    src: local("Noto Sans KR"),
      url(${NotoMedium}) format("woff2");
  }
`;
