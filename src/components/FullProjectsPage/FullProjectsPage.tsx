import styled from "styled-components";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { projects } from "../../data/projects";

export const FullProjectsPage = () => {
  const allProjects = [...projects].sort((a, b) => b.year - a.year);

  return (
    <FullProjectsPageStyled>
      <FullProjectsBack href="/">
        &larr;
        <FullProjectsAuthor>Luka Kilasonia</FullProjectsAuthor>
      </FullProjectsBack>
      <FullProjectsTitle>All Projects</FullProjectsTitle>

      <FullProjectsContainer>
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} variant="compact" />
        ))}
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
  color: ${(props) => props.theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const FullProjectsAuthor = styled.h3`
  margin-left: 15px;
`;

const FullProjectsBack = styled.a`
  color: ${(props) => props.theme.colors.accent.turquoise};
  text-decoration: none;
  display: flex;
  align-items: center;
  min-height: 50px;
  cursor: pointer;
  transition: opacity ${(props) => props.theme.transitions.fast};

  &:hover {
    opacity: 0.8;
  }
`;

const FullProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing.lg};
  width: 100%;
  margin-top: 50px;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
