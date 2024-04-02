import styled from "styled-components";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <ExperienceStyled id="experience">
      <ExperienceTitle>Experience </ExperienceTitle>
      <ExperienceItem></ExperienceItem>
    </ExperienceStyled>
  );
};

const ExperienceStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

const ExperienceTitle = styled.h3`
  display: none;
  color: ${(props) => props.theme.colors.white};
  @media (max-width: 1024px) {
    display: flex;
  }
`;
