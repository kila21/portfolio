import styled from "styled-components";
import { ProjectsItem } from "./ProjectsItem";

import weather from "../../images/weather.png";

export const Projects = () => {
  return (
    <ProjectsStyled id="projects">
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectsItem
        img={weather}
        text="Weather Clone app, Where u can search any city and app will display forecast. Its free version of api. So sometimes forecast shouldnt be true. Just Visit live demo or see code and readme file in github."
        title="Weather App"
        liveLink="https://weather-app-kila.vercel.app/"
        repoLink="https://github.com/kila21/Weather?tab=readme-ov-file"
      />
    </ProjectsStyled>
  );
};

const ProjectsStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;

  @media (max-width: 600px) {
    margin-left: 30px;
  }
`;

const ProjectTitle = styled.h3`
  display: none;
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 1.5px;
  @media (max-width: 1024px) {
    display: flex;
  }
`;
