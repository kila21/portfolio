import styled from "styled-components";
import { FullProjectsItem } from "./FullProjetsItem";

export const FullProjectsPage = () => {
  return (
    <FullProjectsPageStyled>
      <FullProjectsBack href="/">
        &larr;
        <FullProjectsAuthor>Luka Kilasonia</FullProjectsAuthor>
      </FullProjectsBack>
      <FullProjectsTitle>All Project</FullProjectsTitle>

      <FullProjectsContainer>
        <FullProjectsItem
          date={2024}
          link="https://spotify-app-kila21.vercel.app/"
          project="Spotify Profile App"
          tools={[
            "typescript",
            "react",
            "router",
            "styled components",
            "spotify dashboard",
            "spotify api",
          ]}
        ></FullProjectsItem>

        <FullProjectsItem
          date={2023}
          link="https://eat-curious-clone-rose.vercel.app/"
          project="Eat Curious Clone"
          tools={["typescript", "react", "router", "styled components"]}
        ></FullProjectsItem>

        <FullProjectsItem
          date={2023}
          link="https://lepay-tourism-clone.vercel.app/"
          project="Tourism Website Clone"
          tools={[
            "typescript",
            "react",
            "router",
            "react-slick",
            "styled components",
          ]}
        ></FullProjectsItem>

        <FullProjectsItem
          date={2023}
          link="https://weather-app-kila.vercel.app/"
          project="Weather App"
          tools={["typescript", "react"]}
        ></FullProjectsItem>

        <FullProjectsItem
          date={2023}
          link="https://to-do-phi-opal.vercel.app/"
          project="Todo App (test@test.com, test123)"
          tools={["React", "Redux", "Typescript"]}
        ></FullProjectsItem>

        <FullProjectsItem
          date={2022}
          link="https://redberry-bootcamp-assigment6.vercel.app/"
          project="Redberry #6(only 1920x Any px)"
          tools={["Javascript", "react"]}
        ></FullProjectsItem>

        <FullProjectsItem
          date={2022}
          link="https://github.com/kila21/Redbery-Project"
          project="Redberry Project"
          tools={["Angular"]}
        ></FullProjectsItem>
      </FullProjectsContainer>
    </FullProjectsPageStyled>
  );
};

const FullProjectsPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  width: 100%;
`;

const FullProjectsTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const FullProjectsAuthor = styled.h3`
  margin-left: 15px;
`;

const FullProjectsBack = styled.a`
  color: ${(props) => props.theme.colors.turquoise};
  text-decoration: none;
  display: flex;
  align-items: center;
  min-height: 50px;
  cursor: pointer;
`;

const FullProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 50px;
`;
