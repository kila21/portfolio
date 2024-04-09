import styled from "styled-components";
import { FullProjectsItem } from "./FullProjetsItem";

export const FullProjectsPage = () => {
  return (
    <FullProjectsPageStyled>
      <FullProjectsAuthor>Luka Kilasonia</FullProjectsAuthor>
      <FullProjectsTitle>All Projects</FullProjectsTitle>

      <FullProjectsContainer>
        <FullProjectsItem
          date={2023}
          link="https://eat-curious-clone-rose.vercel.app/"
          project="Eat Curious Clone"
          tools={["typescript", "react", "redux"]}
        ></FullProjectsItem>

        <FullProjectsItem
          date={2023}
          link="https://eat-curious-clone-rose.vercel.app/"
          project="Eat Curious Clone"
          tools={["typescript", "react", "redux", "typescript", "react"]}
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
  color: ${(props) => props.theme.colors.turquoise};
`;

const FullProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 50px;
`;
