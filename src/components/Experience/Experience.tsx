import styled from "styled-components";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <ExperienceStyled id="experience">
      <ExperienceTitle>Experience </ExperienceTitle>
      <ExperienceItem
        date="2022 - present"
        title="React Developer(online Courses)"
        text="After working as an Angular Developer, I start to develope myself and learn React. I took Udemy React Course. watching some videos in youtube and also try to use google and ChatGPT. Currently, trying to Build some project, like portfolio and find Job where i took some experience and work to develope my Rect Skills."
        tools={["React, Redux", "Router", "Styled Components"]}
      />

      <ExperienceItem
        date="July - Dec, 2021"
        title="TBC Angular Course"
        text="6 month, TBC Angular Course, Where I Learn A lot about Angular, Typescript and Git. Working with group of people And myself to build some project And learn more a about Coding and proccess of working real projects."
        tools={["Typescript", "Angular", "Git", "HTML", "CSS", "SCSS"]}
      />

      <ExperienceItem
        date="Apr - Sep, 2022"
        title="Junior Angular Developer"
        text="After A course, I Start A job As a Freelance Junior Angular Developer. Where, I Learn A state Managment for Angular(ngrx and rxjs).And my job was to rewrite website and implement some new designs.Like re-branding"
        tools={["Typescript", "Angular", "Git", "Ngrx", "Rxjs"]}
      />
    </ExperienceStyled>
  );
};

const ExperienceStyled = styled.div`
  cursor: pointer;
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
