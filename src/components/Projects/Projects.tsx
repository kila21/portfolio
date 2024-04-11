import styled from "styled-components";
import { ProjectsItem } from "./ProjectsItem";

import weather from "../../images/weather.png";
import lepay from "../../images/lepay.png";
import eat from "../../images/eat.png";

export const Projects = () => {
  return (
    <ProjectsStyled id="projects">
      <ProjectTitle>Projects</ProjectTitle>

      <ProjectsItem
        img={eat}
        text="Eat Curiouse Clone app, Where u can visit pages to see what kind of burgers or meat u can pick. Remember,its Just Clone App to display my skills. U Can see original link, below, from my github repository."
        title="Eat Curiouse Clone App"
        liveLink="https://eat-curious-clone-rose.vercel.app/"
        repoLink="https://github.com/kila21/eat-curious-clone"
      />

      <ProjectsItem
        img={lepay}
        text="Tourism Clone app, Where u can visit pages to see what kind of tours this site offers. Remember,its Just Clone App to display my skills. U Can see original link, below, from my github repository."
        title="Tourism Clone App"
        liveLink="https://lepay-tourism-clone.vercel.app/"
        repoLink="https://github.com/kila21/lepay-tourism-clone"
      />

      <ProjectsItem
        img={weather}
        text="Weather Clone app, Where u can search any city and app will display forecast. Its free version of api. So sometimes forecast shouldnt be true. Just Visit live demo or see code and readme file in github."
        title="Weather App"
        liveLink="https://weather-app-kila.vercel.app/"
        repoLink="https://github.com/kila21/Weather?tab=readme-ov-file"
      />

      <FullProjectsLink href="/projects">
        View Full Project Page
      </FullProjectsLink>
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

const FullProjectsLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
  letter-spacing: 1.2px;
  outline: none;
  text-decoration: none;
`;
