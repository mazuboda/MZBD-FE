import NotoBold from "@assets/fonts/NotoSansKR-Bold.woff2";
import NotoMedium from "@assets/fonts/NotoSansKR-Medium.woff2";
import NotoRegular from "@assets/fonts/NotoSansKR-Regular.woff2";
import RobotoBold from "@assets/fonts/Roboto-Bold.woff2";
import RobotoMedium from "@assets/fonts/Roboto-Medium.woff2";
import RobotoRegular from "@assets/fonts/Roboto-Regular.woff2";
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

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    src: local("Noto Sans KR"),
      url(${NotoBold}) format("woff2");
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: local("Roboto"),
      url(${RobotoRegular}) format("woff2");
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    src: local("Roboto"),
      url(${RobotoMedium}) format("woff2");
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    src: local("Roboto"),
      url(${RobotoBold}) format("woff2");
  }
`;
