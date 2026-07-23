import styled from "styled-components";
import { ProjectEntry } from "../../data/projects";
import { Tag } from "../common/Tag";

const getInitials = (title: string) =>
  title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

export const ProjectCard = (props: {
  project: ProjectEntry;
  variant?: "featured" | "compact";
}) => {
  const { project } = props;
  const variant = props.variant ?? "featured";

  return (
    <ProjectCardStyled $variant={variant}>
      <ImageWrapper $variant={variant}>
        {project.image ? (
          <ProjectImage src={project.image} alt={`${project.title} preview`} />
        ) : (
          <PlaceholderTile aria-hidden="true">
            {getInitials(project.title)}
          </PlaceholderTile>
        )}
      </ImageWrapper>

      <ProjectContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectText $variant={variant}>{project.description}</ProjectText>

        <ProjectTools>
          {project.tools.map((tool, i) => (
            <Tag key={tool + i} text={tool} />
          ))}
        </ProjectTools>

        <ProjectLinksContainer>
          {project.liveLink && (
            <ProjectLink
              target="_blank"
              rel="noopener noreferrer"
              href={project.liveLink}
            >
              Live
            </ProjectLink>
          )}
          {project.repoLink && (
            <ProjectLink
              target="_blank"
              rel="noopener noreferrer"
              href={project.repoLink}
            >
              Repository
            </ProjectLink>
          )}
        </ProjectLinksContainer>
      </ProjectContent>
    </ProjectCardStyled>
  );
};

const ProjectCardStyled = styled.div<{ $variant: "featured" | "compact" }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.background.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.lg};
  transition: transform ${(props) => props.theme.transitions.base},
    box-shadow ${(props) => props.theme.transitions.base},
    border-color ${(props) => props.theme.transitions.base};

  @media (min-width: ${(props) => props.theme.breakpoints.nav}) {
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${(props) => props.theme.shadows.md};
      border-color: ${(props) => props.theme.colors.accent.turquoiseMuted};
    }
  }
`;

const ImageWrapper = styled.div<{ $variant: "featured" | "compact" }>`
  width: 100%;
  aspect-ratio: ${(props) => (props.$variant === "compact" ? "16 / 9" : "16 / 10")};
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlaceholderTile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Kanit";
  font-size: 32px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.accent.turquoise};
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.accent.turquoiseMuted},
    ${(props) => props.theme.colors.background.surfaceRaised}
  );
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${(props) => props.theme.spacing.lg};
`;

const ProjectTitle = styled.h4`
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: 600;
  font-size: 18px;
`;

const ProjectText = styled.p<{ $variant: "featured" | "compact" }>`
  color: ${(props) => props.theme.colors.text.secondary};
  margin-top: ${(props) => props.theme.spacing.sm};
  line-height: 1.6;
  flex: 1;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: ${(props) => (props.$variant === "compact" ? 2 : 3)};
`;

const ProjectTools = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${(props) => props.theme.spacing.md};
`;

const ProjectLinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.theme.spacing.md};
  min-height: 30px;
`;

const ProjectLink = styled.a`
  color: ${(props) => props.theme.colors.accent.turquoise};
  margin-right: 15px;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  transition: color ${(props) => props.theme.transitions.fast};

  &:hover {
    color: ${(props) => props.theme.colors.accent.turquoiseHover};
  }
`;
