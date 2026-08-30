import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Section } from "../common/Section";
import { ProjectRow } from "./ProjectRow";
import { ProjectPreview } from "./ProjectPreview";
import { projects, ProjectEntry } from "../../data/projects";
import { useHoverCapable } from "../../hooks/useHoverCapable";

export const Work = () => {
  const featured = projects.filter((p) => p.featured);
  const hoverCapable = useHoverCapable();
  const [hovered, setHovered] = useState<ProjectEntry | null>(null);

  return (
    <Section id="work" kicker="01 / Selected work" title="Things I've built">
      <List onMouseLeave={() => setHovered(null)}>
        {featured.map((project, i) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={i}
            showThumb={!hoverCapable}
            onHover={setHovered}
          />
        ))}
      </List>

      <AllLink to="/projects">
        All projects <span aria-hidden="true">→</span>
      </AllLink>

      {hoverCapable && <ProjectPreview project={hovered} />}
    </Section>
  );
};

const List = styled.div`
  margin-top: ${(props) => props.theme.spacing.md};
`;

const AllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  margin-top: ${(props) => props.theme.spacing.xl};
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 14px;
  color: ${(props) => props.theme.colors.accent};

  span {
    transition: transform ${(props) => props.theme.transitions.base};
  }
  &:hover span {
    transform: translateX(4px);
  }
`;
