import styled from "styled-components";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { projects } from "../../data/projects";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { scrollReveal } from "../../styles/scrollReveal";

export const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <ProjectsStyled id="projects" ref={ref} $visible={isVisible}>
      <ProjectTitle>Projects</ProjectTitle>

      <ProjectsGrid>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} variant="featured" />
        ))}
      </ProjectsGrid>

      <FullProjectsLink href="/projects">
        View Full Project Page &rarr;
      </FullProjectsLink>
    </ProjectsStyled>
  );
};

const ProjectsStyled = styled.div<{ $visible?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 50px;
  ${scrollReveal}

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-left: 30px;
  }
`;

const ProjectTitle = styled.h3`
  display: none;
  color: ${(props) => props.theme.colors.text.primary};
  letter-spacing: 1.5px;
  margin-bottom: ${(props) => props.theme.spacing.md};
  @media (max-width: ${(props) => props.theme.breakpoints.nav}) {
    display: flex;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing.lg};
  margin-top: ${(props) => props.theme.spacing.md};

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FullProjectsLink = styled.a`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 20px;
  margin-top: ${(props) => props.theme.spacing.xl};
  cursor: pointer;
  letter-spacing: 1.2px;
  outline: none;
  text-decoration: none;
  transition: color ${(props) => props.theme.transitions.fast};

  &:hover {
    color: ${(props) => props.theme.colors.accent.turquoise};
  }
`;
