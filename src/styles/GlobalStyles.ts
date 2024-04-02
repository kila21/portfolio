import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        width: 100vw;
        height: 100vh;
        background-color: rgb(15 23 42 / 1);
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

    @media (max-width: 1024px) {
        #root {
            flex-direction: column;
        }
    }
`;
