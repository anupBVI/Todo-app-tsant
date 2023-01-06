import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box
    }
    body{
        font-family:${() => Theme.font.primary};
        font-weight : ${() => Theme.font.regular};
    }
`;
