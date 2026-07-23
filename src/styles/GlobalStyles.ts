import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: ${(props) => props.theme.colors.background.base};
        overflow-x: hidden;
    }

    #root {
        display: flex;
        margin-top: 50px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Kanit";
    }

    p {
        font-family: "Gowun Batang", serif;
    }

    a {
        color: inherit;
    }

    ::selection {
        background: ${(props) => props.theme.colors.accent.turquoiseMuted};
        color: ${(props) => props.theme.colors.text.primary};
    }

    :focus-visible {
        outline: 2px solid ${(props) => props.theme.colors.accent.turquoise};
        outline-offset: 2px;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.nav}) {
        #root {
            flex-direction: column;
        }
    }
`;
