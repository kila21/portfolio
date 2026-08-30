import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProjectEntry } from "../../data/projects";

const Row = styled(Link)`
  display: block;
  padding: ${(props) => props.theme.spacing.lg} 0;
  border-top: 1px solid ${(props) => props.theme.colors.line};
  transition: border-color ${(props) => props.theme.transitions.base};

  &:last-of-type {
    border-bottom: 1px solid ${(props) => props.theme.colors.line};
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.accent};
  }
`;

export const ProjectRow = ({
  project,
  index,
  showThumb,
  onHover,
}: {
  project: ProjectEntry;
  index: number;
  /** Render the screenshot inline (touch devices without the cursor-follow preview). */
  showThumb: boolean;
  onHover: (project: ProjectEntry | null) => void;
}) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Row
      to={`/projects/${project.id}`}
      onMouseEnter={() => onHover(project)}
      onMouseLeave={() => onHover(null)}
    >
      <Top>
        <Num>{num}</Num>
        <Title>{project.title}</Title>
        <Meta>
          <span>{project.tools.slice(0, 3).join(" · ")}</span>
          <Year>{project.year}</Year>
          <Arrow aria-hidden="true">→</Arrow>
        </Meta>
      </Top>

      {showThumb && project.image && (
        <Thumb>
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            decoding="async"
          />
        </Thumb>
      )}
    </Row>
  );
};

const Top = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-wrap: wrap;
    gap: ${(props) => props.theme.spacing.xs}
      ${(props) => props.theme.spacing.md};
  }
`;

const Num = styled.span`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 13px;
  color: ${(props) => props.theme.colors.textMuted};
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.display};
  font-size: clamp(1.6rem, 1.1rem + 2.4vw, 2.75rem);
  line-height: 1.05;
  color: ${(props) => props.theme.colors.text};
  transition: color ${(props) => props.theme.transitions.base};

  ${Row}:hover & {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const Meta = styled.span`
  margin-left: auto;
  display: inline-flex;
  align-items: baseline;
  gap: ${(props) => props.theme.spacing.md};
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 13px;
  color: ${(props) => props.theme.colors.textMuted};

  > span:first-child {
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      display: none;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-left: 0;
    width: 100%;
  }
`;

const Year = styled.span``;

const Arrow = styled.span`
  transition: transform ${(props) => props.theme.transitions.base};
  ${Row}:hover & {
    transform: translateX(4px);
  }
`;

const Thumb = styled.div`
  margin-top: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.radii.md};
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.line};
  aspect-ratio: 16 / 10;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
